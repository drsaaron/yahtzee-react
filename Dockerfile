# build based on node
FROM drsaaron/blazarnodebase:1.4

# expose port 3000
ENV SERVER_PORT=3000
EXPOSE $SERVER_PORT

# add the source
ADD package.json .
ADD yarn.lock .
ADD src ./src
ADD public ./public

# get the packages
RUN yarn install

# health checvk
HEALTHCHECK CMD curl --fail localhost:$SERVER_PORT || exit 1

# build the app.  See https://github.com/webpack/webpack/issues/14532 for the NODE_OPTIONS
ENV NODE_OPTIONS --openssl-legacy-provider
RUN yarn build

# start the server
CMD [ "yarn", "serve" ]

