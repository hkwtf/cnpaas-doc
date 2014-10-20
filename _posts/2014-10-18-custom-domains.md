---
layout: page
title: "自订义网址"
top_title: "使用自订义网址来询问你的应用"
category: usage
date: 2014-10-18 16:37:32
order: 2
---

1. 在你的 **自订网址** 栏里加上你自己的域名。现在只支持没有路径的域名。

2. 在你的 DNS 服务商，加上以下一条 **CNAME** 记录。从你的域名 指向到你的 CNPaaS 网址, 即 `http://app-user.app.cnpaas.io` 那个网址。

    <img class="embeddable" src="{{site.url}}/images/custdomain/01-custdomain.png" alt="应用详情" title="应用详情"></img>

3. 大概一，两个小时以后，等 DNS 记录更新后，你将可使用自订义网址来访问你的网站。
