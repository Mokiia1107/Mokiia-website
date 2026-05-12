/* empty css                */
import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, b as renderTemplate, s as spreadAttributes, F as Fragment } from './entrypoint_DG8tOUKX.mjs';
import { a as $$Icon, c as cn, b as $$Svg, d as $$Spoiler, $ as $$Button, e as $$Collapse, f as $$Timeline } from './Svg_CNrWygp3.mjs';
import { $ as $$CommonPage } from './CommonPage_D581alHU.mjs';
import { $ as $$ResponsiveImage } from './_astro_assets_DntDX2KG.mjs';

const $$Substats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Substats;
  const { stats } = Astro2.props;
  async function fetchCount(item) {
    if (!item.api) return;
    try {
      const response = await fetch(`https://api.swo.moe/stats/${item.api}`);
      const data = await response.json();
      if (data.failed) {
        throw new Error(data.message);
      } else {
        item.count = data.count;
      }
    } catch (error) {
      console.error(`Error in Substats fetching: ${error}`);
    }
  }
  await Promise.all(stats.map(fetchCount));
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-3 rounded-xl border p-2 sm:grid-cols-2 sm:p-3"> ${stats.map(({ link, platform, icon, color, count, text }) => renderTemplate`<a class="group text-muted-foreground no-underline"${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer"> <div class="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 transition-all hover:border-border hover:bg-muted"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "color": color })}`} <div class="flex-1 text-foreground transition-colors group-hover:text-primary"> ${platform} </div> ${count ? renderTemplate`<div class="flex items-center gap-1.5"> <samp>${count}</samp> <span class="text-sm font-normal">${text}</span> </div>` : "null"} </div> </a>`)} </div> <div class="mt-2 text-right text-sm">
Display real-time; powered by <a class="text-muted-foreground" href="http://github.com/spencerwooo/substats" target="_blank" rel="noopener noreferrer">Substats</a> </div>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/about/Substats.astro", void 0);

const $$ToolSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ToolSection;
  const { class: className, title, tools, ...props } = Astro2.props;
  function isImageMetadata(obj) {
    return typeof obj === "object" && obj !== null && "src" in obj;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("not-prose flex flex-col rounded-xl border py-3 px-3 gap-y-3 sm:gap-y-4", className), "class")}${spreadAttributes(props)}> <div class="m-0 px-2 text-lg font-medium">${title}</div> <div class="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2"> ${tools.map((tool) => renderTemplate`<a class="group relative text-sm leading-normal no-underline"${addAttribute(tool.href, "href")}${addAttribute(tool.name, "id")} target="_blank"> <div class="flex items-center gap-x-3 rounded-lg border border-transparent px-1.5 py-1 transition-colors hover:border-border hover:bg-muted"> ${tool.darkIcon ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${isImageMetadata(tool.icon) ? renderTemplate`<div class="size-10 rounded-lg bg-card p-2 dark:hidden"> ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": tool.icon, "alt": tool.name, "class": "h-full w-full object-contain" })} </div>` : renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "src": tool.icon, "class": "size-10 rounded-lg bg-card fill-foreground p-2 dark:hidden" })}`}${isImageMetadata(tool.darkIcon) ? renderTemplate`<div class="size-10 rounded-lg bg-card p-2 hidden dark:block"> ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": tool.darkIcon, "alt": tool.name, "class": "h-full w-full object-contain" })} </div>` : renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "src": tool.darkIcon, "class": "size-10 rounded-lg bg-card fill-foreground p-2 hidden dark:block" })}`}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${isImageMetadata(tool.icon) ? renderTemplate`<div class="size-10 rounded-lg bg-card p-2"> ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": tool.icon, "alt": tool.name, "class": "h-full w-full object-contain" })} </div>` : renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "src": tool.icon, "class": "size-10 rounded-lg bg-card fill-foreground p-2" })}`}` })}`} <div class="z-20 flex flex-col"> <div class="font-medium text-foreground">${tool.name}</div> <div class="font-normal">${tool.description}</div> </div> </div> </a>`)} </div> </div>`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/components/about/ToolSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const headings = [
    { depth: 2, slug: "hobbies", text: "Hobbies" },
    { depth: 2, slug: "tools", text: "Tools" },
    { depth: 2, slug: "social-networks", text: "Social Networks" },
    { depth: 2, slug: "gossips", text: "Gossips" },
    { depth: 2, slug: "about-blog", text: "About Blog" }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$CommonPage, { "title": "About", "headings": headings, "comment": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Developer / Designer</p> <p>
Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum
    dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio
    possit voluptatum.
</p> <p>
Motto: Stay hungry, Stay foolish. ${renderComponent($$result2, "Spoiler", $$Spoiler, {}, { "default": ($$result3) => renderTemplate`这里可以夹私货，比如为什么要演奏春日影！` })} </p> ${renderComponent($$result2, "Button", $$Button, { "title": "Sponsor Me", "class": "w-fit", "href": "/projects#sponsorship", "variant": "ahead" })} <h2 id="hobbies">Hobbies</h2> <ul> <li>Lorem ipsum dolor sit amet, vidit suscipit at mei.</li> <li>
Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod
      voluptua ne.
</li> <li>Ex dicat impedit mel, at eum oratio possit voluptatum.</li> <li>Impetus fuisset ullamcorper pri cu, his posse iisque ad, aliquam honestatis usu id.</li> </ul> <h2 id="tools">Tools</h2> <p>Current support tools as follow:</p> ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Design", "tools": [
    {
      name: "Photoshop",
      description: "Picture Editing",
      href: "https://www.adobe.com/products/photoshop",
      icon: import('./photoshop_BlMUeF9e.mjs')
    },
    {
      name: "Illustrator",
      description: "Vector Drawing",
      href: "https://www.adobe.com/products/illustrator",
      icon: import('./illustrator_CkfmBOr3.mjs')
    },
    {
      name: "After Effects",
      description: "Motion Graphics",
      href: "https://www.adobe.com/products/aftereffects",
      icon: import('./aftereffects_Cvu-_GFX.mjs')
    },
    {
      name: "Premiere Pro",
      description: "Video Editing",
      href: "https://www.adobe.com/products/premiere",
      icon: import('./premiere_BUHLHv1x.mjs')
    }
  ] })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Productivity", "tools": [
    {
      name: "Chrome",
      description: "Browser",
      href: "https://www.google.com/chrome/",
      icon: import('./chrome_IeV039iH.mjs')
    },
    {
      name: "Firefox",
      description: "Browser",
      href: "https://www.mozilla.org/en-US/firefox",
      icon: import('./firefox_BazQsRy8.mjs')
    },
    {
      name: "Notion",
      description: "Note Taking",
      href: "https://www.notion.so/",
      icon: import('./notion_CCmRCukG.mjs')
    },
    {
      name: "Typora",
      description: "Markdown Editor",
      href: "https://typora.io/",
      icon: import('./typora_rznx-4TN.mjs')
    }
  ] })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Development", "tools": [
    {
      name: "VS Code",
      description: "IDE",
      href: "https://code.visualstudio.com/",
      icon: import('./vscode_RrzjPKQS.mjs')
    },
    {
      name: "Neovim",
      description: "IDE",
      href: "https://neovim.io/",
      icon: import('./neovim_CWf11DVU.mjs')
    },
    {
      name: "Sublime Text",
      description: "IDE",
      href: "https://www.sublimetext.com/",
      icon: import('./sublime_C_2FzY6q.mjs')
    }
  ] })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Environment", "tools": [
    {
      name: "Arch Linux",
      description: "Linux Distribution",
      href: "https://archlinux.org/",
      icon: import('./archlinux_DttjdvZ4.mjs')
    },
    {
      name: "Ubuntu 24.04 LTS",
      description: "Linux Distribution",
      href: "https://ubuntu.com/",
      icon: import('./ubuntu_iMPWn6HF.mjs')
    },
    {
      name: "MacOS Tahoe",
      description: "MacBook Air",
      href: "https://www.apple.com/macos/",
      icon: import('./apple_D53-Rkoh.mjs')
    },
    {
      name: "Windows 11",
      description: "Framework Laptop 16",
      href: "https://news.microsoft.com/windows11-general-availability/",
      icon: import('./windows11_CCF29cKn.mjs')
    }
  ] })} <h2 id="social-networks">Social Networks</h2> <p>
Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum
    dissentiunt, cu meliore fuisset mei, vel quod voluptua ne.
</p> ${renderComponent($$result2, "Substats", $$Substats, { "stats": [
    {
      platform: "GitHub",
      icon: "github",
      link: "https://github.com/cworld1",
      text: "followers",
      api: "github/cworld1"
    },
    {
      platform: "Telegram",
      icon: "telegram",
      color: "#2ca5e0",
      link: "https://t.me/cworld0_cn",
      text: "subscribers",
      api: "telegram/cworld0_cn"
    },
    {
      platform: "Steam",
      icon: "steam",
      color: "#50769d",
      link: "https://steamcommunity.com/id/cworld",
      text: "games",
      api: "steamgames/76561199021278120"
    }
  ] })} <h2 id="gossips">Gossips</h2> ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Lorem ipsum" }, { "default": ($$result3) => renderTemplate`
Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum
    dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio
    possit voluptatum.
` })} <h2 id="about-blog">About Blog</h2> <p>Website history:</p> ${renderComponent($$result2, "Timeline", $$Timeline, { "events": [
    {
      date: "2024-04-29",
      content: 'Website refactored using <a href="https://astro.build/" target="_blank">Astro</a> and <a href="https://github.com/srleom/astro-theme-resume" target="_blank">Astro Theme Resume</a>'
    },
    {
      date: "2024-07-26",
      content: 'Website abstracted as a theme and published on <a href="https://github.com/cworld1/astro-theme-pure"target="_blank">Github</a>'
    },
    {
      date: "2024-07-27",
      content: "Began writing website docs"
    }
  ] })} <p>
The smooth operation and personalized customization of website also rely on the resources and
    technical support provided by the following excellent projects/service providers:
</p> <ul> <li>Domain: <a href="#" target="_blank">Vercel</a></li> <li>
Framework & Theme: <a href="https://astro.build/" target="_blank">Astro</a> + <a href="https://github.com/cworld1/astro-theme-pure" target="_blank">Astro Theme Pure</a> </li> <li>
Site hosting: <a href="https://vercel.com/" target="_blank">Vercel</a> </li> <li>
CI/CD: <a href="https://vercel.com/workflow" target="_blank">Vercel Workflow</a> </li> <li>Comment system: <a href="https://waline.js.org" target="_blank">Waline</a></li> <li>
Visits: <a href="https://supabase.com/" target="_blank">Supabase</a> +
<a href="https://waline.js.org/" target="_blank">Waline</a> </li> <li>
Other statistics: <a href="https://github.com/spencerwooo/substats" target="_blank">Substats</a> </li> </ul> ` })}`;
}, "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/about/index.astro", void 0);

const $$file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
