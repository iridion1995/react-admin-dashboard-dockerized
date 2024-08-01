FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=5000
ENV MONGO_URI=mongodb+srv://iridiondevija:Iridion1995-@react-admin-dasboard.xruxfq6.mongodb.net/?retryWrites=true&w=majority&appName=react-admin-dasboard

EXPOSE 5000

CMD ["npm", "start"]