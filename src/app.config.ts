import iconGithub from "@/images/github.png";
import iconTwitter from "@/images/twitter.png";

import ARCHIVES_HEADER_IMAGE from "@/images/OLJxbaR.jpg";
import DETAIL_HEADER_IMAGE from "@/images/FNwWK1Y.jpg";
import ABOUT_HEADER_IMAGE from "@/images/rVtDsho.png";
const HOME_HEADER_IMAGE = "https://open.saintic.com/api/bingPic/";

interface Config {
  name: string;
  avatar?: string;
  intro?: Array<string>;
  github?: string;
  twitter?: string;
  links?: Array<{
    name: string;
    avatar?: string;
    link?: string;
  }>;
  associations?: Array<{
    icon: string;
    url: string;
  }>;
  headerImages?: {
    home?: string;
    archives?: string;
    detail?: string;
    about?: string;
  };
}

const config: Config = {
  name: "ChenKS",
  avatar: "https://avatars0.githubusercontent.com/u/42082890?s=460&v=4",
  intro: [
    "一个热爱技术的大学生，青柚工作室成员，南邮校科协成员。",
    "Enjoy JavaScript/TypeScript/Dart.",
    "Enjoy Coding.",
  ],
  github: "https://github.com/ChenKS12138",
  twitter: "https://twitter.com/ChenKS12138",
  links: [
    {
      name: "tinyhuange",
      avatar: "https://avatars0.githubusercontent.com/u/31771183?s=400&v=4",
      link: "http://zaiyewujiang.cn/",
    },
    {
      name: "xichi",
      avatar: "https://avatars3.githubusercontent.com/u/48639990?s=460&v=4",
      link: "https://1999-xichi.github.io/",
    },
    {
      name: "yizero",
      avatar: "https://avatars3.githubusercontent.com/u/45324620?s=460&v=4",
      link: "https://yizero10.github.io/",
    },
    {
      name: "pikanglong",
      avatar: "https://avatars1.githubusercontent.com/u/26516046?s=400&v=4",
      link: "https://www.pikanglong.com/",
    },
    {
      name: "X3ZvaWQ",
      avatar: "https://avatars3.githubusercontent.com/u/47066861?s=460&v=4",
      link: "http://blog.x3zvawq.xyz",
    },
    {
      name: "0xfaner",
      avatar: "https://avatars2.githubusercontent.com/u/44130614?s=460&v=4",
      link: "https://0xfaner.top/",
    },
    {
      name: "yiayaz",
      avatar: "https://avatars0.githubusercontent.com/u/44493388?s=460&v=4",
      link: "https://yiayaz.github.io/",
    },
  ],
  associations: [
    {
      icon: iconGithub,
      url: "https://github.com/ChenKS12138",
    },
    {
      icon: iconTwitter,
      url: "https://twitter.com/ChenKS12138",
    },
  ],
  headerImages: {
    home: HOME_HEADER_IMAGE,
    about: ABOUT_HEADER_IMAGE,
    archives: ARCHIVES_HEADER_IMAGE,
    detail: DETAIL_HEADER_IMAGE,
  },
};

export default config;
