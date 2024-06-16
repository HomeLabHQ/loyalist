FROM node:20-slim AS build
WORKDIR /frontend
COPY ./frontend/. ./
RUN yarn install
ARG API_URL
ENV API_URL=$API_URL


RUN yarn run build

FROM caddy:2.7.6

COPY --from=build /frontend/dist /usr/share/web
