FROM nginx:1.19-alpine
RUN apk add curl
COPY ./build/ /usr/share/nginx/html/ 
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
