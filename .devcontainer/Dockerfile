FROM mcr.microsoft.com/devcontainers/javascript-node:16

WORKDIR /usr/client/
COPY package.json package-lock.json ./

RUN yarn install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]