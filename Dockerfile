FROM node:latest
ENV PORT=4000
COPY . .
RUN npm install
ENTRYPOINT npm start
