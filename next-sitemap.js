/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://modellistdigital.com",
  generateRobotsTxt: true,
  exclude: ["/sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://modellistdigital.com/sitemap.xml"],
  },
};
