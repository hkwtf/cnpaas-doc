---
layout: page
title: "Mac OS"
category: installation
date: 2014-10-16 12:16:55
order: 1
---

要有效使用本平台，你需要安装以下软件库。

* Ruby
* Git

及生成一对 公用/私有密钥 (public/private keys) 

## 在 Mac OS 上的安装

  * **Ruby**

	一般 Mac OS 上都已装有 Ruby, 可以执行以下命令来确认 Ruby 及其版本
	
		# ruby -v
		
		ruby 2.1.2p95 (2014-05-08 revision 45877) [x86_64-darwin13.0]
	
	如果显示的版本号底于 ruby 1.9，请更新你的 Ruby. [在这里](https://github.com/ruby-china/ruby-china/wiki/Mac-OS-X-%E4%B8%8A%E5%AE%89%E8%A3%85-Ruby) 有一个详细的教程如何安装最新版本的 Ruby.
	
  * **Git**

	可用以下指令确认是否有 git 是否已安装到你本机。
	
		＃ git -v
		
	只要有 Git 指令基本上就可以了。 
	
  * **CNPaaS 指令行库**

	注：在中國內地 rubygems.org 存放在 AWS S3 的源遭屏閉，所以可用以下指令來使用淘寶鏡像。
	
		gem sources --remove https://rubygems.org/
		gem sources -a https://ruby.taobao.org/
	
	跟着直接输入以下指令来安装指令行：
	
		gem install cnpaas_cli
	
  * **生成 公用 / 私有密钥**

	你可先到 `~/.ssh/` 内看 有没有 `id_dsa` 或 `id_rsa` 的档案。如有，及有相对的 `id_dsa.pub` 或 `id_rsa.pub` 档案，那你已有 公用 / 私有密钥。
	
	否则，可行下列指令来生成密钥。
	
		ssh-keygen -t rsa -C "your_email@example.com"
	
	跟着问是否需要 passphrase, 可输入可不输入。最后在 `~/.ssh/` 目录内会生成了 `id_rsa.pub` 及 `id_rsa`。

	
	CNPaaS 也需要你的公用钥。你可用以下指令来观看公用钥内容
	
		# cd ~\.ssh\
		# cat id_rsa.pub 
		
		ssh-rsa AAAAB3NzaC1yc2EAAAA...
		
	请把 `ssh-rsa AAA...` 那一串字符串复制
	
	发录到你的 CNPaaS 帐号上，点击右上方你的用户名，在 **帐号设置** 内，公钥部份，贴上你公钥。要注意的是整个公钥要在一行内完成，中间不可有回车隔行。然后点选 **更新**。