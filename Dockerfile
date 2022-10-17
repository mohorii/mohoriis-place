FROM php:8.1-apache

COPY build /var/www/html

WORKDIR /var/www/html