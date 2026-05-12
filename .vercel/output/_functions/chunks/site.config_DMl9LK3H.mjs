const theme = {
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: "Mokiia's Blog",
  /** Will be used in index page & copyright declaration */
  author: "Mokiia",
  /** Description metadata for your website. Can be used in page metadata. */
  description: "Think different",
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: "/favicon/favicon.ico",
  /** The default social card image for your site which should be a path to an image in the `public/` directory. */
  socialCard: "/images/social-card.png",
  /** Specify the default language for this site. */
  locale: {
    lang: "en-US",
    attrs: "en_US",
    // Date locale
    dateLocale: "en-US",
    dateOptions: {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: "/src/assets/avatar.png",
    alt: "Avatar"
  },
  titleDelimiter: "•",
  prerender: true,
  // pagefind search is not supported with prerendering disabled
  npmCDN: "https://cdn.jsdelivr.net/npm",
  // Still in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],
  /** Configure the header of your site. */
  header: {
    menu: [
      { title: "Blog", link: "/blog" },
      { title: "Docs", link: "/docs" },
      { title: "Projects", link: "/projects" },
      { title: "Links", link: "/links" },
      { title: "About", link: "/about" }
    ]
  },
  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© ${(/* @__PURE__ */ new Date()).getFullYear()}`,
    // year: `© 2019 - ${new Date().getFullYear()}`,
    links: [
      // Registration link
      {
        title: "Moe ICP 114514",
        link: "https://icp.gov.moe/?keyword=114514",
        style: "text-sm"
        // Uno/TW CSS class
      },
      // Privacy Policy link
      {
        title: "Site Policy",
        link: "/terms",
        pos: 2
        // position set to 2 will be appended to copyright line
      }
    ],
    /** Enable displaying a “Astro & Pure theme powered” link in your site’s footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: [
      { icon: "github", label: "GitHub", href: "https://github.com/Mokiia1107" },
      { icon: "rss", label: "RSS", href: "/rss.xml" }
    ]
  },
  // [Content]
  content: {
    /** External links configuration */
    externalLinks: {
      content: " ↗",
      /** Properties for the external links element */
      properties: { style: "user-select:none" }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    /** Share buttons to show */
    // Currently support weibo, x, bluesky
    share: ["weibo", "x", "bluesky"]
    /** Enable image captions (default false) */
    // imageCaption: true
  }
};
const integ = {
  // [Typography]
  // https://unocss.dev/presets/typography
  typography: {
    class: "prose text-base"},
  // Comment system
  waline: {
    // Server service link
    server: "https://astro-theme-pure-waline.arthals.ink/",
    // Show meta info for comments
    showMeta: false}
};
const terms = {
  title: "Terms content",
  list: [
    {
      title: "Privacy Policy",
      link: "/terms/privacy-policy"
    },
    {
      title: "Terms and Conditions",
      link: "/terms/terms-and-conditions"
    },
    {
      title: "Copyright",
      link: "/terms/copyright"
    },
    {
      title: "Disclaimer",
      link: "/terms/disclaimer"
    }
  ]
};
const config = { ...theme, integ };

export { config as c, integ as i, terms as t };
