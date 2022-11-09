# syntax=docker/dockerfile:1

FROM node:14-alpine
WORKDIR /client

# install dependencies
COPY package*.json .
RUN npm install

EXPOSE 3000

# Copying source files
COPY . .

CMD [ "npm", "start" ]
