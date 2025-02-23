FROM node:22-slim AS frontend
WORKDIR /frontend
COPY ./frontend/package.json ./frontend/yarn.lock ./frontend/.yarnrc.yml ./
COPY ./frontend/.yarn/releases/yarn-*.cjs  ./.yarn/releases/
RUN yarn install
COPY ./frontend/. ./
ARG API_URL
ENV API_URL=$API_URL
RUN yarn build  && \
    yarn cache clean

# Final image
FROM caddy:2.8.4

COPY ./docker/caddy/Caddyfile /etc/caddy/Caddyfile
COPY --from=frontend /frontend/dist/. /usr/share/web
