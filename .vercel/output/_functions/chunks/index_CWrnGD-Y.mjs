/* empty css                */
import { c as createComponent } from './astro-component_DfenplIq.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, s as spreadAttributes, r as renderComponent, b as renderTemplate } from './entrypoint_C9AHn4Vx.mjs';
import { $ as $$ResponsiveImage } from './_astro_assets_DNbq9osT.mjs';
import { c as cn, a as $$Icon, $ as $$Button, e as $$Collapse } from './Svg_BtW5kXcI.mjs';
import { $ as $$CommonPage } from './CommonPage_BInTx5H7.mjs';
import 'clsx';
import alipay from './alipay-qrcode_CcZOcE39.mjs';
import { a as createSvgComponent } from './runtime_BtSO5LLC.mjs';
import wechat from './wechat-qrcode_9RkewhmV.mjs';

const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProjectSection;
  const { class: className, projects, ...props } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({

});
  const projectIconSet = {
    github: "github-circle",
    site: "earth",
    doc: "document",
    release: "package"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}${spreadAttributes(props)}> <div class="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4"> ${projects.map((project) => {
    var imagePath = null;
    if (project.image) {
      imagePath = "/src/assets/projects/" + project.image;
      if (!images[imagePath])
        throw new Error(
          `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif,avif,webp}"`
        );
    }
    return renderTemplate`<div class="relative overflow-hidden rounded-xl border"> ${imagePath && renderTemplate`${renderComponent($$result, "Image", $$ResponsiveImage, { "class": "absolute end-0 z-0 m-0 h-full w-1/2 object-cover opacity-40", "src": images[imagePath](), "alt": project.name, "loading": "lazy", "style": {
      msMaskImage: "-ms-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      WebkitMaskImage: "-webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
    } })}`} <div${addAttribute(cn(
      "relative z-10 flex flex-col gap-y-1 px-2 py-1.5 sm:px-3 sm:py-2",
      imagePath && "me-20"
    ), "class")}> <a class="line-clamp-1 font-medium text-foreground no-underline transition-colors"${addAttribute(project.links[0].href, "href")} target="_blank"> ${project.name} </a> <div class="line-clamp-2 leading-snug text-muted-foreground sm:h-12"> ${project.description} </div> <div class="flex flex-row items-center gap-x-2 sm:gap-x-3"> ${project.links.map((link) => {
      const icon = projectIconSet[link.type];
      return renderTemplate`<a${addAttribute(link.href, "href")} class="rounded-full bg-muted p-1 text-muted-foreground transition-colors sm:p-1.5"${addAttribute(link.type, "aria-label")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": icon })} </a>`;
    })} </div> </div> </div>`;
  })} </div> </div>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/projects/ProjectSection.astro", void 0);

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Sponsors;
  const { class: className, progressMax = 25, sponsors, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("grid gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3", className), "class")}${spreadAttributes(props)}> ${sponsors.map((sponsor) => renderTemplate`<div class="sponsor-card relative h-full overflow-hidden rounded-xl border px-4 py-3"> <div class="font-medium mb-2 line-clamp-1">${sponsor.name}</div> <div class="text-xs text-muted-foreground"> ${sponsor.date} ${sponsor.platform && `by ${sponsor.platform}`} </div> <span class="absolute bottom-2 right-4 font-medium max-sm:text-lg">¥${sponsor.amount}</span> <div class="progress absolute h-full top-0 left-0 -z-10 bg-muted"${addAttribute({ width: `${Math.min(sponsor.amount / progressMax, 1) * 100}%` }, "style")}></div> </div>`)} </div>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/projects/Sponsors.astro", void 0);

const $$Sponsorship = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Sponsorship;
  const { class: className, methods, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((cn("flex flex-col justify-center gap-4 sm:flex-row", className) ?? "") + " astro-x4djmzfl", "class")}${spreadAttributes(props)}> ${methods.map((item) => renderTemplate`<div class="sponsorship-card relative justify-center overflow-hidden rounded-xl border bg-white astro-x4djmzfl"> <div class="sponsorship-card-icon absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center transition-opacity astro-x4djmzfl"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-20 astro-x4djmzfl", "name": item.icon })} </div> ${renderComponent($$result, "Image", $$ResponsiveImage, { "class": "sponsorship-card-img mx-auto my-0 max-w-60 blur-sm transition-opacity astro-x4djmzfl", "src": item.image, "alt": item.name, "loading": "lazy" })} </div>`)} </div>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/projects/Sponsorship.astro", void 0);

const KeyIcon = createSvgComponent({"meta":{"src":"/_astro/key.C_x5sVWv.svg","width":32,"height":32,"format":"svg"},"attributes":{"width":"32","height":"32","viewBox":"0 0 24 24"},"children":"<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"m12.593 23.258-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z\" /><path fill=\"currentColor\" d=\"M11.852 5.782a4.5 4.5 0 1 1 1.388 7.31 2.1 2.1 0 0 0-.837-.178H11.04c-.69 0-1.25.56-1.25 1.25v1.578H8.213c-.69 0-1.25.56-1.25 1.25v1.578H4.72v-1.414l5.356-5.355c.544-.544.68-1.296.55-1.931a4.5 4.5 0 0 1 1.226-4.088m7.778-1.414A6.5 6.5 0 0 0 8.666 10.27a.2.2 0 0 1-.006.118l-5.5 5.5a1.5 1.5 0 0 0-.44 1.061v2.611c0 .558.452 1.01 1.01 1.01h3.983c.69 0 1.25-.56 1.25-1.25v-1.578h1.578c.69 0 1.25-.56 1.25-1.25v-1.578h.61q.003-.002.042.013a6.502 6.502 0 0 0 7.187-10.56Zm-4.95 4.95a1.5 1.5 0 1 0 2.122-2.122 1.5 1.5 0 0 0-2.122 2.121Z\" /></g>","styles":[]});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const headings = [
    { depth: 2, slug: "programs", text: "Programs" },
    { depth: 2, slug: "learnings", text: "Learnings" },
    { depth: 2, slug: "others", text: "Others" },
    { depth: 2, slug: "gpg-signature", text: "GPG Signature" },
    { depth: 2, slug: "sponsorship", text: "Sponsorship" }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Projects", "headings": headings, "view": true, "class": "astro-2hwget37" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="not-prose flex justify-center astro-2hwget37"> <a href="/docs/advanced/about" target="_blank" class="flex items-center gap-x-3 rounded-full border bg-background px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md astro-2hwget37"> <span class="size-2 rounded-full bg-green-400 astro-2hwget37"></span> <p class="font-medium text-muted-foreground astro-2hwget37">About Astro-Theme-Pure Project</p> </a> </div> <p class="astro-2hwget37">Github Activities:</p> <p class="astro-2hwget37"> ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": "https://ghchart.rshah.org/659eb9/cworld1", "alt": "github activities", "inferSize": true, "loading": "lazy", "class": "astro-2hwget37" })} </p> <p class="astro-2hwget37">
If you think it would be useful or interesting to collaborate on a project, you can donate to
    support my work or contact me to discuss a project.
</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Checkout sponsorship", "class": "w-fit astro-2hwget37", "href": "#sponsorship" }, { "before": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "class": "size-5 astro-2hwget37", "name": "receive-money", "slot": "before" })}` })} <h2 id="programs" class="astro-2hwget37">Programs</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "projects": [
    {
      name: "🎨 Astro Theme Pure",
      description: "A simple, fast and powerful blog & document theme built by Astro",
      links: [
        { type: "github", href: "https://github.com/cworld1/astro-theme-pure" },
        { type: "site", href: "https://astro-pure.js.org/" },
        { type: "doc", href: "https://astro-pure.js.org/docs/list" },
        { type: "release", href: "https://www.npmjs.com/package/astro-pure" }
      ]
    },
    {
      name: "💄 PKU Art",
      description: "A script to beautify pku course website",
      links: [
        { type: "github", href: "https://github.com/zhuozhiyongde/pku-art" },
        { type: "site", href: "https://github.com/zhuozhiyongde/pku-art" },
        { type: "doc", href: "https://docs.arthals.ink/docs/pku-art" }
      ]
    }
  ], "class": "astro-2hwget37" })} ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Some old projects", "class": "astro-2hwget37" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProjectSection", $$ProjectSection, { "projects": [
    {
      name: "🧩 rehype-autolink-headings-simple",
      description: "A simple version of rehype-autolink-headings",
      links: [
        { type: "github", href: "https://github.com/cworld1/rehype-autolink-headings-simple" },
        {
          type: "release",
          href: "https://www.npmjs.com/package/rehype-autolink-headings-simple"
        }
      ]
    },
    {
      name: "Gaussian NB",
      description: "Simulating the Parsimonious Bayesian Algorithm with Python and Finding the Probability Prediction of Breast Cancer ",
      links: [{ type: "github", href: "https://github.com/cworld1/gaussian-nb" }]
    }
  ], "class": "astro-2hwget37" })} ` })} <h2 id="learnings" class="astro-2hwget37">Learnings</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "class": "my-2 astro-2hwget37", "projects": [
    {
      name: "R Learning",
      description: "Some notes and code about learning R language",
      links: [
        { type: "github", href: "https://github.com/cworld1/r-learning" },
        { type: "site", href: "https://cworld1.github.io/r-learning" }
      ]
    },
    {
      name: "CS 213 Learning",
      description: "Notes, code and experiences for Introduction to Computer Systems course",
      links: [
        {
          type: "github",
          href: "https://github.com/zhuozhiyongde/Introduction-To-Computer-System-2023Fall-PKU"
        }
      ]
    }
  ] })} <h2 id="others" class="astro-2hwget37">Others</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "projects": [
    {
      name: "CWorld",
      description: "CWorld's Github",
      links: [{ type: "github", href: "https://github.com/cworld1" }]
    },
    {
      name: "Arthals",
      description: "Arthals Github",
      links: [{ type: "github", href: "https://github.com/zhuozhiyongde" }]
    }
  ], "class": "astro-2hwget37" })} <h2 id="gpg-signature" class="astro-2hwget37">GPG Signature</h2> <p class="astro-2hwget37">
You can verify the authenticity of the files I signed by checking the GPG signature. My GPG key
    is <code class="astro-2hwget37">114514</code>, and you can find it on the opengpg key servers or download from it.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "https://keys.openpgp.org/search?q=114514", "title": "Checkout my key", "target": "_blank", "class": "astro-2hwget37" }, { "before": ($$result3) => renderTemplate`${renderComponent($$result3, "KeyIcon", KeyIcon, { "class": "size-5 astro-2hwget37", "slot": "before" })}` })} <h2 id="sponsorship" class="astro-2hwget37">Sponsorship</h2> <p class="astro-2hwget37">Chinese methods: <a href="https://afdian.com/a/cworld" target="_blank" class="astro-2hwget37">Afadian</a>, Wechat or Alipay </p> ${renderComponent($$result2, "Sponsorship", $$Sponsorship, { "methods": [
    { name: "WeChat", icon: "wechat-pay", image: wechat },
    { name: "Alipay", icon: "alipay", image: alipay }
  ], "class": "astro-2hwget37" })} <p class="astro-2hwget37">Global methods: <a href="https://ko-fi.com/cworld0" target="_blank" class="astro-2hwget37">Ko-fi</a> </p> <p class="astro-2hwget37">Please leave a message or contact me proactively after sponsorship. My email is:
<code style="cursor: pointer" onclick="const m=atob(this.textContent);alert(m);window.open(\`mailto:\${m}\`,&quot;_blank&quot;)" class="astro-2hwget37">Y3dvcmxkMEBxcS5jb20=</code>
(click code to transform base64).
</p> <p class="astro-2hwget37">Thanks to the following sponsors:</p> ${renderComponent($$result2, "Sponsors", $$Sponsors, { "progressMax": 50, "sponsors": [
    { name: "Saneko", platform: "Wechat", amount: 188, date: "2026-02-25" },
    { name: "边缘星2020", platform: "Afdian", amount: 20.26, date: "2026-02-17" },
    { name: "Juyao Huang", platform: "Wechat", amount: 5, date: "2026-01-15" },
    { name: "hoochanlon", platform: "Wechat", amount: 5, date: "2025-11-09" },
    { name: "Arthals", platform: "Wechat", amount: 50, date: "2025-11-06" },
    { name: "边缘星2020 (byx2020.com)", platform: "Alipay", amount: 50, date: "2025-11-01" },
    { name: "小哲", platform: "Wechat", amount: 50, date: "2025-08-19" },
    { name: "Open1V", platform: "Wechat", amount: 2, date: "2025-08-14" },
    { name: "Luis Xu", platform: "Alipay", amount: 30, date: "2025-08-03" },
    { name: "顾**", platform: "Wechat", amount: 28, date: "2025-06-23" },
    { name: "Hans J.Han", platform: "Wechat", amount: 10, date: "2025-04-04" },
    { name: "**青", platform: "Alipay", amount: 12, date: "2024-05-21" },
    { name: "Anonymous", platform: "Wechat", amount: 20, date: "2022-04-06" },
    { name: "华雄", platform: "QQ", amount: 5, date: "2019-12-30" },
    { name: "◌", platform: "QQ", amount: 3, date: "2019-12-30" },
    // 酷安@暴走の蜗牛
    { name: "C*a", amount: 2, date: "2019-07-02" }
  ], "class": "astro-2hwget37" })} ` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/projects/index.astro", void 0);

const $$file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
