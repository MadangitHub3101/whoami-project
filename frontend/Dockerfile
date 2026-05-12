FROM node:18-alpine

WORKDIR /app

COPY index.html .
COPY config.js .

RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-s", ".", "-l", "8080"]