FROM  node:latest AS step-build

WORKDIR /app

COPY /package*.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM nginx:alpine 

COPY --from=step-build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]