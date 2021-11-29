# Build stage
FROM node:16.13.0-slim AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install
RUN npm install react-scripts@4.0.3 -g --silent
COPY . ./
RUN npm run build

# Runing webapp stage
FROM nginx:stable-alpine AS runwebapp
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]