import { a as getImage } from './_astro_assets_DNbq9osT.mjs';
import rss from '@astrojs/rss';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { s as sortMDByDate, g as getBlogCollection } from './server_RtII2ANd.mjs';
import { c as config } from './runtime_BtSO5LLC.mjs';

const imagesGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/3d-rendering/nikola-arsov-still-life-interior-design-vray-3ds-max-05-930px.jpg": () => import('./nikola-arsov-still-life-interior-design-vray-3ds-max-05-930px_DqwOdole.mjs'),"/src/content/blog/3d-rendering/thanos-dd-single-image-004a.jpg": () => import('./thanos-dd-single-image-004a_06ytowLx.mjs'),"/src/content/blog/3d-rendering/thumbnail.jpg": () => import('./thumbnail_C2gkKyq-.mjs'),"/src/content/blog/improve-concentration/thumbnail.jpg": () => import('./thumbnail_C0Rxibpz.mjs'),"/src/content/blog/markdown-zh/thumbnail.jpg": () => import('./thumbnail_BmJOtwPB.mjs'),"/src/content/blog/markdown/thumbnail.jpg": () => import('./thumbnail_ClkrnUhA.mjs'),"/src/content/blog/music-journey/thumbnail.jpg": () => import('./thumbnail_PSsJdXth.mjs')


});
const renderContent = async (post, site) => {
  function remarkReplaceImageLink() {
    return async (tree) => {
      const promises = [];
      visit(tree, "image", (node) => {
        if (node.url.startsWith("/images")) {
          node.url = `${site}${node.url.replace("/", "")}`;
        } else {
          const imagePathPrefix = `/src/content/blog/${post.id}/${node.url.replace("./", "")}`;
          const promise = imagesGlob[imagePathPrefix]?.().then(async (res) => {
            const imagePath = res?.default;
            if (imagePath) {
              node.url = `${site}${(await getImage({ src: imagePath })).src.replace("/", "")}`;
            }
          });
          if (promise) promises.push(promise);
        }
      });
      await Promise.all(promises);
    };
  }
  const file = await unified().use(remarkParse).use(remarkReplaceImageLink).use(remarkRehype).use(rehypeStringify).process(post.body);
  return String(file);
};
const GET = async (context) => {
  const allPostsByDate = sortMDByDate(await getBlogCollection());
  const siteUrl = context.site ?? new URL("https://mokiia1107.pages.dev");
  return rss({
    // Basic configs
    trailingSlash: false,
    xmlns: { h: "http://www.w3.org/TR/html4/" },
    stylesheet: "/scripts/pretty-feed-v3.xsl",
    // Contents
    title: config.title,
    description: config.description,
    site: "https://mokiia1107.pages.dev",
    items: await Promise.all(
      allPostsByDate.map(async (post) => ({
        pubDate: post.data.publishDate,
        link: `/blog/${post.id}`,
        customData: `<h:img src="${typeof post.data.heroImage?.src === "string" ? post.data.heroImage?.src : post.data.heroImage?.src.src}" />
          <enclosure url="${typeof post.data.heroImage?.src === "string" ? post.data.heroImage?.src : post.data.heroImage?.src.src}" />`,
        content: await renderContent(post, siteUrl),
        ...post.data
      }))
    )
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
