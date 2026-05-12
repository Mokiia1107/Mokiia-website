import { K as createVNode, F as Fragment, _ as __astro_tag_component__ } from './entrypoint_DG8tOUKX.mjs';
import { n as $$MdxRepl } from './Svg_CNrWygp3.mjs';
import 'clsx';

const frontmatter = {
  "title": "Content Presentation",
  "description": "About Content Page Rendering",
  "order": 5,
  "minutesRead": "3 min",
  "words": 464
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "shiki-code",
    "text": "Shiki Code"
  }, {
    "depth": 3,
    "slug": "basic-usage",
    "text": "Basic Usage"
  }, {
    "depth": 3,
    "slug": "add-title",
    "text": "Add Title"
  }, {
    "depth": 3,
    "slug": "show-diff",
    "text": "Show Diff"
  }, {
    "depth": 3,
    "slug": "show-highlight",
    "text": "Show Highlight"
  }, {
    "depth": 2,
    "slug": "content-obsolete-warning",
    "text": "Content Obsolete Warning"
  }];
}
function _createMdxContent(props) {
  const _components = {
    button: "button",
    code: "code",
    div: "div",
    pre: "pre",
    span: "span",
    svg: "svg",
    use: "use",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"shiki-code\">Shiki Code<a class=\"anchor\" href=\"#shiki-code\">#</a></h2>\n<p>You can change transformer at <code>defineConfig.markdown.shikiConfig</code> in config file <code>astro.config.ts</code>.</p>\n<h3 id=\"basic-usage\">Basic Usage<a class=\"anchor\" href=\"#basic-usage\">#</a></h3>\n<p>For <code>.astro</code> file:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"astro\"><pre><code><span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">---</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Code } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro:components'</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">---</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Code</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> lang</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'shell'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> code</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">={</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">`git log --oneline`</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">} /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">astro</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"---\nimport { Code } from &#x27;astro:components&#x27;\n---\n\n<Code lang=&#x27;shell&#x27; code={&#x60;git log --oneline&#x60;} />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>For <code>.mdx</code> and <code>.md</code> file:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><pre><code><span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">```shell</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">git</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> log</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> --oneline</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">```</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">markdown</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"&#x60;&#x60;&#x60;shell\ngit log --oneline\n&#x60;&#x60;&#x60;\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h3 id=\"add-title\">Add Title<a class=\"anchor\" href=\"#add-title\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      width: "80%",
      children: [createVNode(_components.div, {
        class: "astro-code astro-code-themes github-light github-dark",
        style: {
          backgroundColor: "#fff",
          "--shiki-dark-bg": "#24292e",
          color: "#24292e",
          "--shiki-dark": "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "shell",
        children: [createVNode(_components.div, {
          class: "title text-sm text-muted-foreground px-3 py-1 rounded-lg border",
          children: "start.sh"
        }), createVNode(_components.pre, {
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "#!/bin/bash"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "bun"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " check"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " &"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "bun"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " dev"
              })]
            })]
          })
        }), createVNode(_components.span, {
          class: "language ps-1 pe-3 text-sm bg-muted text-muted-foreground",
          children: "shell"
        }), createVNode(_components.button, {
          class: "copy text-muted-foreground p-1 box-content border rounded-lg bg-card",
          "aria-label": "Copy code",
          "data-code": "#!/bin/bash\n\nbun check &\nbun dev",
          onclick: "\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add('copied');\n          setTimeout(() => this.classList.remove('copied'), 2000)\n        ",
          children: [createVNode(_components.div, {
            class: "ready",
            children: createVNode(_components.svg, {
              class: "size-5",
              children: createVNode(_components.use, {
                href: "/icons/code.svg#mingcute-clipboard-line"
              })
            })
          }), createVNode(_components.div, {
            class: "success hidden",
            children: createVNode(_components.svg, {
              class: "size-5",
              children: createVNode(_components.use, {
                href: "/icons/code.svg#mingcute-file-check-line"
              })
            })
          })]
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><pre><code><span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">```shell title=\"start.sh\"</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">#!/bin/bash</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> check</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> &#x26;</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> dev</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">```</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">markdown</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"&#x60;&#x60;&#x60;shell title=&#x22;start.sh&#x22;\n#!/bin/bash\n\nbun check &#x26;\nbun dev\n&#x60;&#x60;&#x60;\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"show-diff\">Show Diff<a class=\"anchor\" href=\"#show-diff\">#</a></h3>\n<p>Supports add and del lines.</p>\n"
    }), createVNode($$MdxRepl, {
      width: "80%",
      children: [createVNode(_components.div, {
        class: "astro-code astro-code-themes github-light github-dark has-diff",
        style: {
          backgroundColor: "#fff",
          "--shiki-dark-bg": "#24292e",
          color: "#24292e",
          "--shiki-dark": "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "shell",
        children: [createVNode(_components.div, {
          class: "title text-sm text-muted-foreground px-3 py-1 rounded-lg border",
          children: "deploy.sh"
        }), createVNode(_components.pre, {
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "#!/bin/bash"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "bun"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " check"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "bun"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " lint"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line diff add",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "bun"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " format"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "# No need for vercel or other ci/cd"
              })
            }), "\n", createVNode(_components.span, {
              class: "line diff remove",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "bun"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " build"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "git"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " push"
              })]
            })]
          })
        }), createVNode(_components.span, {
          class: "language ps-1 pe-3 text-sm bg-muted text-muted-foreground",
          children: "shell"
        }), createVNode(_components.button, {
          class: "copy text-muted-foreground p-1 box-content border rounded-lg bg-card",
          "aria-label": "Copy code",
          "data-code": "#!/bin/bash\n\nbun check\nbun lint\nbun format # [!code ++]\n# No need for vercel or other ci/cd\nbun run build # [!code --]\ngit push",
          onclick: "\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add('copied');\n          setTimeout(() => this.classList.remove('copied'), 2000)\n        ",
          children: [createVNode(_components.div, {
            class: "ready",
            children: createVNode(_components.svg, {
              class: "size-5",
              children: createVNode(_components.use, {
                href: "/icons/code.svg#mingcute-clipboard-line"
              })
            })
          }), createVNode(_components.div, {
            class: "success hidden",
            children: createVNode(_components.svg, {
              class: "size-5",
              children: createVNode(_components.use, {
                href: "/icons/code.svg#mingcute-file-check-line"
              })
            })
          })]
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><pre><code><span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">```shell title=\"deploy.sh\"</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">#!/bin/bash</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> check</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> lint</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> format</span><span style=\"color:#6A737D;--shiki-dark:#6A737D\"> # [!code ++]</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\"># No need for vercel or other ci/cd</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> run</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> build</span><span style=\"color:#6A737D;--shiki-dark:#6A737D\"> # [!code --]</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">git</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> push</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">```</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">markdown</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"&#x60;&#x60;&#x60;shell title=&#x22;deploy.sh&#x22;\n#!/bin/bash\n\nbun check\nbun lint\nbun format # [\\!code ++]\n# No need for vercel or other ci/cd\nbun run build # [\\!code --]\ngit push\n&#x60;&#x60;&#x60;\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"show-highlight\">Show Highlight<a class=\"anchor\" href=\"#show-highlight\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      width: "80%",
      children: [createVNode(_components.div, {
        class: "astro-code astro-code-themes github-light github-dark has-highlighted collapsed",
        style: {
          backgroundColor: "#fff",
          "--shiki-dark-bg": "#24292e",
          color: "#24292e",
          "--shiki-dark": "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "html",
        children: [createVNode(_components.pre, {
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<!"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "doctype"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " html"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "><"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "html"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "><"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "head"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "><"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "meta"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " name"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"color-scheme\""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " content"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"dark\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "head"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "><"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "body"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " style"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'overflow:hidden'"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "<!-- Highlight a single line -->"
              })
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "p"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " style"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'text-align:center'"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">君指先跃动の光は、私の一生不変の信仰に、唯私の超电磁炮永生き！</"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "p"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "<!-- You can also highlight multiple lines with a single comment: -->"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "canvas"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " id"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"can\""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " width"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"400\""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " height"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"400\""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " style"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"background:Black;display:block;margin:20px auto;\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "canvas"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " sn"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "["
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "42"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "41"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "], dz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "43"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", fx"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", n, score"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=-"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", ctx"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "document."
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getElementById"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"can\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")."
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getContext"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"2d\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "onkeydown"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " e"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " fx "
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " sn["
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "]"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sn["
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "]"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(n"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "["
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "][(e"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "event).keyCode"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "37"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "]"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "fx) "
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " fx "
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " n;"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " draw"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "t"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "c"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") { ctx.fillStyle"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "c; ctx."
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fillRect"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(t"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "~~"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(t"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "/"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sz)"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ",sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "2"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ",sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "2"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "); }"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "!function"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() { sn."
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "unshift"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(n"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sn["
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "]"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "fx);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  if"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (sn."
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "indexOf"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(n,"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "n"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "n"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "399"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "fx"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "&&"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "n"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "||"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "fx"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "==-"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "&&"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "n"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "sz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " alert"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"GAME OVER. Score: \""
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "score);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  draw"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(n,"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"Lime\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  if"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (n"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "dz) { score"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "++"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "; "
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "do"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "{dz"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=~~"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "400"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")}"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "while"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(sn."
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "indexOf"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(dz)"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">="
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "); "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "draw"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(dz,"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"Yellow\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "); }"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  else"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " draw"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(sn."
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "pop"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(),"
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\"Black\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  setTimeout"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "arguments"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".callee,"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "130"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line highlighted",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "}(); </"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "</"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "body"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "html"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              })]
            })]
          })
        }), createVNode(_components.span, {
          class: "language ps-1 pe-3 text-sm bg-muted text-muted-foreground",
          children: "html"
        }), createVNode(_components.button, {
          class: "copy text-muted-foreground p-1 box-content border rounded-lg bg-card",
          "aria-label": "Copy code",
          "data-code": "<!doctype html><html><head><meta name=\"color-scheme\" content=\"dark\"></head><body style='overflow:hidden'> \n<!-- Highlight a single line -->\n<p style='text-align:center'>君指先跃动の光は、私の一生不変の信仰に、唯私の超电磁炮永生き！</p> <!-- [!code highlight] -->\n\n<!-- You can also highlight multiple lines with a single comment: -->\n<canvas id=\"can\" width=\"400\" height=\"400\" style=\"background:Black;display:block;margin:20px auto;\"></canvas> \n<script> // [!code highlight:11]\nvar sn=[42,41], dz=43, fx=1, n, score=-1, ctx=document.getElementById(\"can\").getContext(\"2d\"), sz=20;\nonkeydown = e => fx = sn[1]-sn[0]==(n=[-1,-20,1,20][(e||event).keyCode-37]||fx) ? fx : n;\nfunction draw(t,c) { ctx.fillStyle=c; ctx.fillRect(t%sz*sz+1,~~(t/sz)*sz+1,sz-2,sz-2); }\n!function() { sn.unshift(n=sn[0]+fx);\n  if (sn.indexOf(n,1)>0||n<0||n>399||fx==1&&n%sz==0||fx==-1&&n%sz==sz-1) return alert(\"GAME OVER. Score: \"+score);\n  draw(n,\"Lime\");\n  if (n==dz) { score++; do{dz=~~(Math.random()*400)}while(sn.indexOf(dz)>=0); draw(dz,\"Yellow\"); }\n  else draw(sn.pop(),\"Black\");\n  setTimeout(arguments.callee,130);\n}(); </script> \n</body></html> ",
          onclick: "\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add('copied');\n          setTimeout(() => this.classList.remove('copied'), 2000)\n        ",
          children: [createVNode(_components.div, {
            class: "ready",
            children: createVNode(_components.svg, {
              class: "size-5",
              children: createVNode(_components.use, {
                href: "/icons/code.svg#mingcute-clipboard-line"
              })
            })
          }), createVNode(_components.div, {
            class: "success hidden",
            children: createVNode(_components.svg, {
              class: "size-5",
              children: createVNode(_components.use, {
                href: "/icons/code.svg#mingcute-file-check-line"
              })
            })
          })]
        }), createVNode(_components.button, {
          class: "collapse-toggle bg-card text-muted-foreground rounded-lg m-2",
          "aria-label": "Toggle collapse code block",
          onclick: "this.parentElement.classList.toggle('collapsed')",
          children: [createVNode(_components.svg, {
            class: "size-5",
            children: createVNode(_components.use, {
              href: "/icons/code.svg#mingcute-arrow-down-line"
            })
          }), createVNode(_components.span, {
            class: "desc",
            children: " code"
          })]
        }), createVNode(_components.div, {
          class: "collapse-fade"
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark collapsed\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><pre><code><span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">```html</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;!</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">doctype</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> html</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">html</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">head</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">meta</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> name</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"color-scheme\"</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> content</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"dark\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">head</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">body</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> style</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'overflow:hidden'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> </span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">&#x3C;!-- Highlight a single line --></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> style</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'text-align:center'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>君指先跃动の光は、私の一生不変の信仰に、唯私の超电磁炮永生き！&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> </span><span style=\"color:#6A737D;--shiki-dark:#6A737D\">&#x3C;!-- [!code highlight] --></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">&#x3C;!-- You can also highlight multiple lines with a single comment: --></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">canvas</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> id</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"can\"</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> width</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"400\"</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> height</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"400\"</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> style</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"background:Black;display:block;margin:20px auto;\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">canvas</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">script</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> </span><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// [!code highlight:11]</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">var</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> sn</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">[</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">42</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">41</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">], dz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">43</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, fx</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, n, score</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=-</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, ctx</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">document.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">getElementById</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"can\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">).</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">getContext</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"2d\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">), sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">20</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">onkeydown</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#E36209;--shiki-dark:#FFAB70\"> e</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> fx </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> sn[</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">]</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sn[</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">]</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">==</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">[</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">-</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">-</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">20</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">20</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">][(e</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">||</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">event).keyCode</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">-</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">37</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">]</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">||</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">fx) </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">?</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> fx </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> n;</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">function</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> draw</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#E36209;--shiki-dark:#FFAB70\">t</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span><span style=\"color:#E36209;--shiki-dark:#FFAB70\">c</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">) { ctx.fillStyle</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">c; ctx.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">fillRect</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(t</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">%</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">*</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">+</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">~~</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(t</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">/</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sz)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">*</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">+</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">-</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">2</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">-</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">2</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">); }</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">!function</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">() { sn.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">unshift</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sn[</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">]</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">fx);</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">  if</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> (sn.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">indexOf</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n,</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">0</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">||</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">0</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">||</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">399</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">||</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">fx</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">==</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x26;&#x26;</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">%</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">==</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">0</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">||</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">fx</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">==-</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x26;&#x26;</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">%</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">==</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">sz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">-</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">) </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">return</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> alert</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"GAME OVER. Score: \"</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">score);</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  draw</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(n,</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"Lime\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">  if</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> (n</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">==</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">dz) { score</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">++</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">; </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">do</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{dz</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=~~</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(Math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">random</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">()</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">*</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">400</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)}</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">while</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(sn.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">indexOf</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(dz)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">>=</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">); </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">draw</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(dz,</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"Yellow\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">); }</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">  else</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> draw</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(sn.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pop</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(),</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"Black\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  setTimeout</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">arguments</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.callee,</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">130</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}(); &#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">script</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">body</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">html</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">```</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">markdown</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"&#x60;&#x60;&#x60;html\n<!doctype html><html><head><meta name=&#x22;color-scheme&#x22; content=&#x22;dark&#x22;></head><body style=&#x27;overflow:hidden&#x27;> \n<!-- Highlight a single line -->\n<p style=&#x27;text-align:center&#x27;>君指先跃动の光は、私の一生不変の信仰に、唯私の超电磁炮永生き！</p> <!-- [\\!code highlight] -->\n\n<!-- You can also highlight multiple lines with a single comment: -->\n<canvas id=&#x22;can&#x22; width=&#x22;400&#x22; height=&#x22;400&#x22; style=&#x22;background:Black;display:block;margin:20px auto;&#x22;></canvas> \n<script> // [\\!code highlight:11]\nvar sn=[42,41], dz=43, fx=1, n, score=-1, ctx=document.getElementById(&#x22;can&#x22;).getContext(&#x22;2d&#x22;), sz=20;\nonkeydown = e => fx = sn[1]-sn[0]==(n=[-1,-20,1,20][(e||event).keyCode-37]||fx) ? fx : n;\nfunction draw(t,c) { ctx.fillStyle=c; ctx.fillRect(t%sz*sz+1,~~(t/sz)*sz+1,sz-2,sz-2); }\n!function() { sn.unshift(n=sn[0]+fx);\n  if (sn.indexOf(n,1)>0||n<0||n>399||fx==1&#x26;&#x26;n%sz==0||fx==-1&#x26;&#x26;n%sz==sz-1) return alert(&#x22;GAME OVER. Score: &#x22;+score);\n  draw(n,&#x22;Lime&#x22;);\n  if (n==dz) { score++; do{dz=~~(Math.random()*400)}while(sn.indexOf(dz)>=0); draw(dz,&#x22;Yellow&#x22;); }\n  else draw(sn.pop(),&#x22;Black&#x22;);\n  setTimeout(arguments.callee,130);\n}(); </script> \n</body></html> \n&#x60;&#x60;&#x60;\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button><button class=\"collapse-toggle bg-card text-muted-foreground rounded-lg m-2\" aria-label=\"Toggle collapse code block\" onclick=\"this.parentElement.classList.toggle(&#x27;collapsed&#x27;)\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-arrow-down-line\"></use></svg><span class=\"desc\"> code</span></button><div class=\"collapse-fade\"></div></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"content-obsolete-warning\">Content Obsolete Warning<a class=\"anchor\" href=\"#content-obsolete-warning\">#</a></h2>\n<p>Add a warning message if the article is old enough.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-diff\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"astro\"><div class=\"title text-sm text-muted-foreground px-3 py-1 rounded-lg border\">src/layouts/BlogPost.astro</div><pre><code><span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">---</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// ...</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">---</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Hero</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> {data} {remarkPluginFrontmatter} </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">slot</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'header'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Fragment</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> slot</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'description'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      {</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">!</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">isDraft </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x26;&#x26;</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> enableComment </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x26;&#x26;</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">PageInfo</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> comment</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'mt-1'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> />}</span></span>\n<span class=\"line diff add\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      { </span></span>\n<span class=\"line diff add\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">        Math.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">floor</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">((Date.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">now</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">() </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">-</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> new</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> Date</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(articleDate).</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">getTime</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">()) </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 86400000</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">) </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 365</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> &#x26;&#x26;</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> ( </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">          &#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'mt-1 text-sm italic text-primary'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'--primary:41 90% 50%'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> &#x3C;!-- [!code ++] --></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">            This article was last updated over a year ago. Some information may be outdated. &#x3C;!-- [!code ++] --></span></span>\n<span class=\"line diff add\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">          &#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> </span></span>\n<span class=\"line diff add\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">        ) </span></span>\n<span class=\"line diff add\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      } </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    &#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Fragment</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Hero</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">astro</span><button class=\"copy text-muted-foreground p-1 box-content border rounded-lg bg-card\" aria-label=\"Copy code\" data-code=\"---\n// ...\n---\n  <Hero {data} {remarkPluginFrontmatter} slot=&#x27;header&#x27;>\n    <Fragment slot=&#x27;description&#x27;>\n      {!isDraft &#x26;&#x26; enableComment &#x26;&#x26; <PageInfo comment class=&#x27;mt-1&#x27; />}\n      { // [!code ++]\n        Math.floor((Date.now() - new Date(articleDate).getTime()) / 86400000) > 365 &#x26;&#x26; ( // [!code ++]\n          <p class=&#x27;mt-1 text-sm italic text-primary&#x27; style=&#x27;--primary:41 90% 50%&#x27;> <!-- [!code ++] -->\n            This article was last updated over a year ago. Some information may be outdated. <!-- [!code ++] -->\n          </p> /* [!code ++] */\n        ) // [!code ++]\n      } <!-- [!code ++] -->\n    </Fragment>\n  </Hero>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>It will render like this:</p>\n"
    }), createVNode("p", {
      class: "mt-1 text-sm italic text-primary",
      style: "--primary:41 90% 50%",
      children: "This article was last updated over a year ago. Some information may be outdated."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/integrations/content-present.mdx";
const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/docs/integrations/content-present.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/docs/integrations/content-present.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
