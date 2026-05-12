/* empty css                */
import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DG8tOUKX.mjs';
import { c as cn, r as renderScript, $ as $$Button, a as $$Icon } from './Svg_CNrWygp3.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CE-B2Eh5.mjs';
import { i as integ } from './site.config_DMl9LK3H.mjs';
import { g as getBlogCollection } from './server_D24AjWlT.mjs';

const $$DocsContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DocsContents;
  const docsCollection = await getBlogCollection("docs");
  const docsByCate = docsCollection.reduce((acc, doc) => {
    const id = doc.id.split("/")[0];
    if (!acc[id]) acc[id] = [];
    acc[id].push(doc);
    return acc;
  }, {});
  const docCategories = {
    setup: "Setup",
    integrations: "Integrations",
    advanced: "Advanced"
  };
  const { title = true, class: className, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "docs-toc", "docs-toc", { "class": (cn("not-prose", className) ?? "") + " astro-g432ox24", ...props }, { "default": () => renderTemplate` ${title && renderTemplate`${maybeRenderHead()}<h2 class="text-foreground font-medium astro-g432ox24">DOCS</h2>`} <ul class="mt-4 flex flex-col gap-y-5 astro-g432ox24"> ${Object.entries(docCategories).map(([id, title2]) => renderTemplate`<li class="astro-g432ox24"> <h3 class="text-muted-foreground text-xs tracking-widest uppercase astro-g432ox24">${title2}</h3> <ul class="mt-2 flex flex-col astro-g432ox24"> ${docsByCate[id].sort((a, b) => a.data.order - b.data.order).map((doc) => renderTemplate`<li class="docs-item flex relative ms-2 px-3 py-1 text-foreground/75 transition-all rounded-2xl astro-g432ox24"> <a class="flex-1 hover:text-foreground astro-g432ox24"${addAttribute(`/docs/${doc.id}`, "href")}> ${doc.data.title} </a> </li>`)} </ul> </li>`)} </ul> ` })}  ${renderScript($$result, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/docs/DocsContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/docs/DocsContents.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const meta = {
    title: "Docs",
    description: "Docs content documentation"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "variant": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Docs of Astro Theme Pure</h1> </div> <div id="content"${addAttribute(cn("animate mt-8 max-w-none md:min-w-[45ch]", integ.typography.class), "class")}> <h2 class="text-xl font-medium">Theme documentation</h2> ${renderComponent($$result2, "DocsContents", $$DocsContents, { "title": false })} <h2 class="text-xl font-medium">Feedback</h2> <p>
If you have any problems, you can check <a href="https://github.com/cworld1/astro-theme-pure/issues" target="_blank">Github Issues</a> for community support.
</p> <h2 class="text-xl font-medium">News Describe (Alpha)</h2> <p> <a href="/docs/rss.xml" target="_blank">${renderComponent($$result2, "Icon", $$Icon, { "name": "rss" })} </a> </p> </div> </main> ` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/docs/index.astro", void 0);

const $$file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/docs/index.astro";
const $$url = "/docs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
