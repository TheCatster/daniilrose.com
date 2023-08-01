FROM node:current

# Create app directory
WORKDIR /usr/src/app

# Copy source to work dir
COPY . /usr/src/app

# Install app dependencies and build react app
RUN npm install
RUN npx next telemetry disable
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
