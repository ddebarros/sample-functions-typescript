#!/bin/bash

# When deploying, the doctl CLI will run this script to build the  
# necessary accests required.
rm -rf ./dist/

yarn install 
yarn build

rm -rf node_modules
yarn install --production
