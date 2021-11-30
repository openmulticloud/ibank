FROM node:13-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install
EXPOSE 8888
CMD [ "node", "app.js" ]
