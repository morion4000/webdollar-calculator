FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install -g bower
RUN npm install

CMD [ "node", "node_modules/static-server/bin/static-server.js", "-p", "80" ]