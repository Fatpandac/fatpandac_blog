import blog, { redirects } from "blog";

blog({
  title: "Fatpandac",
  description: "Coach, I want to learn this.",
  avatar: "/images/avatar.png",
  avatarClass: "rounded-full",
  author: "Fatpandac",
  lang: "zh",
  scripts: [
    `
    (function() {
      var ga = document.createElement('script');
      ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-10D6YDNQ9J';
      ga.async = true;
      document.head.appendChild(ga);
    })();
    `,
    `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-10D6YDNQ9J');
    `,
    `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?d47c012aa2838250165b44d65f898c3b";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `,
  ],
  links: [
    { title: "Email", url: "mailto:i@fatpandac.com" },
    { title: "GitHub", url: "https://github.com/Fatpandac" },
    { title: "Twitter", url: "https://twitter.com/Fatpandac" },
    { title: "Telegram", url: "https://t.me/fatpandac" },
  ],
  favicon: "/images/logo.png",
  middlewares: [
    redirects({
      "/docs/other": "",
      ".html": "",
    })
  ]
});

