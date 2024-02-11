FROM node:current

# Create app directory
WORKDIR /usr/src/app

# Copy source to work dir
COPY . /usr/src/app

# Install app dependencies and build react app
RUN pnpm install
RUN npx next telemetry disable
RUN pnpm build

EXPOSE 3000
CMD [ "pnpm", "start" ]
