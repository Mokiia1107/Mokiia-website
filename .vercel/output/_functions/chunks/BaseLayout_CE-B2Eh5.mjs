import { m as maybeRenderHead, r as renderComponent, F as Fragment, b as renderTemplate, c as addAttribute, f as defineStyleVars, g as renderHead, s as spreadAttributes, d as renderSlot } from './entrypoint_DG8tOUKX.mjs';
import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { c as config } from './runtime_CLQfX85_.mjs';
import { a as $$Icon, r as renderScript } from './Svg_CNrWygp3.mjs';
import 'clsx';
import { b as $$Font } from './_astro_assets_DntDX2KG.mjs';
import { c as config$1 } from './site.config_DMl9LK3H.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const footerConf = config.footer;
  const social = footerConf.social || [];
  const footerLink1 = footerConf.links?.filter(({ pos }) => pos === 1) || [];
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto mb-5 mt-16 w-full astro-dojmed5u"> <div class="border-t pt-5 astro-dojmed5u"> <div class="flex items-center gap-y-3 max-sm:flex-col sm:justify-between sm:gap-y-0 astro-dojmed5u"> <div class="flex items-center gap-x-4 gap-y-2 text-muted-foreground max-sm:flex-col astro-dojmed5u"> ${/* Position 1 */
  footerLink1.length > 0 && renderTemplate`<div class="astro-dojmed5u"> ${footerLink1.map(({ title, link, style }, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-dojmed5u" }, { "default": ($$result2) => renderTemplate` <a${addAttribute(link, "href")} target="_blank"${addAttribute((style ?? "") + " astro-dojmed5u", "class")}> ${title} </a> ${index < footerLink1.length - 1 && renderTemplate`<span class="mx-1 astro-dojmed5u">•</span>`}` })}`)} </div>`}  <div class="astro-dojmed5u"> ${config.footer.year} ${config.author} ${footerConf.links && footerConf.links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-dojmed5u" }, { "default": ($$result2) => renderTemplate`
&
<span class="astro-dojmed5u"> ${footerConf.links.filter(({ pos }) => pos === 2).map(({ title, link, style }) => renderTemplate`<span class="astro-dojmed5u"> <a${addAttribute(link, "href")} target="_blank"${addAttribute((style ?? "") + " astro-dojmed5u", "class")}> ${title} </a> </span>`)} </span> ` })}`} </div> ${renderTemplate`<span class="astro-dojmed5u"> <a href="https://github.com/withastro/astro" target="_blank" class="astro-dojmed5u">
Astro
</a>
&
<a href="https://github.com/cworld1/astro-theme-pure" target="_blank" class="astro-dojmed5u">
Pure
</a>
theme powered
</span>`} </div>  <div class="flex items-center gap-x-4 astro-dojmed5u"> ${social.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="sl-flex astro-dojmed5u"> <span class="sr-only astro-dojmed5u">${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "astro-dojmed5u" })} </a>`)} </div> </div> </div> </footer>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/node_modules/astro-pure/components/basic/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "  <script>\n  const toggleDarkModeElement = document.getElementById('toggleDarkMode')\n  if (toggleDarkModeElement) {\n    toggleDarkModeElement.dataset.theme = localStorage.getItem('theme') || 'system'\n  }\n<\/script> ", ""])), renderComponent($$result, "header-component", "header-component", { "class": "group sticky top-4 z-50 max-md:z-30 mb-12 flex items-center justify-between rounded-xl border border-transparent max-sm:py-1 sm:rounded-2xl astro-zgz2aqyx" }, { "default": () => renderTemplate` ${maybeRenderHead()}<a class="z-30 text-xl font-medium group-[.not-top]:ms-2 sm:group-[.not-top]:ms-3 astro-zgz2aqyx" style="transition:margin-inline 0.3s" href="/" aria-label="Brand">${config.title}</a> <div class="flex items-center gap-x-2 astro-zgz2aqyx">  <div id="headerExpandContent" class="end-0 start-0 top-12 grid border border-transparent group-[.not-top]:rounded-xl group-[.expanded]:opacity-100 dark:group-[.expanded.not-top]:bg-muted max-sm:absolute max-sm:opacity-0 max-sm:group-[.not-top]:border-border max-sm:group-[.expanded.not-top]:bg-background max-sm:group-[.not-top]:px-4 max-sm:group-[.not-top]:py-2 sm:grid-rows-1 astro-zgz2aqyx"> <div class="flex flex-col items-center justify-center overflow-hidden sm:flex-row astro-zgz2aqyx"> ${config.header.menu.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="w-full flex-none grow py-2 text-right font-medium transition-none hover:text-primary sm:w-fit sm:px-3 astro-zgz2aqyx" aria-label="Nav menu item" data-astro-prefetch> ${item.title} </a>`)} <div class="flex w-full grow flex-row justify-end gap-x-3 sm:w-fit sm:gap-x-5 astro-zgz2aqyx"> <a class="px-1 py-2 transition-none sm:px-2 astro-zgz2aqyx" href="/search" title="Search"> <span class="sr-only astro-zgz2aqyx">Search</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "size-5 astro-zgz2aqyx" })} </a> </div> </div> </div>  <div class="z-30 flex gap-x-4 group-[.not-top]:gap-x-2 astro-zgz2aqyx" style="transition:gap 0.3s"> <button id="toggleDarkMode" class="group/dark box-content size-5 rounded-md border p-1.5 transition-colors hover:bg-border sm:group-[.not-top]:rounded-xl astro-zgz2aqyx"> <span class="sr-only astro-zgz2aqyx">Dark Theme</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "system size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "computer" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "light hidden size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "sun" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "dark hidden size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "moon" })} </button> <button id="toggleMenu" class="rounded-md border p-1.5 transition-colors hover:bg-border sm:hidden sm:group-[.not-top]:rounded-xl astro-zgz2aqyx"> <span class="sr-only astro-zgz2aqyx">Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5 astro-zgz2aqyx", "name": "menu" })} </button> </div> </div> ` }), renderScript($$result, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/node_modules/astro-pure/components/basic/Header.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/node_modules/astro-pure/components/basic/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script>
  function simpleSetTheme() {
    let theme = localStorage.getItem('theme')
    // If undefined or 'system', get from system
    if (!theme || theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0B0B10' : '#FCFCFD')
  }
  simpleSetTheme()
  document.addEventListener('astro:page-load', () => simpleSetTheme())
<\/script>`, ""])), renderScript($$result, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/node_modules/astro-pure/components/basic/ThemeProvider.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/node_modules/astro-pure/components/basic/ThemeProvider.astro", void 0);

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const siteTitle = `${title} ${config.titleDelimiter} ${config.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : config.socialCard, Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><link rel="icon"${addAttribute(config.favicon.type, "type")}${addAttribute(config.favicon.href, "href")}><link rel="shortcut icon"${addAttribute(config.favicon.type, "type")}${addAttribute(config.favicon.href, "href")}><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="manifest" href="/favicon/site.webmanifest">${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-satoshi", "preload": [{ subset: "latin", style: "normal" }], "class": "astro-y4licvga" })}<link rel="canonical"${addAttribute(canonicalURL, "href")}><meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(config.author, "content")} name="author"><meta name="color-scheme" content="light dark"><meta${addAttribute(articleDate ? "article" : "website", "content")} property="og:type"><meta${addAttribute(title, "content")} property="og:title"><meta${addAttribute(description, "content")} property="og:description"><meta${addAttribute(canonicalURL, "content")} property="og:url"><meta${addAttribute(config.title, "content")} property="og:site_name"><meta${addAttribute(config.locale.attrs, "content")} property="og:locale"><meta${addAttribute(socialImageURL, "content")} property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-y4licvga" }, { "default": ($$result2) => renderTemplate`<meta${addAttribute(config.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`}<meta content="summary_large_image" property="twitter:card"><meta${addAttribute(canonicalURL, "content")} property="twitter:url"><meta${addAttribute(title, "content")} property="twitter:title"><meta${addAttribute(description, "content")} property="twitter:description"><meta${addAttribute(socialImageURL, "content")} property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link rel="alternate" type="application/rss+xml"${addAttribute(config.title, "title")}${addAttribute(`${Astro2.site}rss.xml`, "href")}><meta${addAttribute(Astro2.generator, "content")} name="generator">${/* User script*/
  renderTemplate`${renderScript($$result, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts")}`}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/BaseHead.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    meta: { articleDate, description = config$1.description, ogImage, title },
    highlightColor,
    ...props
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ highlightColor }]);
  return renderTemplate`<html${addAttribute(config$1.locale.lang, "lang")} class="astro-37fxchfa"${addAttribute($$definedVars, "style")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title, "class": "astro-37fxchfa" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-37fxchfa" })}${renderHead()}</head> <body class="flex justify-center bg-background text-foreground astro-37fxchfa"${spreadAttributes(props)}${addAttribute($$definedVars, "style")}> ${highlightColor && renderTemplate`<div id="highlight-gradient" class="pointer-events-none absolute start-0 top-0 z-0 h-screen w-full opacity-25 astro-37fxchfa"${addAttribute(`${`background-image:linear-gradient(${highlightColor},transparent)`}; ${$$definedVars}`, "style")}></div>`} <div id="main-container" class="w-full max-w-[70rem] min-h-[100dvh] flex flex-col justify-between astro-37fxchfa"${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Header", $$Header, { "class": "astro-37fxchfa" })} <div class="flex-1 w-full astro-37fxchfa"${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37fxchfa" })} </div>  </body> </html>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
