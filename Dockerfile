FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

ARG NEXT_PUBLIC_STRAPI_API_URL
ARG NEXT_IP_LOCATION_API_URL
ENV NEXT_PUBLIC_STRAPI_API_URL=$NEXT_PUBLIC_STRAPI_API_URL
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV NEXT_IP_LOCATION_API_URL=$NEXT_IP_LOCATION_API_URL
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/next.config.js ./
COPY --from=build /build/next-i18next.config.js ./
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

CMD npm run start