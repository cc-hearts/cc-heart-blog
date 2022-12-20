FROM nginx:latest

MAINTAINER  heart<7362469@qq.com>

COPY docs/.vitepress/dist/ /opt/blog/

COPY default.conf /etc/nginx/conf.d/default.conf
