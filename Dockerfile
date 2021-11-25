# # Eslint scan code
# FROM node:16.13.0-slim AS linting
# WORKDIR /home/ui
# COPY . ./
# RUN npm i -g eslint
# RUN npm install eslint-plugin-react@latest --save-dev
# RUN eslint .
# # RUN eslint --no-eslintrc /home/ui/src/**

# FROM node:16.13.0-slim AS build
# WORKDIR /
# COPY . .
# EXPOSE 3000
# RUN npm i
# CMD [ "npm", "start" ]


# build environment
FROM node:16.13.0-slim AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install
RUN npm install jwt-decode
RUN npm install react-scripts@4.0.3 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]