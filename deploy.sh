#!/bin/sh

sudo service nginx stop
sudo service supervisor stop

git pull
npm run prod:client

sudo service supervisor start
sudo service nginx start
