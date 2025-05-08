# Usa Node 18
FROM node:18

# Carpeta de trabajo
WORKDIR /app

# Copia los archivos
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
