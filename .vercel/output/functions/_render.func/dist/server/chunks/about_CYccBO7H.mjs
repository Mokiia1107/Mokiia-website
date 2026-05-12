import { K as createVNode, F as Fragment, _ as __astro_tag_component__ } from './entrypoint_C9AHn4Vx.mjs';
import { b as $$GithubCard } from './MediumZoom_DQdbwGF5.mjs';
import { l as $$Aside, $ as $$Button } from './Svg_BtW5kXcI.mjs';
import 'clsx';

const frontmatter = {
  "title": "About",
  "description": "About the project",
  "order": 5,
  "minutesRead": "1 min",
  "words": 179
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "contribute-code",
    "text": "Contribute Code"
  }, {
    "depth": 2,
    "slug": "sponsorship",
    "text": "Sponsorship"
  }, {
    "depth": 2,
    "slug": "open-source-references",
    "text": "Open Source References"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>The astro-theme-pure theme is open source under the <a href=\"https://github.com/cworld1/astro-theme-pure/blob/main/LICENSE\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Apache 2.0<span style=\"user-select:none\"> ↗</span></a> license. Please abide by this license for any further development.</p>\n"
    }), createVNode($$GithubCard, {
      repo: "cworld1/astro-theme-pure"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"contribute-code\">Contribute Code<a class=\"anchor\" href=\"#contribute-code\">#</a></h2>\n<p>A big thank you to everyone who has contributed to the <a href=\"https://github.com/cworld1/astro-theme-pure\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">astro-theme-pure<span style=\"user-select:none\"> ↗</span></a>. The open-source community is amazing because of you.</p>\n<p><a href=\"https://github.com/cworld1/astro-theme-pure/graphs/contributors\" rel=\"nofollow noopener noreferrer\" target=\"_blank\"><img src=\"https://contrib.rocks/image?repo=cworld1/astro-theme-pure\" alt=\"contributors\" class=\"zoomable\"><span style=\"user-select:none\"> ↗</span></a></p>\n"
    }), createVNode($$Aside, {
      title: "Contributing Guide",
      "set:html": "<p>Contributing bug fixes or new features is the most direct form of contribution you can make. You’d better make an issue first to discuss what you would like to change, which can avoid unnecessary work, especially when you want to make breaking changes.</p><p>All changes for <code>astro-pure</code> package should enable <a href=\"/docs/advanced/customize#package-mode\">Customize Theme#Package Mode</a> first. PR test will also run in that mode. This requests you test your changes locally using <code>bun run yijiansilian</code> command first.</p><p>And for contributing docs, you can simply click the “Edit on GitHub” link at the bottom of each doc page to change the docs content.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"sponsorship\">Sponsorship<a class=\"anchor\" href=\"#sponsorship\">#</a></h2>\n<p>We would like to express our gratitude to all the sponsors.</p>\n"
    }), createVNode($$Button, {
      href: "https://cworld0.com/projects#sponsorship",
      target: "_blank",
      title: "Become a Sponsor",
      variant: "ahead"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"open-source-references\">Open Source References<a class=\"anchor\" href=\"#open-source-references\">#</a></h2>\n<p>This theme uses/references/derives content from the following projects:</p>\n<p>Framework:</p>\n<ul>\n<li><a href=\"https://github.com/withastro/astro\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">astro<span style=\"user-select:none\"> ↗</span></a></li>\n<li><a href=\"https://github.com/unocss/unocss\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">unocss<span style=\"user-select:none\"> ↗</span></a></li>\n</ul>\n<p>Content rendering:</p>\n<ul>\n<li><a href=\"https://github.com/mdx-js/mdx/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">mdx<span style=\"user-select:none\"> ↗</span></a></li>\n<li><a href=\"https://github.com/unocss/unocss/tree/main/packages-presets/preset-typography\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">@unocss/preset-typography<span style=\"user-select:none\"> ↗</span></a></li>\n<li><a href=\"https://github.com/rehypejs/rehype\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">@unifiedjs/rehype<span style=\"user-select:none\"> ↗</span></a></li>\n<li><a href=\"https://github.com/remarkjs/remark\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">@unifiedjs/remark<span style=\"user-select:none\"> ↗</span></a></li>\n</ul>\n<p>Integrations:</p>\n<ul>\n<li>Code block: <a href=\"https://github.com/shikijs/shiki\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Shiki<span style=\"user-select:none\"> ↗</span></a></li>\n<li>Image lightbox: <a href=\"https://github.com/francoischalifour/medium-zoom\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Medium Zoom<span style=\"user-select:none\"> ↗</span></a></li>\n<li>Comment: <a href=\"https://github.com/walinejs/waline\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Waline<span style=\"user-select:none\"> ↗</span></a></li>\n<li>Search: <a href=\"https://github.com/cloudcannon/pagefind\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Pagefind<span style=\"user-select:none\"> ↗</span></a></li>\n</ul>\n<p>Others:</p>\n<ul>\n<li>Compress: <a href=\"https://github.com/PlayForm/Compress\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">playform/compress<span style=\"user-select:none\"> ↗</span></a></li>\n<li>Image compress: <a href=\"https://github.com/lovell/sharp\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">sharp<span style=\"user-select:none\"> ↗</span></a></li>\n</ul>"
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

const url = "src/content/docs/advanced/about.mdx";
const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/docs/advanced/about.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/docs/advanced/about.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
