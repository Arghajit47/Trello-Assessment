FROM node:14-alpine
COPY . /workdir
WORKDIR /workdir
CMD ci-scripts/trello.sh