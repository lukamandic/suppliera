FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install -g nodemon
RUN npm install

COPY . .

CMD [ "npm", "start" ]