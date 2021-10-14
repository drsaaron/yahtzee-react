# build based on node
FROM drsaaron/blazarnodebase:1.1

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

