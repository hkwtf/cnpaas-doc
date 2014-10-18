---
layout: page
title: "布署 WordPress 应用"
category: tutorial
date: 2014-10-16 12:45:53
---

以下为一步一步的试范指引，如何把 WordPress 放上 CNPaaS 上。

1. 下载最新的 WordPress ([在此处下载](https://wordpress.org/download/)). 默认因为用 Google 的字体，在内地会载入得慢，可按照 [这里的方法](http://www.dmeng.net/remove-open-sans-from-wp-core.html) 移除使用 Google Font。

2. 跟着安装好 `wp-config.php` 文件。可直接把 `wp-config-sample.php`  复制到 `wp-config.php`。

3. 打开 wp-config.php, 设置以下最关键的资料:

		define('DB_NAME', 'database_name_here');
		define('DB_USER', 'username_here');
		define('DB_PASSWORD', 'password_here');
		define('DB_HOST', 'localhost');
	
	跟据你的开发环境，连向一个新的数据库 或 指向你现有的数据库。如果是新的数据库，请在开发环境创建该数据库并授权你输入的用户访问这库。
	
4. 这时你需要把 WordPress 项目转换为可支持 CNPaaS 平台的。你需要用到我们的 **CNPaaS CLI Ruby Gem** 指令库。如还没安装，请查看安装指南 ([Windows]({{site.url}}/installation/windows.html#cnpaas_cli), [Mac OS]({{site.url}}/installation/macos.html#cnpaas_cli))。

	运行前，请确保 `mysql` 及 `php` 都在你的 PATH 路径底下。即你在指令行可直接执行 `mysql` 及 `php`。
	
	输入以下指令来把 WordPress 项目转换为可支持 CNPaaS 平台：
	
		cd /path/to/wordpress/folder	
		cnpaas wordpress init .	
	它会问你开发还境的数据库设置。这些如你做好第三步，则会自动侦测到正确设置。另一边是会询问你演示环境 (staging environment) 的设置。这时你需要有一个第三方的数据库服务。例如可使用 [阿里的 RDS 服务](http://www.aliyun.com/product/rds/)。
	
	最后，会问你 开发环境域名 及 演示环境域名。开发环境域名 为你 在本机开发而询问该 WordPress 页的域名。演示环境域名你应用详细页内的 `http://app-user.app.cnpaas.io` 那个。
	
	跟着运行：
	
		cnpaas wordpress migrate_db . -f development -t staging
		
	这指令就是把开发境的数库 迁移到 演示还境内。
	
6. 现在 开发环境的数据已同步到 远端演示环境数据。最后一步就是把 WordPress 代码 git push 到我们的代码库上。详情可参看 [这里]({{site.url}}/usage/php.html)。