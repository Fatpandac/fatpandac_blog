import blog, { ga, redirects, h } from "blog";

blog({
  title: "Fatpandac",
  description: "Coach, I want to learn this.",
  avatar: "/images/avatar.png",
  avatarClass: "rounded-full",
  author: "Fatpandac",
  links: [
    { title: "Email", url: "mailto:i@fatpandac.com" },
    { title: "GitHub", url: "https://github.com/Fatpandac" },
    { title: "Twitter", url: "https://twitter.com/Fatpandac" },
    { title: "Telegram", url: "https://t.me/fatpandac" },
  ],
  favicon: "/images/logo.png",
  middlewares: [
    ga("G-10D6YDNQ9J"),
    redirects({
      "/docs/other": "",
      ".html": "",
    })
  ]
});

