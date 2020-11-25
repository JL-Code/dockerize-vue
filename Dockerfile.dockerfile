FROM nginx:1.19.4-alpine

RUN echo 'workdir before:' && pwd && ls -al

WORKDIR /app

RUN echo 'workdir after:' && pwd && ls -al

COPY /dist ./
COPY /nginx.conf /etc/nginx/nginx.conf

RUN echo 'copy after:' && pwd && ls -al

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]