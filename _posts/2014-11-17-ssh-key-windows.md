---
layout: page
title: "Windows 公钥"
top_title: "Windows 创建 SSH 公钥指引"
category: installation
date: 2014-11-17 10:16:28
order: 3
---

你可以通过git将项目推送到CNPaaS，首先你需要用到在个人账号上提交你系统的SSH公钥。

登入 CNPaaS 后，点击右上方你的用户名，在 帐号设置 内，公钥部份，贴上你公钥。注意整个公钥要在一行内完成，中间不可有回车隔行。最后点选 更新。（请参考 [Mac OS 安装指引](http://doc.cnpaas.io/installation/macos.html) ）

如果你使用的是Windows系统，请参考以下指引。(只选择其中一种即可)

---

### 1. 使用 Git Bash

如果你使用命令行操作git，推荐使用 [MSysGit](http://msysgit.github.io) ，该工具自带一个叫做 **Git Bash** 的命令行终端。大概 Git Bash之后，输入以下命令：

{% highlight shell-session %}
$ ssh-keygen
{% endhighlight %}

之后系统会询问你的公钥保存在什么地方以及passphrase，直接回车的话，公钥和密钥会保存在你用户主目录下的 `.ssh` 里(如： `C:\Users\username\.ssh\` )，而每次提交代码时不需要填写密码（passphrase）。

这时打开 `.ssh` 里的 `id_rsa.pub` 文件，或者在 Git Bash 里执行：

{% highlight shell-session %}
$ cd ~/.ssh/ | cat id_rsa.pub
{% endhighlight %}

这时你的公钥会显示在 Git Bash 里。

温馨提示：Git Bash 默认不支持终端文本的复制和粘贴，但是你可以在终端标题栏（窗口上边沿）右键鼠标 > “属性” > 勾选 “编辑选项” 里的 “快速编辑模式” 然后确定 的方法来提升 Git Bash 自身的功能。之后你只需要选中文字点鼠标右键便可复制然后复制到 CNPaaS 上来，如果要在 Git Bash 内部进行粘贴只需要在要贴的位置再点一次鼠标右键即可。

### 2. 使用 Puttygen

如果你使用图形界面操作git，推荐使用 [SourceTree](http://www.sourcetreeapp.com) 或者 [TortoiseGit](http://www.baidu.com/s?wd=tortoisegit) ，这两个软件都自带了 [Puttygen](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) 。

启动 **Puttygen** (在 SourceTree 上的启动方式是在菜单栏上点击 “工具” > “创建或导入SSH密钥”)，点 “Generate” ，然后鼠标在 “PuTTY Key Generator” 窗口内随意移动直到 “Key” 的进度条结束，生成的一段以 `ssh-rsa` 开头的字符串，复制这段字符串到你的 CNPaaS 账户。同时可以通过 “Save public key” 或者 “Save private key” 分别保存 公钥 和 密钥。

如果你使用 SourceTree，你需要点击菜单上的 “工具” > “选项” 然后在 “SSH客户端配置” 哪里，选择你保存的密钥并确定。

Puttygen 默认保存的公钥格式是 .ppk 格式，客户端配置选项那里可是设为 “PuTTY / Plink”。

<img class="embeddable" src="{{site.url}}/images/ssh-key/putty-client.png" alt="PuTTY / Plink" title="PuTTY / Plink" />

但当你同时想用其他工具（比如 Git Bash）进行操作，可以用以下方法导出 OpenSSH 的格式：

在 “PuTTY Key Generator” 上点 “Load” 然后选择你的 **密钥** 。

然后点 “Conversions” > “Export OpenSSH key” 进行保存。这样保存出来的公钥就可以被 Git Bash 或在 Linux / Mac 上使用。

<img class="embeddable" src="{{site.url}}/images/ssh-key/export-openssh-key.png" alt="OpenSSH" title="OpenSSH" />

### 3. 相关资料推荐

* [服务器上的 Git - 生成 SSH 公钥](http://git-scm.com/book/zh/v1/服务器上的-Git-生成-SSH-公钥)
* [TortoiseGit之配置密钥](http://blog.csdn.net/bendanbaichi1989/article/details/17916795)

