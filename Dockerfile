FROM php:8.1-apache

RUN apt-get update \
  && apt-get install -y nodejs \
  && apt-get install -y npm\
  && npm cache clean -f \
  && npm install -g n \
  && n stable \
  && apt-get clean

COPY public /var/www/html/public
COPY src /var/www/html/src
COPY package.json /var/www/html
COPY package-lock.json /var/www/html

WORKDIR /var/www/html

RUN npm install \
  && npm run build \
  && rm -rf node_modules public src \
  && mv build/* ./


