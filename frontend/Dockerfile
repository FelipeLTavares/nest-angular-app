FROM node:18

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "cstart"]