FROM node:18-alpine

# Configurar diretório de trabalho
WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm install --omit=dev

# Copiar os arquivos do Prisma
COPY prisma ./prisma

# Gerar o Prisma Client diretamente no contêiner
RUN npx prisma generate

# Copiar o restante dos arquivos do projeto
COPY . .

EXPOSE 8000

# Comando para iniciar a aplicação
CMD ["node", "dist/server.js"]
