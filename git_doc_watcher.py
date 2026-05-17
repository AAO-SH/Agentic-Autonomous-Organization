import os
import sys
import time
import subprocess
import re

# Garantir codificação UTF-8 para console no Windows
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# Configurações do Watcher
WATCH_DIR = "src"
CHECK_INTERVAL_SECONDS = 5
QUIET_PERIOD_SECONDS = 10  # Tempo de silêncio para garantir que a edição foi concluída
WORKSPACE_DIR = os.getcwd()

def run_cmd(cmd, cwd=WORKSPACE_DIR):
    try:
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd, encoding='utf-8')
        return res.returncode, res.stdout.strip(), res.stderr.strip()
    except Exception as e:
        return -1, "", str(e)

def get_modified_files():
    # Obtém status do git (simplificado, apenas modificados e não commitados)
    code, stdout, stderr = run_cmd("git status --porcelain")
    if code != 0:
        return []
    
    files = []
    for line in stdout.split('\n'):
        if not line:
            continue
        status = line[:2].strip()
        filepath = line[3:]
        # Apenas monitoramos arquivos dentro da pasta WATCH_DIR ou arquivos principais
        if filepath.startswith(WATCH_DIR) or filepath == "index.html":
            files.append(filepath)
    return files

def get_current_version():
    instrucoes_path = os.path.join(WORKSPACE_DIR, "instrucoes.txt")
    if not os.path.exists(instrucoes_path):
        return "1.0.0"
    
    try:
        with open(instrucoes_path, 'r', encoding='utf-8') as f:
            content = f.read()
        match = re.search(r"Versão atual:\s*v?([\d\.]+)", content)
        if match:
            return match.group(1)
    except Exception as e:
        print(f"[-] Erro ao ler instrucoes.txt: {e}")
    return "1.0.0"

def increment_version(version_str):
    parts = version_str.split('.')
    if len(parts) == 2:
        # Se for v1.9, incrementa para v1.9.1
        return f"{parts[0]}.{parts[1]}.1"
    elif len(parts) >= 3:
        try:
            major = parts[0]
            minor = parts[1]
            patch = int(parts[2]) + 1
            return f"{major}.{minor}.{patch}"
        except ValueError:
            return f"{version_str}.1"
    return f"{version_str}.1"

def update_documentation(new_version, changed_files):
    readme_path = os.path.join(WORKSPACE_DIR, "README.md")
    instrucoes_path = os.path.join(WORKSPACE_DIR, "instrucoes.txt")
    
    # 1. Atualizar README.md
    if os.path.exists(readme_path):
        try:
            with open(readme_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Montar a descrição dos arquivos alterados
            files_str = ", ".join([f"`{f}`" for f in changed_files])
            new_entry = f"- `v{new_version}` - [Auto] Atualização automática de documentação e código devido a alterações em {files_str}."
            
            # Localizar onde inserir (logo abaixo da última versão encontrada)
            # Vamos achar o último padrão de versão - `vX.Y...`
            lines = content.split('\n')
            insert_idx = -1
            for i, line in enumerate(lines):
                if re.match(r"^-\s+`v\d+[\d\.]*`", line):
                    insert_idx = i
            
            if insert_idx != -1:
                lines.insert(insert_idx + 1, new_entry)
                new_content = '\n'.join(lines)
                with open(readme_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"[+] README.md atualizado com a versão v{new_version}")
            else:
                print("[-] Não foi possível localizar a lista de versões no README.md")
        except Exception as e:
            print(f"[-] Erro ao atualizar README.md: {e}")
            
    # 2. Atualizar instrucoes.txt
    if os.path.exists(instrucoes_path):
        try:
            with open(instrucoes_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = re.sub(
                r"(Versão atual:\s*v?)[\d\.]+",
                f"\\1{new_version}",
                content
            )
            
            with open(instrucoes_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[+] instrucoes.txt atualizado para a versão v{new_version}")
        except Exception as e:
            print(f"[-] Erro ao atualizar instrucoes.txt: {e}")

def auto_commit(new_version, changed_files):
    print("[*] Iniciando processo de stage e commit automático...")
    
    # Adicionar todos os arquivos alterados e de documentação
    code, stdout, stderr = run_cmd("git add .")
    if code != 0:
        print(f"[-] Falha ao dar git add: {stderr}")
        return False
        
    # Commit
    files_list = ", ".join(changed_files)
    commit_msg = f"feat(ui): v{new_version} - atualizacao automatica de documentacao e codigo"
    commit_desc = f"Modificações detectadas pelo watcher nos arquivos: {files_list}. Documentação atualizada sequencialmente."
    
    code, stdout, stderr = run_cmd(f'git commit -m "{commit_msg}" -m "{commit_desc}"')
    if code == 0:
        print(f"[+] Commit {new_version} realizado com sucesso!")
        print(stdout)
        return True
    else:
        print(f"[-] Falha ao commitar: {stderr}")
        return False

def main():
    print("=" * 60)
    print("🤖 Watcher Automático de Git & Documentação (AAO)")
    print(f"Diretório de monitoramento: {os.path.join(WORKSPACE_DIR, WATCH_DIR)}")
    print(f"Intervalo de verificação: {CHECK_INTERVAL_SECONDS}s")
    print(f"Período de estabilização (silêncio): {QUIET_PERIOD_SECONDS}s")
    print("=" * 60)
    print("[*] Watcher ativo e aguardando modificações...")
    
    last_modified_files = set()
    last_change_time = 0
    waiting_for_quiet = False
    
    try:
        while True:
            current_modified = set(get_modified_files())
            
            # Filtra arquivos de documentação para não entrar em loop recursivo com o watcher
            current_modified = {f for f in current_modified if not (f == "README.md" or f == "instrucoes.txt" or f == "git_doc_watcher.py" or f.startswith(".gemini"))}
            
            if current_modified:
                if not waiting_for_quiet or current_modified != last_modified_files:
                    print(f"[*] Alterações detectadas nos arquivos: {', '.join(current_modified)}")
                    last_modified_files = current_modified
                    last_change_time = time.time()
                    waiting_for_quiet = True
                
                # Se as modificações pararam pelo tempo de silêncio (silence period)
                elif waiting_for_quiet and (time.time() - last_change_time >= QUIET_PERIOD_SECONDS):
                    print("[*] Nenhuma nova alteração detectada. Processando atualização...")
                    
                    curr_ver = get_current_version()
                    new_ver = increment_version(curr_ver)
                    
                    print(f"[*] Incrementando versão de v{curr_ver} para v{new_ver}")
                    
                    # Atualiza os arquivos
                    update_documentation(new_ver, list(last_modified_files))
                    
                    # Executa o commit
                    if auto_commit(new_ver, list(last_modified_files)):
                        print("[*] Repositório atualizado e limpo!")
                    
                    # Reseta estado do watcher
                    last_modified_files = set()
                    waiting_for_quiet = False
            else:
                if waiting_for_quiet:
                    # Caso as modificações tenham sido revertidas manualmente
                    last_modified_files = set()
                    waiting_for_quiet = False
            
            time.sleep(CHECK_INTERVAL_SECONDS)
            
    except KeyboardInterrupt:
        print("\n[*] Watcher encerrado pelo usuário.")
    except Exception as e:
        print(f"\n[-] Erro fatal no Watcher: {e}")

if __name__ == "__main__":
    main()
