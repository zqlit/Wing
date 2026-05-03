const SITE_TITLE = "小赵";
const SITE_DESCRIPTION = "一个记录生活的地方";
const AVATAR_URL = "/avatar.jpg?v=2";
const BEI_AN_CODE = "";
const GITHUB_URL = "";
const BLOGGER_NAME = "小赵";

export const ARTALK_CONFIG = {
  server: "",
  site: "小赵",
  jsUrl: "/artalk.js",
  cssUrl: "/artalk.css",
};

export const GISCUS_CONFIG = {
  repo: "",
  repoId: "REPO_ID",
  category: "General",
  categoryId: "CATEGORY_ID",
  mapping: "pathname",
  reactionsEnabled: "1",
  theme: "light",
  lang: "zh-CN",
};

export const TWIKOO_CONFIG = {
  envId: "",
  region: "ap-guangzhou",
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
  { label: "首页", href: "/" },
  { label: "关于", href: "/about" },
  { label: "友链", href: "/links" },
  { label: "RSS", href: "/rss.xml" },
];

export const THEME_CONFIG = {
  active: "ershiliu" as const,
};

export const PAGINATION_CONFIG = {
  postsPerPage: 10,
};

export const COMMENT_CONFIG = {
  enabled: false,
  system: "none" as "artalk" | "giscus" | "twikoo" | "none",
};
