FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy source to work dir
COPY ./backend /usr/src/app/backend
COPY ./frontend /usr/src/app/frontend

# Install app dependencies and build react app
RUN yarn set version berry
RUN yarn /usr/src/app/frontend install && yarn /usr/src/app/frontend build
RUN yarn /usr/src/app/backend install

EXPOSE 31045
CMD [ "yarn", "/usr/src/app/backend", "start" ]
