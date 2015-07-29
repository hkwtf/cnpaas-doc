---
layout: page
title: "部署 Ruby on Rails"
top_title: "从 Git@OSC 部署 RoR 项目到 CNPaaS"
category: git-osc
date: 2015-07-29 11:15:00
order: 2
published: true
---

<div class="bg-info">
  <ul>
    <li>现在只支持 RoR 3，不久将会支持 RoR 4。</li>
    <li>现在容器默认只有 256 MB 内存，而 ROR 应用很耗内存。如该 ROR 项目要载入很多插件，在部署代码后台运行 `bundle install` 时有可能超过内存上限而容器遭关闭。如使用默认容器，请注意应用状态。</li>
  </ul>
</div>

1. 首先在 [Git@OSC] 创建一个 `Ruby` 类的代码库。因为里面有些档案设置要置定，想放便一点，不彷从这个 <a href="https://git.oschina.net/jimmychu_hkwtf/ror3-template" target="_blank">ROR 3 模版</a> fork/clone 一个项目出来。那可直接跳到 [第 5 步].

    ```
    $ git clone https://git.oschina.net/jimmychu_hkwtf/ror3-template.git rails3-sample
    ```

2. `rails new` 一个项目。可执行以下指令

    ```
    $ rails new rails3-sample
    ```

3. 创建一个 `.openshift/action_hooks` 目录。并在里面拷入这几个脚本 [deploy], [pre_start_ruby]。

    CNPaaS 后台是基于 Openshift。这些档案告诉 Openshift 在部署 (`git push`) 代码后它会为应用容器做什么设置／初始化工作。具体来说是设置所需用的数据库环境变量 及 nodeJS 环境。

4. Rails 要求一定要连上相应的数据库才能正常运行。所以打开 `config/database.yml`。如是用 MySQL 可设为如下：

    ```
    mysql: &mysql
      adapter: mysql2
      database: "<%=ENV['OPENSHIFT_APP_NAME']%>"
      username: "<%=ENV['OPENSHIFT_MYSQL_DB_USERNAME']%>"
      password: "<%=ENV['OPENSHIFT_MYSQL_DB_PASSWORD']%>"
      host:     <%=ENV['OPENSHIFT_MYSQL_DB_HOST']%>
      port:     <%=ENV['OPENSHIFT_MYSQL_DB_PORT']%>

    defaults: &defaults
      pool: 5
      timeout: 5000
      encoding: utf8
      <<: *<%= ENV['RAILS_DB'] || "sqlite" %>

    development:
      <<: *defaults

    test: &test
      <<: *defaults

    production:
      <<: *defaults
    ```

    如是 PostgreSQL, 则把 `mysql` 那一段改为如下：

    ```
    postgresql: &postgresql
      adapter: postgresql
      database: <%=ENV['OPENSHIFT_APP_NAME']%>
      username: <%=ENV['OPENSHIFT_POSTGRESQL_DB_USERNAME']%>
      password: <%=ENV['OPENSHIFT_POSTGRESQL_DB_PASSWORD']%>
      host:     <%=ENV['OPENSHIFT_POSTGRESQL_DB_HOST']%>
      port:     <%=ENV['OPENSHIFT_POSTGRESQL_DB_PORT']%>
      min_messages: ERROR
      reconnect: false
    ```

    具体设置可参看 [这里的 database.yml]

5. <span id="step05" name="step05">这</span>样就一切准备就绪，可把这些修改 push 回你自己的到 Git@OSC 的代码库。

    ```
    git add .
    git commit -m "update to deploy on cnpaas"
    git push -f <git 代码库> master
    ```

6. 现在一切准备就绪了。可回到 [Git@OSC] 的操作介面上，点 `项目演示`，选取 CNPaaS。

    <img class="embeddable width-720" src="{{site.url}}/images/oschina-ror/01.jpg" alt="Select CNPaaS" title="Select CNPaaS" />

7. 点选 `Ruby` 项目，填好演示项目域名前缀。然后点击 `开始演示`。

    <img class="embeddable width-720" src="{{site.url}}/images/oschina-ror/02.jpg" alt="Select RoR" title="Select RoR" />

8. 项目演示平台建立后，点击左边 `服务管理`，然后上方 `+添加服务`，选取你所用的数据库。如下图。

    <img class="embeddable width-720" src="{{site.url}}/images/oschina-ror/03.jpg" alt="创建数据库" title="创建数据库" />

9. 数据库名字可随意。建立后，等 10 来秒数据库服务生成后，会看到相应的数据库服务参数，点击 `参数` 会看到如下图。看到参数后才表示数据库服务已正确创建。

    <img class="embeddable width-720" src="{{site.url}}/images/oschina-ror/04.jpg" alt="成功创建数据库" title="成功创建数据库" />

10. 点选左方 `环境变量`， 增加 `RAILS_DB` 的环境变量。如是用 **MySQL**, 变量值设为 `mysql`，如是 **PostgreSQL**, 变量值则设为 `postgresql`。

    <img class="embeddable width-720" src="{{site.url}}/images/oschina-ror/05.jpg" alt="设环境变量" title="设环境变量" />

11. 最后，点击回 `控制台`，`部署代码`。部署代码后，代初次化 Rails 项目时需要一些时间 (2 - 3分钟左右)，因为涉及到要执行不同的 `rake tasks` 及 `bundle install` 等指令。可然后 `重新启动` 容器。就可以访问你的 Rails 应用了。

    <img class="embeddable width-720" src="{{site.url}}/images/oschina-ror/06.jpg" alt="成功部署" title="成功部署" />


[Git@OSC]: https://git.oschina.net
[第 5 步]: #step05
[deploy]: https://git.oschina.net/jimmychu_hkwtf/ror3-template/blob/master/.openshift/action_hooks/deploy?dir=0&filepath=.openshift%2Faction_hooks%2Fdeploy&oid=c13a9216fb7b8d48bd64ce8daeef76ca07a5ac96&sha=01a3ff066c5b2f841db334753f1a8599bff36e0b
[pre_start_ruby]: https://git.oschina.net/jimmychu_hkwtf/ror3-template/blob/master/.openshift/action_hooks/pre_start_ruby?dir=0&filepath=.openshift%2Faction_hooks%2Fpre_start_ruby&oid=d0b29a77cae9a4bab31aa76deac202b8625ba377&sha=01a3ff066c5b2f841db334753f1a8599bff36e0b
[这里的 database.yml]: https://git.oschina.net/jimmychu_hkwtf/ror3-template/blob/master/config/database.yml?dir=0&filepath=config%2Fdatabase.yml&oid=e9734ff8446b88834ec5c0513375adff06c827ad&sha=01a3ff066c5b2f841db334753f1a8599bff36e0b
