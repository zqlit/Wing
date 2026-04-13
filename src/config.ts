const SITE_TITLE = "伍比贰";
const SITE_DESCRIPTION = "记录生活的点点滴滴";
const AVATAR_URL = "/avatar.jpg?v=2";
const BEI_AN_CODE = "鄂ICP备2022015735号-2";
const GITHUB_URL = "https://github.com/zqlit/Wing";
const BLOGGER_NAME = "道小理";

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

export const TWIKOO_CONFIG = {
  envId: "your-twikoo-env-id", // 你的 Twikoo 环境 ID
  region: "ap-guangzhou", // 腾讯云区域，如 ap-guangzhou
  lang: "zh-CN",
  // path 在客户端动态获取
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
  postsPerPage: 6, // 每页显示的文章数
};

// 评论配置
export const COMMENT_CONFIG = {
  enabled: false, // 是否启用评论（true: 启用, false: 禁用）
  system: "none" as "artalk" | "giscus" | "twikoo" | "none", // 评论系统: artalk | giscus | twikoo | none
};