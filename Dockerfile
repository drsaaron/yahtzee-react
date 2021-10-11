# build based on node
FROM node:alpine

# install curl which will be used for healthcheck
RUN apk add curl

# install make
RUN apk add --update make

# install g++
RUN apk add g++

# install python
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python2 && ln -sf python2 /usr/bin/python

# working directory
WORKDIR /app

# expose port 5000
EXPOSE 5000

# add the source
ADD package.json .
ADD yarn.lock .
ADD src ./src
ADD public ./public

# get the packages
RUN yarn install

# health checvk
HEALTHCHECK CMD curl --fail localhost:5000 || exit 1

# build the app
RUN yarn build

# start the server
CMD [ "yarn", "serve" ]

