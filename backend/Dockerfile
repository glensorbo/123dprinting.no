FROM node:18-alpine as builder
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:18-alpine AS server
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install --omit=dev
COPY ./.env ./
COPY --from=builder ./usr/app/build ./build
COPY ./files ./files
EXPOSE 5969
CMD [ "npm", "start" ]
