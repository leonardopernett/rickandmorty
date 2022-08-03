FROM node:1.23.1

WORKDIR /opt/rickandmortyapi

COPY . .

RUN npm install --quiet

EXPOSE 3000

CMD ["node", "/opt/rickandmortyapi/server/index.js"]