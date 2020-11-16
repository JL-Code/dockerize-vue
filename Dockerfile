# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
# npm 切换到淘宝镜像源
# RUN npm install -g nrm && nrm use taobao
RUN npm config set registry http://registry.npm.taobao.org
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]