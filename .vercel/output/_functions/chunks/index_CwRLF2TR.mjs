/* empty css                */
import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot, c as addAttribute } from './entrypoint_DG8tOUKX.mjs';
import { $ as $$ResponsiveImage } from './_astro_assets_DntDX2KG.mjs';
import { $ as $$Quote } from './MediumZoom_kxYdcJwW.mjs';
import { c as $$PostPreview } from './PFSearch_EVmnNnod.mjs';
import { g as getBlogCollection, s as sortMDByDate } from './server_D24AjWlT.mjs';
import { c as cn, $ as $$Button, h as $$Label, a as $$Icon, i as $$Card } from './Svg_CNrWygp3.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CE-B2Eh5.mjs';
import 'clsx';
import { c as config } from './site.config_DMl9LK3H.mjs';

const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/1.avif": () => import('./1_B-vbqQyd.mjs'),"/src/assets/projects/2.avif": () => import('./2_BjG6_sKp.mjs'),"/src/assets/projects/3.avif": () => import('./3_DZCwvpGe.mjs'),"/src/assets/projects/4.avif": () => import('./4_DoB5rcRa.mjs')

});
  if (!images[imagePath])
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif,avif,webp}"`
    );
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": (cn(
    className,
    "project-card group overflow-hidden relative flex flex-col justify-end rounded-2xl border bg-muted ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ) ?? "") + " astro-4z6dfqi7", "href": href, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": images[imagePath](), "alt": altText ?? heading, "class": "absolute w-full object-contain opacity-60 transition-opacity group-hover:opacity-100 dark:opacity-35 astro-4z6dfqi7", "class": "absolute w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-100 dark:opacity-35", "loading": "lazy" })} ${maybeRenderHead()}<div class="project-card-fg z-10 flex flex-col gap-y-0.5 px-5 pb-4 pt-36 transition-all astro-4z6dfqi7"> <h2 class="text-lg font-medium astro-4z6dfqi7">${heading}</h2> <p class="text-muted-foreground astro-4z6dfqi7">${subheading}</p> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/home/ProjectCard.astro", void 0);

const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("flex flex-col gap-y-5 md:flex-row md:gap-y-0", className), "class")}> <div class="text-xl font-medium md:min-w-36"> <h2>${title}</h2> </div> <div class="flex flex-1 flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/home/Section.astro", void 0);

const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"> <h3 class="w-1/5 font-medium">${title}</h3> <div class="flex flex-row flex-wrap gap-x-4 gap-y-2 md:w-4/5"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "variant": "pill" })}`)} </div> </div>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/home/SkillLayout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const languages = ["Html", "JavaScript", "CSS", "Shell"];
  const frontend = ["TypeScript", "Vite", "Webpack", "Astro"];
  const backend = ["Vercel", "Waline"];
  const MAX_POSTS = 10;
  const allPosts = await getBlogCollection();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  const imagePath = config.logo.src;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/alipay-qrcode.jpg": () => import('./alipay-qrcode_CcZOcE39.mjs'),"/src/assets/avatar.png": () => import('./avatar_B4wjNSc2.mjs'),"/src/assets/wechat-qrcode.jpg": () => import('./wechat-qrcode_9RkewhmV.mjs')

});
  if (!images[imagePath])
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif,avif,webp}"`
    );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" }, "highlightColor": "#659EB9" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex w-full flex-col items-center"> <section class="animate mb-10 flex flex-col items-center gap-y-7" id="content-header"> ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": images[imagePath](), "alt": config.logo.alt || "Profile", "class": "h-28 w-auto rounded-full border p-1", "loading": "eager", "fetchpriority": "high" })} <div class="flex flex-col items-center gap-y-4"> <h1 class="text-3xl font-medium">${config.author}</h1> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> ${renderComponent($$result2, "Label", $$Label, { "title": "Somewhere" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "location", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Source code", "as": "a", "href": "https://github.com/cworld1/astro-theme-pure", "target": "_blank" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "github", "class": "size-5", "slot": "icon" })}` })} </div> </div>  <a href="https://github.com/cworld1/astro-theme-pure" target="_blank" class="flex flex-row items-center gap-x-3 rounded-full border bg-background px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p class="font-medium text-muted-foreground">Get Template</p> </a> </section> <div id="content" class="animate flex flex-col gap-y-10 md:w-4/5 lg:w-5/6"> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": async ($$result3) => renderTemplate` <p class="text-muted-foreground">Developer / Designer</p> <p class="text-muted-foreground">
Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione
          indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel,
          at eum oratio possit voluptatum.
</p> ${renderComponent($$result3, "Button", $$Button, { "title": "More about me", "class": "w-fit self-end", "href": "/about", "variant": "ahead" })} ` })} ${allPostsByDate.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Posts" }, { "default": async ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-1.5 sm:gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ${renderComponent($$result3, "Button", $$Button, { "title": "More posts", "class": "w-fit self-end", "href": "/blog", "variant": "ahead" })} ` })}`}  ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "as": "a", "heading": "Lorem ipsum", "subheading": "Lorem ipsum dolor sit amet, vidit suscipit at mei.", "date": "August 2021 - July 2025", "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, {})} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Website List" }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-cols-1 gap-3 sm:grid-cols-2"> ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "heading": "Lorem ipsum", "subheading": "Do not go gentle into that good night", "imagePath": "/src/assets/projects/1.avif" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "heading": "Lorem ipsum", "subheading": "Old age burn and rave at close of day", "imagePath": "/src/assets/projects/2.avif" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "heading": "Lorem ipsum", "subheading": "Rage, rage against the dying of the light", "imagePath": "/src/assets/projects/3.avif" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "/projects", "heading": "More projects", "subheading": "Check out more projects", "imagePath": "/src/assets/projects/4.avif" })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Certifications" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "as": "a", "heading": "Lorem ipsum", "subheading": " Dicat ceteros cu vim. Impetus fuisset ullamcorper pri cu, his posse iisque ad, aliquam honestatis usu id.", "date": "July 2024", "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Skills" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Languages", "skills": languages })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Frontend", "skills": frontend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Backend", "skills": backend })} ` })} </div> ${renderComponent($$result2, "Quote", $$Quote, { "class": "mt-12" })} </main> ` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/index.astro", void 0);

const $$file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
