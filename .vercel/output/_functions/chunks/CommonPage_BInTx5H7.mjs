import { c as createComponent } from './astro-component_DfenplIq.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot, c as addAttribute, F as Fragment } from './entrypoint_C9AHn4Vx.mjs';
import { $ as $$BackToTop, a as $$TOC } from './PFSearch_CSgs80d7.mjs';
import { r as renderScript, $ as $$Button, c as cn, a as $$Icon } from './Svg_BtW5kXcI.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CpyKYf5f.mjs';
import { i as integ } from './site.config_DMl9LK3H.mjs';
import { $ as $$PageInfo, a as $$Comment } from './PageInfo_DeExOjJ-.mjs';

const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { meta, highlightColor, back = "/", ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta, "highlightColor": highlightColor, ...props, "class": "astro-scuu7fyy" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": back, "variant": "back", "class": "astro-scuu7fyy" })} ${maybeRenderHead()}<main class="mt-6 items-start gap-x-10 md:flex astro-scuu7fyy">  <aside class="animate top-20 min-w-48 basis-60 overflow-y-scroll max-md:hidden z-40 fixed md:sticky md:order-2 lg:shrink-0 max-md:border max-md:px-4 max-md:py-3 max-md:bg-muted max-md:rounded-xl astro-scuu7fyy" style="height:calc(100vh - 7rem);" id="sidebar"> ${renderSlot($$result2, $$slots["sidebar"])} </aside> <div id="sidebar-shade" class="fixed top-0 start-0 w-full h-full astro-scuu7fyy" style="display:none;background-color:#00000091;z-index:31"></div> <article class="min-w-0 grow astro-scuu7fyy">  <div id="content-header" class="animate astro-scuu7fyy"> ${renderSlot($$result2, $$slots["header"])} </div>  <div id="content"${addAttribute((cn(
    "max-w-none animate mt-8 md:min-w-[45ch] overflow-x-hidden",
    integ.typography.class
  ) ?? "") + " astro-scuu7fyy", "class")}> ${renderSlot($$result2, $$slots["default"])} </div> </article> </main> <div class="bottom mt-6 items-start gap-x-10 md:flex astro-scuu7fyy">  <div class="flex-1 text-muted-foreground md:min-w-[50ch] astro-scuu7fyy"> ${renderSlot($$result2, $$slots["bottom"])} </div> <div class="min-w-48 basis-60 astro-scuu7fyy"> ${renderSlot($$result2, $$slots["bottom-sidebar"])} </div> </div> ${renderComponent($$result2, "BackToTop", $$BackToTop, { "header": "content-header", "content": "content", "class": "astro-scuu7fyy" }, { "other-icons": ($$result3) => renderTemplate`<button aria-label="Toggle sidebar" class="size-10 flex items-center justify-center rounded-full border-2 border-transparent bg-muted text-muted-foreground duration-300 hover:border-border/75 md:hidden sm:size-12 astro-scuu7fyy" id="sidebar-btn"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "list", "class": "astro-scuu7fyy" })} </button>` })} ` })} ${renderScript($$result, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/layouts/ContentLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/layouts/ContentLayout.astro", void 0);

const $$CommonPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CommonPage;
  const { title, headings, view, comment: enableComment, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$ContentLayout, { "meta": { title }, ...props }, { "bottom": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom"], renderTemplate` ${enableComment && renderTemplate`${renderComponent($$result2, "Comment", $$Comment, { "class": "mt-3 sm:mt-6" })}`} `)}`, "bottom-sidebar": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom-sidebar"])}`, "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl">${title}</h1> ${(view || enableComment) && renderTemplate`${renderComponent($$result3, "PageInfo", $$PageInfo, { "view": view, "comment": enableComment, "class": "italic" })}`}` })}`, "sidebar": ($$result2) => renderTemplate`${headings?.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings, "slot": "sidebar" })}`}` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/layouts/CommonPage.astro", void 0);

export { $$CommonPage as $ };
