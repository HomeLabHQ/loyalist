FROM node:20-slim
WORKDIR /frontend
COPY ./frontend/package.json ./frontend/yarn.lock ./frontend/.yarnrc.yml ./
COPY ./frontend/.yarn/releases/yarn-*.cjs  ./.yarn/releases/
RUN yarn install && yarn cache clean
COPY ./frontend/. ./
ARG API_URL
ENV API_URL=$API_URL
COPY ./docker/frontend/entrypoint.sh ./
ENTRYPOINT [ "./entrypoint.sh" ]
