# build based on node
FROM drsaaron/blazarnodebase:1.21

# expose port 3000
ENV SERVER_PORT=3000
EXPOSE $SERVER_PORT

# mongo DB URL
ENV SCORE_DB_URL ''

# add the source
ADD package.json .
ADD package-lock.json .
ADD src ./src
ADD public ./public
ADD server ./server
ADD config ./config

# get the packages
RUN npm install 

# health checvk
HEALTHCHECK CMD curl --fail localhost:$SERVER_PORT || exit 1

# build the app. See https://github.com/webpack/webpack/issues/14532 for the NODE_OPTIONS
ENV NODE_OPTIONS --openssl-legacy-provider
RUN npm run build

# start the server
CMD [ "npm", "run", "serve" ]

