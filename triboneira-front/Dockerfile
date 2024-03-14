FROM node:16.14-alpine

WORKDIR /

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000
