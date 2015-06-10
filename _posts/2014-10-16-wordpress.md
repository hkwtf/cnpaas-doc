---
layout: page
title: "WordPress (PHP)"
top_title: "部署 WordPress 应用"
category: tutorial
date: 2014-10-16 12:45:53
order: 2
published: true
---

以下为一步一步的试范指引：如何快速在CNPaaS上运行WordPress网站。

---

### 1. 下载 WordPress

下载 [WordPress 4.0](https://wordpress.org/download/)。因为WordPress默认使用了 Google 字体，在内地载入可能会有点慢，可按照 [这里的方法](http://www.iztwp.com/googleapis2useso.html) 移除载入 Google Font。

为方便内地用户使用WordPress时获得更好的体验，我们也准备了一份 WordPress 4.0 优化版安装包，把 Google 字体源 转换到 360源。[点击这里下载](http://cnpaas.qiniudn.com/package-wordpress-4.0.zip)。

### 2. 创建应用

登陆 CNPaaS 后台，[创建]一个 “**PHP 5.4**” 应用：

<img class="embeddable" src="{{site.url}}/images/static/static1.jpg" alt="创建PHP应用" title="创建PHP应用" />

然后点击该应用，在应用详情页面的“**外挂服务**”里，点击“新增数据库”里的“**MySQL 5.5**”按钮，即可创建 WordPress 所需的数据库。

### 2. 初始化 WordPerss 设置文件

把 WordPress 文件里的 `wp-config-sample.php` 文件另存为为 `wp-config.php`。

然后打开 `wp-config.php`, 把以下关键资料:

{% highlight php %}
define('DB_NAME', 'database_name_here');
define('DB_USER', 'username_here');
define('DB_PASSWORD', 'password_here');
define('DB_HOST', 'localhost');
{% endhighlight %}

替换为：

{% highlight php %}
/** WordPress数据库的名称 */
define('DB_NAME', getenv('OPENSHIFT_MYSQL_DB_NAME'));

/** MySQL数据库用户名 */
define('DB_USER', getenv('OPENSHIFT_MYSQL_DB_USERNAME'));

/** MySQL数据库密码 */
define('DB_PASSWORD', getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));

/** MySQL主机 */
define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST'));
{% endhighlight %}

### 3. 推送 WordPress 代码

最后一步就是把 WordPress 代码推送到我们的代码库上。

你可以依次执行：
{% highlight console %}
$ git init
$ git add -A
$ git commit . -m "Your Commit Message"
$ git remote add cnpaas <git-repo addr>
$ git push -f cnpaas master
{% endhighlight %}
其中 `<git-repo addr>` 替换为 CNPaaS 上应用后台的 **Git地址**。

详情可参看 [这里]({{site.url}}/usage/php.html)。

### 4. 导出导入数据库

如果是将已有的 WordPress 网站迁移到 CNPaaS ，或者想自行备份网站数据，可能需要涉及到数据库的操作。这个时候你可以用应用后台 **外挂服务** 里的 **新增数据库界面** 功能，点击 “**+ phpMyAdmin 4**”按钮，一键生成 PHPMyAdmin 服务，点击下拉展开服务详情，点击里面的链接按钮，即打开 PHPMyAdmin 登陆界面，此时你可以用数据库信息里 **OPENSHIFT_MYSQL_DB_USERNAME** 的值作为用户名，**OPENSHIFT_MYSQL_DB_PASSWORD** 的值作为密码，进行登录。

登录后使用 PHPMyAdmin 进行对应数据库的管理工作，包括SQL的导出和导入。

### 5. 使用第三方CDN进行图片和静态文件备份及加速

- 如果你是 [又拍云] 的用户，建议使用这个 WordPress 插件：[Upyun For WordPress](https://wordpress.org/plugins/upyun/)
- 如果你是 [七牛] 的用户，你可以尝试以下插件：
	- [Qiniu Cloud For WordPress](https://wordpress.org/plugins/qiniu-cloud/)
	- [QiniuSpeed for WordPress](https://wordpress.org/plugins/qiniu-speed/)
	- [七牛镜像存储 WordPress 插件](https://wordpress.org/plugins/wpjam-qiniu/)

[创建]:http://dashboard.cnpaas.io/a
[又拍云]:https://www.upyun.com
[七牛]:http://www.qiniu.com