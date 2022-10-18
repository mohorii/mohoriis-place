FROM php:8.1-apache

COPY public /var/www/html/public
COPY src /var/www/html/src
COPY package.json /var/www/html
COPY package-lock.json /var/www/html

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt install nodejs