FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV REACT_APP_API_URL=3.137.202.195:5000

RUN npm run build 

EXPOSE 3000

CMD [ "npx", "serve", "-s", "build", "-l", "3000" ]
