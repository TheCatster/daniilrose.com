FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy source to work dir
COPY . /usr/src/app

# Install app dependencies and build react app
RUN yarn install
RUN npx next telemetry disable
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
