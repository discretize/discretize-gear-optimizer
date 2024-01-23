FROM node:18-alpine

RUN apk add --no-cache curl build-base
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# add wasm target
RUN /root/.cargo/bin/rustup target add wasm32-unknown-unknown

# make the 'app' folder the current working directory
RUN mkdir /app && mkdir /app/wasm_module
WORKDIR /app

# fetch dependencies
RUN corepack enable && corepack prepare pnpm@8 --activate
COPY pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch

# install dependencies
COPY package.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY wasm_module/ /app
WORKDIR /app/wasm_module
RUN --mount=type=cache,target=/root/.cargo/registry \
    --mount=type=cache,target=/app/wasm_module/target \
    wasm-pack build --target web --release

RUN rm -rf /app/wasm_module/src