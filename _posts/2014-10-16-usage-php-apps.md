---
layout: page
title: "PHP 应用"
category: usage
date: 2014-10-16 12:20:21
order: 1
---

## 在 CNPaaS 上布署 PHP 应用

当你注册好一个帐号后并点击了一个应用，你会看到你的应用详情，如下图：

![应用详情](/images/usage-php-apps/01-app-details.png) 

你看到两个重要的资讯，**Git 地址** 及 **CNPaaS 网址**。

### 1. 用 Git 来管理你的 PHP 代码目录

你的 php 代码准备好后，第一步就是 git push 代码到我们的 git 代码库。

如果你的代码目录还没曾受 git 管理，你需要进入该目录，并执行以下指令。如果已经在用 git 了，就可跳过以下这几步。

	git init .   # initialize the directory to be version controlled by Git
	git add -A   # Stage all current files to be committed.
	git commit . -m "Your Commit message"  # Committing all files to your repository.

### 2. git push 来推送代码

