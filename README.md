
```markdown
# 🌐 Loid Community — Front-End Workspace

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
</p>

---

## 🚀 Sobre o Projeto

Bem-vindo ao ecossistema de Front-end da **Loid Community**! Este é um ambiente de desenvolvimento colaborativo e focado em alta performance, construído inteiramente pela nossa comunidade. 

A aplicação foi desenhada utilizando **React.js com Vite** para garantir builds instantâneos e uma experiência de desenvolvimento extremamente veloz, estruturada sob as regras rígidas do **TypeScript** e estilizada com a eficiência do **Tailwind CSS**.

---

## 🏗️ 1. Arquitetura do Sistema: MVVM

Para garantir que múltiplas squads consigam trabalhar no mesmo repositório sem gerar conflitos de código, adotamos o padrão arquitetural **MVVM (Model-View-ViewModel)**. 

A divisão de responsabilidades é cirúrgica:

### 📺 View (A Interface)
* **O que é:** Componentes visuais puros (`.tsx`).
* **Regra:** **Zero lógica de negócios ou requisições de API.** A View apenas consome o estado exposto pela *ViewModel* e renderiza os elementos na tela. Interações do usuário (como cliques) apenas disparam funções da *ViewModel*.

### 🧠 ViewModel (O Estado e a Lógica)
* **O que é:** Custom Hooks do React (`use[Funcionalidade]ViewModel.ts`).
* **Regra:** É o cérebro da tela. Gerencia estados (`useState`), ciclos de vida (`useEffect`) e expõe apenas as variáveis e funções necessárias para a View. Ela consome a camada de *Model* para tratar os dados.

### 🗄️ Model (Os Dados e Serviços)
* **O que é:** Tipagens TypeScript (`interfaces`), mapeamento de dados (Mappers/Adapters) e contratos de API.
* **Regra:** Lida diretamente com as regras de negócio cruas e com a comunicação direta com o nosso Back-end.

---

## 📁 2. Estrutura de Pastas

Mantemos o diretório `src` padronizado da seguinte forma:

```text
src/
├── assets/               # Imagens, ícones e arquivos estáticos globais
├── components/           # Componentes globais reutilizáveis (Botões, Inputs, Modais)
├── core/                 # Camada do Model Global (instância da API, tipos globais)
│   ├── api/              # Configuração do Axios / Fetch Client
│   └── types/            # Interfaces e types compartilhados
├── routes/               # Configuração das rotas da aplicação (React Router)
└── modules/              # Funcionalidades isoladas do sistema (Módulos de Domínio)
    └── auth/             # Exemplo: Módulo de Autenticação
        ├── components/   # Componentes exclusivos deste módulo
        ├── models/       # Tipos e mappers do módulo
        ├── services/     # Requisições de API específicas do módulo
        ├── viewmodels/   # useLoginViewModel.ts (Toda a lógica do hook)
        └── views/        # LoginView.tsx (A interface visual estrita)

```

---

## 🛠️ 3. Como Começar (Setup Local)

Siga os passos abaixo para rodar o projeto localmente na sua máquina:

### 📋 Pré-requisitos

* **Node.js** (Versão 18 LTS ou superior)
* **Git**
* **NPM** (Gerenciador de pacotes padrão)

### 🚀 Instalação e Execução

1. **Clone o repositório da Organização:**
```bash
git clone [https://github.com/](https://github.com/)[sua-organizacao]/[seu-repositorio-frontend].git

```


2. **Acesse a pasta do projeto:**
```bash
cd [nome-da-pasta]

```


3. **Instale todas as dependências:**
```bash
npm install

```


4. **Configure as Variáveis de Ambiente:**
Crie um arquivo `.env` na raiz do projeto e insira a URL do Back-end fornecida pelo seu Tech Lead:
```env
VITE_API_URL=http://localhost:3000

```


5. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


*Abra o navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).*

---

## 🚦 4. Fluxo de Trabalho das Squads (Git Flow)

Para manter a organização do Kanban e evitar quebras na ramificação principal, jogaremos sob estas regras:

* **`main`:** Código 100% estável. **Ninguém comita direto aqui.**
* **`develop`:** Ambiente de integração das squads. Todas as features se encontram aqui.
* **Branches de Task (`feature/` ou `fix/`):** Crie sempre a partir da `develop`.
* *Padrão de nomenclatura:* `feature/nome-da-squad/titulo-da-task`
* *Exemplo:* `git checkout -b feature/akatsuki/input-senha`



### 🔄 Pull Requests e Code Review

Ao finalizar a sua tarefa no seu ambiente local, envie a sua branch para o GitHub e abra um **Pull Request (PR)** apontando para a branch `develop`.
A tarefa mudará automaticamente para a coluna **In Review** no Kanban, e o **Tech Lead** da sua Squad fará a revisão do código antes de realizar o merge.

---
