#!/bin/bash

docker build -t cc-heart-blog:1.0.0 .

docker run -p 80:80 -v ./docs/.vitepress/dist:/opt/blog --name cc-heart-blog -d cc-heart-blog:1.0.0