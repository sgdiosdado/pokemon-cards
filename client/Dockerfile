FROM node:14-slim

RUN yarn global add @vue/cli-service
RUN mkdir /client
WORKDIR /client

COPY . .

RUN yarn install

EXPOSE 8080
CMD yarn serve