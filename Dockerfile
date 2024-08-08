FROM node:22-alpine3.19

WORKDIR /app

COPY . .

WORKDIR /app/server

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]