# FROM directive instructing base image to build upon
# This could be used as a base instead: 
# https://hub.docker.com/r/nikolaik/python-nodejs
FROM python:3.8-slim AS app

# Install node prereqs, nodejs and yarn
# Slim image needs wget and gnupg2 installed

# Ref: https://deb.nodesource.com/setup_14.x
# Ref: https://yarnpkg.com/en/docs/install
RUN apt-get update && apt-get install wget gnupg2 -y && \
    echo "deb https://deb.nodesource.com/node_14.x buster main" > /etc/apt/sources.list.d/nodesource.list && \
    wget -qO- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
    wget -qO- https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
 
# NOTE: requirements.txt not likely to change between dev builds
COPY requirements.txt .
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential default-libmysqlclient-dev netcat vim-tiny jq python3-dev xmlsec1 git supervisor nodejs yarn && \
    apt-get upgrade -y && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /code/frontend
COPY /frontend/package*.json /code/frontend/

RUN npm install

WORKDIR /code

# Sets the local timezone of the docker image
ARG TZ
ENV TZ ${TZ:-America/Detroit}
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# EXPOSE port 5000 to allow communication to/from server
EXPOSE 3000 5000

# copy built react and node libraries for production mode
# COPY --from=node-prod-deps /usr/src/app/package-lock.json package-lock.json
# COPY --from=node-prod-deps /usr/src/app/webpack-stats.json webpack-stats.json
# COPY --from=node-prod-deps /usr/src/app/assets assets
# COPY --from=node-prod-deps /usr/src/app/node_modules node_modules

# NOTE: project files likely to change between dev builds
COPY . .

# This DJANGO_SECRET_KEY is set here just so collectstatic runs with an empty key. It can be set to anything
# RUN echo yes | DJANGO_SECRET_KEY="collectstatic" python manage.py collectstatic --verbosity 0

CMD ["/usr/bin/supervisord", "-c", "/code/deploy/supervisor_docker.conf"]
# done!
