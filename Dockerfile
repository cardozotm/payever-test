FROM node:14-alpine

WORKDIR /app

COPY . ./

RUN mkdir -p /usr/share/nginx/html/api-docs && chmod -R 777 /usr/share/nginx/html/api-docs

RUN npm install

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]