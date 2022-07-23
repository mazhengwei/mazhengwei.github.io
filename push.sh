#!/usr/bin/env sh

# 本脚本为自动部署的入口脚本，只需执行该脚本，即可实现GitHub的自动部署，以及 push 到 GitHub 的所有文件同步到 Gitee 中

GITHUB_REPO=git@github.com:mazhengwei/blog.git

comment=$1

if [ ! $comment ]; then
comment="更新内容+action自动部署"
fi

git add -A

git commit -m "${comment}"    # $1 是启动该脚本传来的参数，如 sh push.sh hello，其中 hello 就会插入到 $1 处，如果想两个参数，则加 $2

git push $GITHUB_REPO

