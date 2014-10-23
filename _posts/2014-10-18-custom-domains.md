---
layout: page
title: "自定义网址"
top_title: "使用自定义网址来访问你的应用"
category: usage
date: 2014-10-18 16:37:32
order: 2
---

1. 在你的 **自定义网址** 栏里加上你自己的域名。比如`http://example.com`。现在只支持没有路径的域名。

2. 在你域名的 DNS 服务里，加上一条 **CNAME** 记录。从你的域名 指向到你的 CNPaaS 网址, 即即应用详情里形如 `http://app-user.app.cnpaas.io` 那个网址，注意添加**CNAME**记录时，将`http://`去掉。

    <img class="embeddable" src="{{site.url}}/images/custdomain/01-custdomain.png" alt="应用详情" title="应用详情"></img>

3. 等 DNS 记录更新后（可能需要一、两个小时），你便可使用自定义网址来访问你的网站。
