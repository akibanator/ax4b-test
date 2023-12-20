FROM node:alpine

USER node

WORKDIR /usr/src/node

COPY --chown=node:node package*.json ./

#ci - continuous integration
#ommit-dev - build for production without installing dev dependencies
RUN npm ci

COPY --chown=node:node ./ ./

CMD ["npm", "start"]

EXPOSE 3001

