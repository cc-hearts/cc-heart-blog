#!/bin/bash

docker rmi -f cc-heart-blog:1.0.0

docker rm -f cc-heart-blog

docker build -t cc-heart-blog:1.0.0 .

docker run -p 80:80 -v /opt/cc-heart-blog/docs/.vitepress/dist:/opt/blog --name cc-heart-blog -d cc-heart-blog:1.0.0