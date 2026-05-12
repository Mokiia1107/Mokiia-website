import { K as createVNode, F as Fragment, _ as __astro_tag_component__ } from './entrypoint_C9AHn4Vx.mjs';
import { l as $$Aside } from './Svg_BtW5kXcI.mjs';
import { a as $$Comment } from './PageInfo_DeExOjJ-.mjs';
import 'clsx';

const frontmatter = {
  "title": "Comment System",
  "description": "Comment system for pages at the bottom",
  "order": 3,
  "minutesRead": "2 min",
  "words": 226
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "waline-comment-system",
    "text": "Waline Comment System"
  }, {
    "depth": 3,
    "slug": "remove",
    "text": "Remove"
  }, {
    "depth": 3,
    "slug": "deploy",
    "text": "Deploy"
  }, {
    "depth": 3,
    "slug": "configuration",
    "text": "Configuration"
  }, {
    "depth": 3,
    "slug": "usage",
    "text": "Usage"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"waline-comment-system\">Waline Comment System<a class=\"anchor\" href=\"#waline-comment-system\">#</a></h2>\n"
    }), createVNode($$Aside, {
      "set:html": "<p>This theme has integrated the Waline comment system. You can configure it at the\n<code>integrationConfig.waline</code> in file <code>src/site.config.ts</code>.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>The theme’s comment, read statistics, likes, and other functionalities are all provided by <a href=\"https://waline.js.org/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Waline<span style=\"user-select:none\"> ↗</span></a>.</p>\n<h3 id=\"remove\">Remove<a class=\"anchor\" href=\"#remove\">#</a></h3>\n<p>If you have some reasons to remove the comment system, or just learn how to change to other comment systems, this section might help you. But if you want to know how to configure it, you can skip this section.</p>\n<p>Remove it by the following steps:</p>\n<ol>\n<li>\n<p>set <code>enable</code> to <code>false</code> in <code>src/site.config.ts</code>.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-highlighted\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><div class=\"title text-sm text-muted-foreground px-3 py-1 rounded-lg border\">src/site.config.ts</div><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> integ</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> IntegrationUserConfig</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">  // ...</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  waline: {</span></span>\n<span class=\"line highlighted\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    enable: </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">false</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">ts</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"export const integ: IntegrationUserConfig = {\n  // ...\n  waline: {\n    enable: false // [!code highlight]\n  }\n}\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n</li>\n<li>\n<p>Remove dependency <code>@waline/client</code>:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> remove</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> @waline/client</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"bun remove @waline/client\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n</li>\n<li>\n<p>Remove folder <code>src/components/waline</code>.</p>\n</li>\n<li>\n<p>Remove relative code in these layouts:</p>\n<ul>\n<li><code>src/layouts/CommonPage.astro</code></li>\n<li><code>src/layouts/BlogPost.astro</code></li>\n</ul>\n</li>\n<li>\n<p>Remove relative config like <code>comment</code> or <code>view</code> configuring for the earlier edited layouts in these files:</p>\n<ul>\n<li><code>src/pages/about/index.astro</code></li>\n<li><code>src/pages/links/index.astro</code></li>\n<li><code>src/pages/projects/index.astro</code></li>\n<li>Other blog post frontmatter config if exists</li>\n</ul>\n</li>\n</ol>\n<h3 id=\"deploy\">Deploy<a class=\"anchor\" href=\"#deploy\">#</a></h3>\n<p>You can refer to its documentation for configuration, and it is recommended to use the <a href=\"https://vercel.com/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Vercel<span style=\"user-select:none\"> ↗</span></a> + <a href=\"https://supabase.com/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Supabase<span style=\"user-select:none\"> ↗</span></a> combination.</p>\n<h3 id=\"configuration\">Configuration<a class=\"anchor\" href=\"#configuration\">#</a></h3>\n<p>Then you can configure the Waline comment system in the <code>integrationConfig.server</code>.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-highlighted collapsed\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><div class=\"title text-sm text-muted-foreground px-3 py-1 rounded-lg border\">src/site.config.ts</div><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> integ</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> IntegrationUserConfig</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">  // ...</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  waline: {</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    enable: </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">    // Server service link</span></span>\n<span class=\"line highlighted\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    server: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://astro-theme-pure-waline.arthals.ink/'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, </span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">    // Refer https://waline.js.org/en/guide/features/emoji.html</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    emoji: [</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'bmoji'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'weibo'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">    // Refer https://waline.js.org/en/reference/client/props.html</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    additionalConfigs: {</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      pageview: </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      comment: </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">true</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">      // ...</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">ts</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"export const integ: IntegrationUserConfig = {\n  // ...\n  waline: {\n    enable: true,\n    // Server service link\n    server: &#x27;https://astro-theme-pure-waline.arthals.ink/&#x27;, // [!code highlight]\n    // Refer https://waline.js.org/en/guide/features/emoji.html\n    emoji: [&#x27;bmoji&#x27;, &#x27;weibo&#x27;],\n    // Refer https://waline.js.org/en/reference/client/props.html\n    additionalConfigs: {\n      pageview: true,\n      comment: true\n      // ...\n    }\n  }\n}\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button><button class=\"collapse-toggle bg-card text-muted-foreground rounded-lg m-2\" aria-label=\"Toggle collapse code block\" onclick=\"this.parentElement.classList.toggle(&#x27;collapsed&#x27;)\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-arrow-down-line\"></use></svg><span class=\"desc\"> code</span></button><div class=\"collapse-fade\"></div></div>\n<h3 id=\"usage\">Usage<a class=\"anchor\" href=\"#usage\">#</a></h3>\n<p>You can call it manually in <code>.astro</code> or <code>.mdx</code> files.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Comment } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> '@/components/waline'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// prettier-ignore</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Comment</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"import { Comment } from &#x27;@/components/waline&#x27;\n\n// prettier-ignore\n<Comment />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Render:</p>\n"
    }), "\n", createVNode($$Comment, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/integrations/comment.mdx";
const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/docs/integrations/comment.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/docs/integrations/comment.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
