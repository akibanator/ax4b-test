FROM node:alpine

USER node

WORKDIR /usr/src/node

COPY --chown=node:node package*.json ./

#ci - continuous integration
RUN npm ci

COPY --chown=node:node ./ ./

CMD ["npm", "run", "dev"]

EXPOSE 3000

