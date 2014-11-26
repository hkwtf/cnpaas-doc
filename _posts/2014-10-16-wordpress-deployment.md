---
layout: page
title: "WordPress"
top_title: "部署 WordPress 应用"
category: tutorial
date: 2014-10-16 12:45:53
---

以下为一步一步的试范指引：如何快速在CNPaaS上运行WordPress网站。

---

### 1. 下载 WordPress

下载 [WordPress 4.0](https://wordpress.org/download/)。因为WordPress默认使用了 Google 字体，在内地载入可能会有点慢，可按照 [这里的方法](http://www.iztwp.com/googleapis2useso.html) 移除载入 Google Font。

为方便内地用户使用WordPress时获得更好的体验，我们也准备了一份 WordPress 4.0 优化版安装包，把 Google 字体源 转换到 360源。[点击这里下载](http://cnpaas.qiniudn.com/package-wordpress-4.0.zip)。

### 2. 初始化设置档

把 `wp-config-sample.php` 文件另存为为 `wp-config.php`。

然后打开 `wp-config.php`, 设置以下关键资料:

{% highlight php %}
define('DB_NAME', 'database_name_here');
define('DB_USER', 'username_here');
define('DB_PASSWORD', 'password_here');
define('DB_HOST', 'localhost');
{% endhighlight %}

这些设置是连到你本机的开发数据库。如果是新的数据库，请创建相关的数据库并授权相关用户访问该数据库。

### 3. 转换 WordPress 为可支持 CNPaaS

跟着你需要把 WordPress 项目转换为可支持 CNPaaS 平台。请先安装 **CNPaaS 命令行库** 。可查看这里的安装指南 ([Windows]({{site.url}}/installation/windows.html#cnpaas_cli), [Mac OS]({{site.url}}/installation/macos.html#cnpaas_cli))。

在终端输入以下命令来把 WordPress 项目转换为可支持 CNPaaS 平台。运行前，请确保 `mysql` 及 `php` 都在你的 PATH 路径底下。即你在命令行可直接执行 `mysql` 及 `php`。

{% highlight console %}
$ cd /path/to/wordpress/folder
$ cnpaas wordpress init .
{% endhighlight %}

它首先会询问你开发还境的数据库设置。如你做好第二步，则可用默认探测到的数值。

跟着是询问你演示环境 (staging environment) 的设置。你需要有一个第三方的数据库服务。例如可使用 [阿里的 RDS 服务](http://www.aliyun.com/product/rds/) *（创建成功后需将线路从内网切换为外网）*。

最后会问你 开发环境的域名 及 演示环境的域名。开发环境域名一般为你开发时访问本机 WordPress 页的域名。演示环境域名为你应用页内 `http://app-user.app.cnpaas.io` 那个。

<img class="embeddable" src="{{site.url}}/images/php/01-app-details.png" alt="应用详情" title="应用详情"></img>

这命令会在你的 WordPress 目录里加入一些 wp-config.xxx.php 的文件。最重要的是 `wp-config.development.php` 及 `wp-config.staging.php`。以后当你在开发环境，则会用 `wp-config.development.php` 的参数设置。在 staging 的环境 (即运行在 CNPaaS 上时)，则会用 `wp-config.staging.php` 的参数设置。

你也可自行修改档案内的参数。

### 4. 迁移数据

跟着执行以下命令把开发境的数据 迁移到 CNPaaS的云端演示环境内。

{% highlight console %}
$ cnpaas wordpress migrate_db . -f development -t staging
{% endhighlight %}

### 5. 推送 WordPress 代码

现在 开发环境的数据已同步到 远端演示环境数据库。最后一步就是把 WordPress 代码推送到我们的代码库上。详情可参看 [这里]({{site.url}}/usage/php.html)。
