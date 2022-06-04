FROM node:16-alpine

WORKDIR /app

COPY app/package.json /app/package.json

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev", "--host"]