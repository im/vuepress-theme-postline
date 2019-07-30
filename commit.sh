#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd .vuepress/theme
git add .
git commit -m "updat theme"
git push
npm version patch
npm publish
git push --tags

cd ../../
git add .
git commit -m "update theme"
git push

npm install -g vuepress
npm install vuepress-theme-postline
npm install moment
npm install medium-zoom

cd -