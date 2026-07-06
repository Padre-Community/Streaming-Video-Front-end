# 🌐 DOCUMENTAÇÃO DE DESENVOLVIMENTO FRONT-END — FRONTEND SQUADS

Sejam bem-vindos ao ecossistema de Front-end. Para este projeto da comunidade, adotaremos a arquitetura **MVVM (Model-View-ViewModel)** estruturada em **React.js (com Vite), TypeScript e Tailwind CSS**. O objetivo é garantir independência de código, testabilidade e separação clara de responsabilidades entre as squads.

---

## 🏗️ 1. Entendendo a Arquitetura MVVM no React

No nosso ecossistema, as responsabilidades de cada componente dentro de uma funcionalidade são rigidamente divididas em três camadas:

### 📺 View (A Interface)

- **O que é:** O componente visual puro em React (`.tsx`).
- **Regra de Ouro:** A View **não possui lógica de negócios, não faz requisições à API e não manipula dados brutos**. Ela apenas consome o estado exposto pela _ViewModel_ e renderiza elementos na tela. Ela recebe interações do usuário (como cliques) e repassa para as funções da _ViewModel_.
 
### 🧠 ViewModel (O Estado e a Lógica)

- **O que é:** Um Custom Hook do React (`use[Funcionalidade]ViewModel.ts`).
- **Regra de Ouro:** É o cérebro da tela. Ela gerencia os estados (`useState`), os ciclos de vida (`useEffect`) e expõe apenas as variáveis e funções que a _View_ precisa para funcionar. Ela conversa com a camada de _Model_ para buscar e salvar dados.

### 🗄️ Model (Os Dados e Serviços)

- **O que é:** Tipagens TypeScript (`interfaces`), mapeamento de dados (Mappers/Adapters) e serviços de API (`services/api.ts`).
- **Regra de Ouro:** Define a estrutura dos dados reais que trafegam na aplicação e lida diretamente com as regras do mundo real e comunicação com o Back-end.

---

## 📁 2. Estrutura de Pastas do Projeto

Para não gerar conflito entre as squads trabalhando em paralelo, utilizaremos a seguinte padronização de diretórios dentro da pasta `src`:

```text
src/
├── assets/               # Imagens, ícones e fontes globais
├── components/           # Componentes globais e reutilizáveis (botões, inputs)
├── core/                 # Camada do Model Global (serviços de API, tipos globais)
│   ├── api/              # Configuração do Axios / Fetch Client
│   └── types/            # Interfaces de dados compartilhadas
├── routes/               # Configuração de rotas da aplicação (React Router)
└── modules/              # Funcionalidades isoladas do sistema (Ex: Auth, Dashboard)
    └── auth/             # Módulo de Autenticação
        ├── components/   # Sub-componentes exclusivos do módulo
        ├── models/       # Tipos e mappers exclusivos do módulo
        ├── services/     # Requisições de API específicas do módulo
        ├── viewmodels/   # useLoginViewModel.ts (A lógica do hook)
        └── views/        # LoginView.tsx (A tela visual)

```

---

## 🛠️ 3. Como Baixar, Configurar e Executar o Projeto (Vite Setup)

Instruções passo a passo para qualquer desenvolvedor de squad preparar o ambiente local:

### 📋 Pré-requisitos Obrigatórios

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (Versão 18 ou superior LTS)
- **Git**
- **Gerenciador de Pacotes:** Utilizaremos o `npm` (ou o padronizado pelo repositório).

### 🚀 Passo a Passo de Setup

1. **Clonar o Repositório:**
   Abra o seu terminal na pasta de projetos e execute:

```bash
git clone [URL_DO_SEU_REPOSITORIO_FRONTEND]

```

2. **Acessar a Pasta do Projeto:**

```bash
cd [NOME_DA_PASTA_DO_PROJETO]

```

3. **Instalar as Dependências:**

```bash
npm install

```

4. **Configurar as Variáveis de Ambiente:**

- Crie um arquivo chamado `.env` na raiz do projeto.
- **Atenção:** No Vite, as variáveis de ambiente precisam começar obrigatoriamente com o prefixo `VITE_`. Insira a URL do servidor do Back-end:

```env
VITE_API_URL=http://localhost:3000

```

5. **Rodar em Modo de Desenvolvimento:**

```bash
npm run dev

```

O Vite vai iniciar o servidor local instantaneamente. Basta abrir o navegador no endereço indicado (geralmente `http://localhost:5173`).

---

## 🚦 4. Regras de Fluxo e Git para as Squads

Para evitar conflitos nos merges, utilizaremos o seguinte fluxo de branches:

- **`main`:** Apenas código estável. **Ninguém comita direto aqui.**
- **`develop`:** Código integrado das squads para testes.
- **Branches de Task (`feature/` ou `fix/`):** Crie a partir da `develop`.
- _Padrão de Nome:_ `feature/nome-da-squad/titulo-da-task` (Ex: `feature/akatsuki/input-login`).

- **Pull Requests (PRs):** Ao terminar, abra um PR para a `develop`. A tarefa vai para **In Review** no Kanban, e o **Tech Lead** do seu squad revisa e faz o merge.

---
