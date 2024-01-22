# Author: Ricardo Mejía
# Creation date: 05-05-2023
# Description: Dockerfile for the Next Js Aplication frontend application


FROM node:20-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 6107

CMD ["npm", "start"]