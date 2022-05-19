FROM mhart/alpine-node:16 as build
ENV CI=true

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci --production

COPY . .

RUN npm run build

FROM nginx:1.12-alpine as prod

COPY --from=build /app/build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]