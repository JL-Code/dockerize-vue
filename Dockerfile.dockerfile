FROM nginx:stable-alpine

WORKDIR /app

COPY /dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]