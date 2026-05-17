# Agentic Autonomous Organization (Frontend)

Bem-vindo ao repositório **Agentic Autonomous Organization**. Este projeto open source atua como uma interface para explicar e administrar múltiplos trabalhos e repositórios automatizados por Agentes de Inteligência Artificial fornecidos pela base de código.

## 🎨 Design e Interface

O front-end foi construído com um design minimalista, focado na estética "Dark Mode" característica das ferramentas de Inteligência Artificial mais avançadas do mercado. As cores, os contrastes e as animações suaves ("glassmorphism", gradientes azuis/roxos) foram escolhidos para passar uma sensação de modernidade e sofisticação premium.

### Tecnologias Utilizadas
- **React**: Biblioteca principal para a construção da interface do usuário.
- **Vite**: Ferramenta de build super rápida e otimizada.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática e segurança ao código.
- **CSS Vanilla**: Estilização direta, mantendo alta flexibilidade e controle no design.

## 🚀 Como Executar o Projeto Localmente

1. Certifique-se de ter o **Node.js** instalado na sua máquina.
2. Clone o repositório ou navegue até a pasta raiz do projeto.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a URL gerada no terminal (geralmente `http://localhost:5173/`).

## 🚀 Padrão de Versionamento

O controle de versão deste projeto segue um formato numérico simples e direto, usando o prefixo **v**. 

- `v1.0` - Versão inicial / Lançamento.
- `v1.1` e `v1.2` - Configurações de Deploy no GitHub Pages e CNAME.
- `v1.3` - Atualização total de interface: tema voltado ao tom azul claro (Blue Aesthetic), nova fonte (Outfit), grade interativa guiada pelo mouse, ícones flutuantes de IAs (ChatGPT, Gemini, Claude, etc) e efeitos de rolagem parallax usando Framer Motion.
- `v1.4` - Correção de Build (Tipagem do React useRef).
- `v1.5` - Reestruturação geral inspirada no Figma "Bento Grid". Inclusão de transições únicas Tilt 3D. Criação do arquivo de intruções nativo.
- `v1.6` e `v1.7` - Refinamento das grades (Remoção de Commits), atualização técnica das descrições (AI Workflow), correção responsiva para celulares/tablets, adição do Footer revisado e introdução da seção "Developers Collaboration".
- `v1.7.1` - Hotfix para erros de tipagem e imports não utilizados no React.
- `v1.8` - Refinamento total de margens e espaçamentos (redução de espaços vazios), adição de ilustrações no Workflow, e redesign da marca e gradiente "open code" no site.
- `v1.8.1` - Atualização da documentação base do projeto (README e instruções) para versões mais recentes.
- `v1.8.2` - Padronização de formatação de tags JSX auto-fechadas no `App.tsx` e inclusão da classe CSS `.dev-avatar` no `index.css`.
- `v1.9` - Otimização de performance e interatividade: suporte a eventos touch para o fundo interativo, aceleração por GPU (hardware layers) com transição suave, animações de entrada com atraso escalonado (staggered delay) para os cards Bento e suporte completo a telas ultra-mobile (<= 480px).
- `v1.9.1` - Substituição dos placeholders por avatares reais (`avatar1.png`, `avatar2.png`) na seção "Developers Collaboration" utilizando a classe `.dev-avatar`.
- `v1.9.2` - Adição de efeito luminoso (Glow Effect e Shine Effect) utilizando novas classes CSS (`.avatar-wrapper`, `.blue-glow`, `.purple-glow`) envolta dos avatares dos colaboradores.
- `v1.9.3` - Hotfix: Correção de erro fatal de sintaxe TypeScript (`TS1128`, duplicação de tags) e otimização das props do componente `TiltCard`.
- `v1.9.3` - Atualização autônoma: Modificações detectadas em `EADME.md`.
- `v1.9.4` - Atualização autônoma: Modificações detectadas em `jest.config.cjs`, `src/App.tsx`, `ackage-lock.json`, `package.json`.
- `v1.9.4` - Atualização autônoma: Modificações detectadas em `src/build.test.ts`, `src/App.test.tsx`, `package.json`, `jest.setup.ts`, `github/workflows/deploy.yml`, `__mocks__/`.
- `v1.9.4` - Atualização autônoma: Modificações detectadas em `est.config.cjs`, `jest.setup.ts`.


> **Nota para futuros contribuidores**: A seção `Developers Collaboration` no código possui cards pré-estruturados. Assim que novos desenvolvedores entrarem para o time, seus avatares, nomes e especialidades devem substituir os atuais placeholders de "Vaga Aberta".

Ao realizar qualquer atualização importante no projeto, lembre-se de registrar a evolução do versionamento no histórico de commits e eventuais changelogs!
