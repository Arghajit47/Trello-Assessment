#!/bin/sh

cd cypress/
npm install
echo "npm dependencies installed"
npm run test
echo "Tests are run successfully, look out for the report in 'cypress/Report' directory"
