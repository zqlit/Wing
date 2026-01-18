const SITE_TITLE = "伍比贰";
const SITE_DESCRIPTION = "记录生活的点点滴滴";
const AVATAR_URL = "https://usj.cc/image/tx7.jpg";
const BEI_AN_CODE = "鄂ICP备2022015735号-2";
const GITHUB_URL = "https://github.com/zqlit/Wing";
const BLOGGER_NAME = "小赵同学";

export const ARTALK_CONFIG = {
  server: "https://artalk.usj.cc",
  site: "伍比贰",
  jsUrl: "/artalk.js",
  cssUrl: "/artalk.css",
};

export const GISCUS_CONFIG = {
  repo: "zqlit/Wing",
  repoId: "REPO_ID",
  category: "General",
  categoryId: "CATEGORY_ID",
  mapping: "pathname",
  reactionsEnabled: "1",
  theme: "light",
  lang: "zh-CN",
};

export const SITE_CONFIG = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  avatar: AVATAR_URL,
  author: BLOGGER_NAME,
  github: GITHUB_URL,
  beianCode: BEI_AN_CODE,
};

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "Archive", href: "/archive" },
  { label: "Links", href: "/links" },
  { label: "About", href: "/about" },
];

// 分页配置
export const PAGINATION_CONFIG = {
  postsPerPage: 5   , // 每页显示的文章数
};