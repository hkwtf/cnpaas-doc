---
layout: page
title: "部署 WordPress"
top_title: "从 Git@OSC 部署 WordPress 到 CNPaaS"
category: git-osc
date: 2015-07-29 11:16:00
order: 1
published: true
---

1. 首先在 [Git@OSC] 创建一个 `PHP` 类的代码库。将根据[如何在 CNPaaS 部署 WordPress 文档]的方法编辑好 `wp-config.php` 的 WordPress 代码上传到该代码库。也可以 fork [WordPress for CNPaaS] 这个项目，该项目针对如何在国内更顺利打开 WordPress 做了优化，并且无需修改任何参数（无需修改 wp-config.php ）即可直接部署。
<img class="embeddable width-720" src="{{site.url}}/images/oschina-wordpress/01.jpg" alt="准备项目" title="准备项目" />

2. 在 [Git@OSC] 的该 WordPress 项目界面上，点`项目演示`，并选取 `CNPaaS` 作为服务平台。
<img class="embeddable width-720" src="{{site.url}}/images/oschina-wordpress/02.jpg" alt="选择服务平台" title="选择服务平台" />

3. 点选 `PHP` 项目，填好演示项目域名前缀。然后点击 `开始演示`。
<img class="embeddable width-720" src="{{site.url}}/images/oschina-wordpress/03.jpg" alt="开始演示" title="开始演示" />

4. 项目演示平台建立后，点击左边 `服务管理`，然后点击上方 `+添加服务` 按钮，选择 `MySQL` 数据库，并随意命名然后点`确定`按钮。如下图：
<img class="embeddable width-720" src="{{site.url}}/images/oschina-wordpress/05.jpg" alt="数据库" title="数据库" />
<img class="embeddable width-720" src="{{site.url}}/images/oschina-wordpress/04.jpg" alt="数据库" title="数据库" />

5. 点左侧菜单的`控制台`，然后点`编译部署`里的红色`部署代码`按钮，并等待部署完成（会出现部署版本信息）。
<img class="embeddable width-720" src="{{site.url}}/images/oschina-wordpress/06.jpg" alt="部署" title="部署" />
<img class="embeddable width-720" src="{{site.url}}/images/oschina-wordpress/07.jpg" alt="部署" title="部署" />

6. 完成之后，在`当前状态`为`正在运行`的情况下，点击`马上访问>>`，如果部署成功将看到 WordPress 的安装设置界面：
<img class="embeddable width-720" src="{{site.url}}/images/oschina-wordpress/08.jpg" alt="部署" title="部署" />


[Git@OSC]: https://git.oschina.net
[如何在 CNPaaS 部署 WordPress 文档]: http://doc.cnpaas.io/tutorial/wordpress.html
[WordPress for CNPaaS]: https://git.oschina.net/quasimo/WordPress-for-CNPaaS
