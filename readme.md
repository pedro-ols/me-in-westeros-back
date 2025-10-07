Westeros API - Me in Westeros

projeto api bla bla bla

Passos para inicialização local do repositorio

pre requisitos:
instalação dos programas
-node
-postgres
-vscode
-code runner

passo um - clonar repositorio
 bash´```
 git clone "https://ksdghlfklshdghkksdg.git.com"

passo dois - .env

 criar o arquivo .env na raiz do projeto e colocar a porta PORT=[porta de sua preferencia - indico 4000], e DATABASE_URL="postgresql://seu_usuario:suasenha@localhost:7007/me-in-westeros?schema=public"

passo tres - comandos 
npm install
npx prisma migrate dev
npm run dev