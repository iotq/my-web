
ARG NODE_VERSION=24-alpine

FROM node:${NODE_VERSION} AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc* ./
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@10 --activate
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
  corepack enable pnpm && pnpm install --frozen-lockfile

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN corepack enable && corepack prepare pnpm@10 --activate
ENV NODE_ENV=production
RUN corepack enable pnpm && pnpm build

FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

USER node
EXPOSE 3000

CMD ["node", "server.js"]
