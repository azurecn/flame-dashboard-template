# 基础镜像
FROM nginx:1.13-alpine
# 单服务器多应用部署
COPY dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/app.conf /etc/nginx/conf.d/app.conf