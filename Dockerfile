# # Eslint scan code
# FROM node:16.13.0-slim AS linting
# WORKDIR /home/ui
# COPY . ./
# RUN npm i -g eslint
# RUN npm install eslint-plugin-react@latest --save-dev
# RUN eslint .
# # RUN eslint --no-eslintrc /home/ui/src/**


FROM node:16.13.0-slim AS build
WORKDIR /
COPY . .
EXPOSE 3000
RUN npm i
CMD [ "npm", "start" ]

