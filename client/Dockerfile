FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV REACT_APP_API_URL=http://172.31.19.21:3000

RUN npm run build 

EXPOSE 3000

CMD [ "npx", "serve", "-s", "build", "-l", "3000" ]
