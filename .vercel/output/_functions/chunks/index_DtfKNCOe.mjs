/* empty css                */
import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment } from './entrypoint_DG8tOUKX.mjs';
import { b as $$PFSearch } from './PFSearch_EVmnNnod.mjs';
import { $ as $$Button } from './Svg_CNrWygp3.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CE-B2Eh5.mjs';
import './site.config_DMl9LK3H.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    description: "Search relative posts of the whole blog",
    title: "Search"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "variant": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Search</h1> </div> <div id="content" class="animate"> ${renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <p>Enter a search term or phrase to search the blog.</p> ${renderComponent($$result3, "PFSearch", $$PFSearch, {})} ` })}` } </div> </main> ` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/search/index.astro", void 0);

const $$file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/search/index.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
