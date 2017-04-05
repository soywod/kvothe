#!/bin/sh

sudo service nginx stop
sudo service supervisor stop

git pull
yarn install
npm run prod:client

sudo service supervisor start
sudo service nginx start
