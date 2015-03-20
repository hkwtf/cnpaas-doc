---
layout: page
title: "WordPress (PHP)"
top_title: "部署 WordPress 应用"
category: tutorial
date: 2014-10-16 12:45:53
order: 2
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



[创建]:http://dashboard.cnpaas.io/a