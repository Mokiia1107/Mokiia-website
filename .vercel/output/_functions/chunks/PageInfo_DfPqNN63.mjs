import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute, e as defineScriptVars, s as spreadAttributes, F as Fragment } from './entrypoint_DG8tOUKX.mjs';
import { r as renderScript, c as cn } from './Svg_CNrWygp3.mjs';
import { c as config } from './site.config_DMl9LK3H.mjs';
import 'clsx';

const $$Comment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Comment;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "comment-component", "comment-component", { "class": "astro-y3qunytq" }, { "default": () => renderTemplate`${maybeRenderHead()}<div id="waline"${addAttribute((cn("not-prose", className) ?? "") + " astro-y3qunytq", "class")}>
Comment seems to stuck. Try to refresh?✨
</div>` })}`}${renderScript($$result, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/waline/Comment.astro?astro&type=script&index=0&lang.ts")}${config.integ.waline.showMeta}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/waline/Comment.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Pageview = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script type="module" data-astro-rerun>', "\n  async function loadPageview() {\n    try {\n      const pageview = await import(`${npmCDN}/@waline/client@v3/dist/pageview.js`)\n      const el = document.querySelector('.waline-pageview-count')\n      if (el) {\n        pageview.pageviewCount({\n          serverURL: walineServer,\n          path: window.location.pathname\n        })\n      }\n    } catch (e) {\n      console.error('Failed to load Waline pageview:', e)\n    }\n  }\n  loadPageview()\n<\/script>"], ['<script type="module" data-astro-rerun>', "\n  async function loadPageview() {\n    try {\n      const pageview = await import(\\`\\${npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n      const el = document.querySelector('.waline-pageview-count')\n      if (el) {\n        pageview.pageviewCount({\n          serverURL: walineServer,\n          path: window.location.pathname\n        })\n      }\n    } catch (e) {\n      console.error('Failed to load Waline pageview:', e)\n    }\n  }\n  loadPageview()\n<\/script>"])), defineScriptVars({ npmCDN: config.npmCDN, walineServer: config.integ.waline.server }));
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/waline/Pageview.astro", void 0);

const $$PageInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageInfo;
  const { view, comment, class: className, ...props } = Astro2.props;
  const path = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("text-base text-sm text-muted-foreground", className), "class")}${spreadAttributes(props)}> <span class="waline-pageview-count"${addAttribute(path, "data-path")}></span> views
${comment && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" | "}<a href="#waline"> <span class="waline-comment-count"${addAttribute(path, "data-path")}></span> comments
</a> ` })}`} </div> ${view && !comment && renderTemplate`${renderComponent($$result, "Pageview", $$Pageview, {})}`}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/waline/PageInfo.astro", void 0);

export { $$PageInfo as $, $$Comment as a };
