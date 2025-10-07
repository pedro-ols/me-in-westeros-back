#  Westeros API - Me in Westeros

Uma API REST inspirada no universo de **Game of Thrones/As Crônicas de Gelo e Fogo**, permitindo explorar as casas nobres, personagens, castelos e atores de Westeros.

##  Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v16 ou superior)
- **PostgreSQL** (v12 ou superior)
- **Visual Studio Code** (recomendado)
- **Code Runner** (extensão do VS Code)
- **Git**

## Configuração do Ambiente

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/pedro-ols/me-in-westeros-back.git
cd me-in-westeros-back
```

### 2️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Porta do servidor
PORT=4000

# URL de conexão com o PostgreSQL
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/me-in-westeros?schema=public"
```

> ⚠️ **Importante**: Substitua `seu_usuario` e `sua_senha` pelas credenciais do seu PostgreSQL.

### 3️⃣ Instalação e Configuração

Execute os comandos na seguinte ordem:

```bash
# Instalar dependências
npm install

# Instalar biblioteca de comunicação full-stack
npm install cors

# Executar migrações do banco de dados
npx prisma migrate dev

# Iniciar o servidor de desenvolvimento
npm run dev
```

### 4️⃣ Alimentação do banco
Abra o arquivo **seed.js** e pressione Ctrl + Alt + n para alimentar o banco localhost

## 🎯 Endpoints Principais

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/houses` | Lista todas as casas de Westeros |
| `GET` | `/characters` | Lista todos os personagens |
| `GET` | `/castles` | Lista todos os castelos |
| `GET` | `/actors` | Lista todos os atores |
| `GET` | `/books` | Lista todos os livros |

## 🗄️ Estrutura do Banco de Dados

O projeto utiliza **Prisma ORM** com **PostgreSQL** e inclui as seguintes entidades:

- **Houses**: Casas nobres (Stark, Lannister, Targaryen, etc.)
- **Characters**: Personagens de cada casa
- **Castles**: Castelos e suas localizações
- **Actors**: Atores que interpretaram os personagens
- **Books**: Livros da série

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **TypeScript** - Superset do JavaScript

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor em modo desenvolvimento

# Banco de Dados
npx prisma generate  # Gera o cliente Prisma
npx prisma db seed   # Popula o banco com dados iniciais

# Produção
npm start           # Inicia o servidor em modo produção
npm run build       # Compila o projeto
```

## 🎮 Como Usar

1. Após seguir os passos de configuração, o servidor estará rodando em `http://localhost:4000/me-in-westeros`
2. Acesse os endpoints através de um cliente REST (Postman, Insomnia) ou pelo navegador
3. Use `npx prisma studio` para visualizar os dados no navegador

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

*"Winter is coming"* ❄️