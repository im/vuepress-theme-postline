#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm install -g vuepress
npm install vuepress-theme-postline
npm install moment
npm install medium-zoom
npm install gitalk

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'postline.js.org' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://${access_token}@github.com/im/vuepress-theme-postline.git master:gh-pages

cd -