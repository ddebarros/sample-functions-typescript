#!/bin/bash

# When deploying, the doctl CLI will run this script to build the  
# nessesary accests required.
yarn install 
yarn build

rm -rf node_modules
yarn install --production --ignore-engines
