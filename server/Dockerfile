FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV CLIENT_URL=172.31.19.21:3000

EXPOSE 5000

CMD ["npm","start"]