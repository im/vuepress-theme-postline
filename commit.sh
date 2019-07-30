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

echo 'vuepress-theme-postline deploy success'

cd ../../
git add .
git commit -m "update theme"
git push

echo 'commit  success'

cd -