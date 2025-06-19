#!/bin/bash
# filepath: /Users/yogesh/Desktop/JS/react-19/docker-dev.sh

docker build -t react-19 .
docker run -p 1234:1234 react-19