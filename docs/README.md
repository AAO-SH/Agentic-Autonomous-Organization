# Agentic Autonomous Organization (Frontend)

Bem-vindo ao repositório **Agentic Autonomous Organization**. Este projeto open source atua como uma interface para explicar e administrar múltiplos trabalhos e repositórios automatizados por Agentes de Inteligência Artificial fornecidos pela base de código.

## 🎨 Design e Interface

O front-end foi construído com um design minimalista, focado na estética "Dark Mode" característica das ferramentas de Inteligência Artificial mais avançadas do mercado. As cores, os contrastes e as animações suaves ("glassmorphism", gradientes vítreos da Aurora) foram escolhidos para passar uma sensação de modernidade e sofisticação premium.

A navegação ocorre através de uma SPA (Single Page Application) em formato de **Apresentação de Slides Horizontais**, garantindo foco na retenção do usuário.

### Tecnologias Utilizadas
- **React 19**: Biblioteca principal para a construção da interface do usuário.
- **Vite**: Ferramenta de build super rápida e otimizada.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework utilitário usado para estruturação e layout rápido.
- **CSS Nativo**: Para renderização extrema e manipulação de animações de fundo complexas (Aurora e DotField) garantindo máxima performance (PageSpeed 100/100).

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

O controle de versão deste projeto segue o Semantic Versioning (vX.Y.Z). 

- `v1.0` - Versão inicial / Lançamento.
- (...)
- `v1.10.1` - Atualização autônoma: Modificações gerais detectadas em configurações, pacotes e testes de CI/CD.
- `v2.0.0` - **Reescrita Total de Arquitetura (Major Update)**: 
  - Mudança do layout "Bento Grid" para SPA de Slides Horizontais.
  - Implementação do Tailwind CSS.
  - Substituição do `framer-motion` por animações Nativas CSS para otimização extrema.
  - Inclusão do Menu Nav estilo Liquid Glass Apple Premium.
  - Dead Code Elimination e otimização `React.memo` para atingir nota máxima no Google PageSpeed Insights.
- **`v2.0.3` (ATUAL)** - Adição da nova seção "Ecossistema Integrado", máscara de segurança "Em Breve" (Easter Egg) e nova navegação guiada por botões Liquid Glass.

> **Nota para futuros contribuidores**: O projeto abandonou a arquitetura antiga de rolagem vertical pesada em favor de máxima velocidade. Respeitem o protocolo do `React.memo` ao adicionar novos componentes de renderização intensiva.

Ao realizar qualquer atualização importante no projeto, lembre-se de registrar a evolução do versionamento no histórico de commits e eventuais changelogs!

