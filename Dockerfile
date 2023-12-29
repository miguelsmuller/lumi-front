FROM node:alpine AS build
ARG REACT_APP_API_URL
WORKDIR /app
ENV REACT_APP_API_URL=${REACT_APP_API_URL}
COPY package.json /app/
RUN npm install
COPY ./ /app
RUN npm run build


FROM nginx:alpine AS runtime
RUN rm -rf /usr/share/nginx/html/*
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY --from=build  /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
