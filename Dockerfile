FROM node:lts

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

#RUN npm run build

EXPOSE 3000

#for dev
CMD ["npm", "start"]
