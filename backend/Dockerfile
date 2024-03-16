FROM node:lts-alpine


RUN apk add --no-cache bash


WORKDIR /app


COPY package.json ./

COPY .env ./

COPY . .