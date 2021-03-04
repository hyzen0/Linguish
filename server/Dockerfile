FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV CLIENT_URL=3.14.146.184:3000

EXPOSE 5000

CMD ["npm","start"]