FROM node:19-alpine As development

WORKDIR /usr/src/app

ENV FOO=bar

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main"]