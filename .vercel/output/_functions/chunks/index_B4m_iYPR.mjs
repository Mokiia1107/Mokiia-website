/* empty css                */
import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DG8tOUKX.mjs';
import { $ as $$Button, c as cn, g as $$CardList } from './Svg_CNrWygp3.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CE-B2Eh5.mjs';
import { i as integ, t as terms } from './site.config_DMl9LK3H.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Site policy",
    description: "Site policy documentation"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "variant": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Site Policy</h1> </div> <div id="content"${addAttribute(cn("animate mt-8 max-w-none md:min-w-[45ch]", integ.typography.class), "class")}> <h2 class="text-xl font-medium">Site policy documentation</h2> ${renderComponent($$result2, "CardList", $$CardList, { ...terms })} <h2 class="text-xl font-medium">Help Information</h2> <p>You need to add md files in this directory.</p> </div> </main> ` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/terms/index.astro", void 0);

const $$file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/terms/index.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
