
FROM node:15
WORKDIR /home/server/
COPY package*.json ./
COPY api.js ./api.js
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start" ]
