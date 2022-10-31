---
title: Hide Email by Cloudflare
publish_date: 2022-10-22
cover_html: <image src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/92edff85273ba9c05b4efba2d2741152"/>
---
在很早之前 Cloudflare 有推出一个新的功能，那就是转发邮件，如果你在 Cloudflare 上有绑定域名那么你可以在管理界面上看到一个 Email 的选项，点进去你就可以开始使用自己的域名来创建对应的邮件地址，之后你还需要绑定一个可以你自己的能接收邮件的电子邮箱地址，再然后为你自己根据自己域名创建的电子邮箱地址来设计一个转发地址，转发到你自己能接收电子邮件的邮箱地址上即可，这样你之后就可以使用这个由自己域名创建的邮箱地址来接收邮件了，因为这个功能你还可以在必要的时候隐藏掉你自己的真实邮箱账号，而且这个功能还有一个隐藏收益，那就是可以帮你引流到你的网站上，因为用自己域名创建的邮箱地址格式为 XXXXX@你的域名。

<!-- more -->

Cloudflare 的这个功能确实不错，我第一时间就开通了，第一个用我域名来创建的 Email 是 i@fatpandac.com，取这个邮箱地址大多是因为受到 RSSHub 作者的影响导致的，他在 GitHub 上的公开邮箱为 [i@diygod.me](mailto:i@diygod.me)。

其实在发现这个之前就看到了 iCloud+ 有了相关的功能，也是为了保护隐私，但是那个功能限制比较多，毕竟是一个苹果的产品，苹果对于自己产品的控制欲望一直都很强烈，所以能做的事情很少，比如说他的隐藏邮箱地址只能是 @icloud.com 结尾的，并且要能够方便的使用还必须要在苹果的 Safari 浏览器上才能很方便的使用。

后来我看到了一个 Chrome 的插件，他好像通过抓包，找到了 iCloud+ hide my email 的方法，以及登陆网页 iCloud 获取身份码的问题，于是他写出来了一个插件可以在 Chrome 上流畅的使用 iCloud+ hide my email，代码开源在这个链接：‣ 

但是我对这个插件还不是很喜欢，毕竟在这个插件上创建的隐藏邮箱地址只能使用 [icloud.com](http://icloud.com) 于是我打算自己写一个基于 Cloudflare Email Routing 的插件。

在查看 Cloudflare 的 API 文档之后找到了所有我想要的插件于是我就开始动手了。

为了方便能上系统上的所有地方使用，于是我就没写浏览器的插件，而是写了一个 Raycast 插件，Raycast 是一个 MacOS 端的快捷启动器，可以快速的启动应用程序、打开链接、搜索文件等，而且界面写的十分的精致，很搜我喜欢。

经过了一天的开发，完成了我所设想的插件，在这个插件上总共有两个入口，一个是 List Hide Email 在这个入口即入可以看到你当前所设置的所有转发，在这里你还可以删除对应的转发，

![Untitled](/images/pusDtvtKHC43.png)

另一个入口则是 Create Hide Email 在这里你可以创建新的转发规则，在这还贴心的帮你自动补充了根据自己域名创建邮箱地址的邮箱前缀，这样你就可以更快速的完成创建转发了，在你对邮箱地址要求不是很详细的时候它会更高率。

![Untitled](/images/f611L-XAT6I3.png)

在创建完之后我就到就上传了单独的一份到了我自己的 GitHub 上‣ ，再然后我也提交了一份 PR 到 Raycast 官方的插件库中，等到时候正式上线了 Raycast Store 之后我再到 V2EX 上面宣传一下吧，这已经是我写的第三个 Raycast 的插件了，感觉有点驾轻就熟轻车熟路了。