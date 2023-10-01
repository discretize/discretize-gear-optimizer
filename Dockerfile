FROM node:18-alpine

RUN apk add --no-cache curl build-base
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# add wasm target
RUN /root/.cargo/bin/rustup target add wasm32-unknown-unknown

# make the 'app' folder the current working directory
RUN mkdir /app
WORKDIR /app

# copy package.json and yarn.lock
COPY package.json yarn.lock ./
COPY wasm_module ./wasm_module

RUN yarn install --frozen-lockfile

WORKDIR /app/wasm_module
RUN yarn wasm

RUN rm -rf /app/wasm_module/srcd