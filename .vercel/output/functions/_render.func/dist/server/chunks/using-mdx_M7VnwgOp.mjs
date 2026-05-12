import { K as createVNode, F as Fragment, _ as __astro_tag_component__ } from './entrypoint_C9AHn4Vx.mjs';
import { $ as $$Button } from './Svg_BtW5kXcI.mjs';
import 'clsx';

const frontmatter = {
  "title": "Using MDX",
  "description": "Learning how to use MDX in Astro",
  "publishDate": "2025-06-01T00:00:00Z",
  "minutesRead": "1 min",
  "words": 147
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-mdx",
    "text": "Why MDX?"
  }, {
    "depth": 2,
    "slug": "example",
    "text": "Example"
  }, {
    "depth": 2,
    "slug": "more-links",
    "text": "More Links"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>This theme comes with the <a href=\"https://docs.astro.build/en/guides/integrations-guide/mdx/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">@astrojs/mdx<span style=\"user-select:none\"> ↗</span></a> integration installed and configured in your <code>astro.config.ts</code> config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.</p>\n<h2 id=\"why-mdx\">Why MDX?<a class=\"anchor\" href=\"#why-mdx\">#</a></h2>\n<p>MDX is a special flavor of Markdown that supports embedded JavaScript &#x26; JSX syntax. This unlocks the ability to <a href=\"https://docs.astro.build/en/guides/markdown-content/#mdx-features\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">mix JavaScript and UI Components into your Markdown content<span style=\"user-select:none\"> ↗</span></a> for things like interactive charts or alerts.</p>\n<p>If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.</p>\n<h2 id=\"example\">Example<a class=\"anchor\" href=\"#example\">#</a></h2>\n<p>Here is how you import and use a UI component inside of MDX.<br>\nWhen you open this page in the browser, you should see the clickable button below.</p>\n"
    }), "\n", createVNode($$Button, {
      "set:html": "Click Me"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"more-links\">More Links<a class=\"anchor\" href=\"#more-links\">#</a></h2>\n<ul>\n<li><a href=\"https://mdxjs.com/docs/what-is-mdx\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">MDX Syntax Documentation<span style=\"user-select:none\"> ↗</span></a></li>\n<li><a href=\"https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Astro Usage Documentation<span style=\"user-select:none\"> ↗</span></a></li>\n<li><strong>Note:</strong> <a href=\"https://docs.astro.build/en/reference/directives-reference/#client-directives\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Client Directives<span style=\"user-select:none\"> ↗</span></a> are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.</li>\n</ul>"
    })]
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

const url = "src/content/blog/using-mdx.mdx";
const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/blog/using-mdx.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/blog/using-mdx.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
