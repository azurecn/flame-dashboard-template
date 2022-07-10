VUE_APP_VERSION=1.0.202205011420
IMAGE_NAME=flame-frame-web:$VUE_APP_VERSION
# IMAGE_NAME=flame-frame-web:$VUE_APP_VERSION
DOCKER_REPOSITORY=registry.cn-hangzhou.aliyuncs.com/poba/
yarn && yarn build
docker build -f Dockerfile -t $DOCKER_REPOSITORY$IMAGE_NAME .
echo '\r\nPush Command: docker push '$DOCKER_REPOSITORY$IMAGE_NAME'\r\n'
docker push $DOCKER_REPOSITORY$IMAGE_NAME
