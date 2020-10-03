FROM node:14-slim

RUN mkdir /server
WORKDIR /server

COPY . .

RUN yarn install

EXPOSE 5000
CMD npm run dev