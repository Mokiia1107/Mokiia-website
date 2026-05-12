import { c as createComponent } from './astro-component_DfenplIq.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute, d as renderSlot } from './entrypoint_C9AHn4Vx.mjs';
import { a as $$TOC, $ as $$BackToTop } from './PFSearch_CSgs80d7.mjs';
import { $ as $$Button, a as $$Icon, c as cn } from './Svg_BtW5kXcI.mjs';
import { c as config } from './runtime_BtSO5LLC.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CpyKYf5f.mjs';

const $$IndividualPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$IndividualPage;
  const { frontmatter, headings } = Astro2.props;
  const { title, description, heroImage, language, back } = frontmatter;
  const socialImage = heroImage?.src ?? config.socialCard;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title, description, ogImage: socialImage } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": back ?? "/", "variant": "back" })} ${maybeRenderHead()}<main class="mt-6 items-start gap-x-10 md:flex lg:mt-10"> ${!!headings.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "class": "animate top-24 min-w-48 basis-60 max-md:hidden md:sticky md:order-2 lg:shrink-0", "headings": headings })}`} <article class="min-w-0 grow"> <div id="content-header" class="animate"> <h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl"> ${title} </h1> <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-6 text-muted-foreground"> ${// Language
  language && renderTemplate`<span class="flex items-center gap-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "earth" })} ${language} </span>`} ${// Description
  description && renderTemplate`<blockquote class="text-sm italic text-muted-foreground"> <q>${description}</q> </blockquote>`} </div> </div> <div id="content"${addAttribute(cn(
    "animate mt-8 max-w-none md:min-w-[45ch] overflow-x-hidden",
    config.integ.typography.class
  ), "class")}> ${renderSlot($$result2, $$slots["default"])} </div> </article> </main> ${renderComponent($$result2, "BackToTop", $$BackToTop, { "header": "content-header", "content": "content" })} ` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/layouts/IndividualPage.astro", void 0);

export { $$IndividualPage as $ };
