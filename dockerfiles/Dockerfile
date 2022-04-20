# FROM directive instructing base image to build upon
# This could be used as a base instead: 
# https://hub.docker.com/r/nikolaik/python-nodejs
FROM python:3.8-slim

# NOTE: requirements.txt not likely to change between dev builds
COPY requirements.txt .
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential default-libmysqlclient-dev netcat vim-tiny jq python3-dev git supervisor curl && \
    apt-get upgrade -y && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /code/frontend

ENV NODE_VERSION=16.14.2
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION} && \
    . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION} && \
    . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version && npm --version

COPY /frontend/package*.json /code/frontend/

RUN npm install

WORKDIR /code

# Sets the local timezone of the docker image
ARG TZ
ENV TZ ${TZ:-America/Detroit}
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# EXPOSE port 5000 to allow communication to/from server
EXPOSE 3000 5000

# NOTE: project files likely to change between dev builds
COPY . .

CMD ["/usr/bin/supervisord", "-c", "/code/deploy/supervisor_docker.conf"]
# done!
