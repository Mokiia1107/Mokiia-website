/* empty css                */
import { c as createComponent } from './astro-component_DfenplIq.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './entrypoint_C9AHn4Vx.mjs';
import 'clsx';

const html = () => "<p>大约是在中学一年级、又或者是二年级，不知道是突然浮现在脑海中的、或是由梦中来的一个场景，大约是下午：读书+咖啡+夕阳，还有一些由简单几何体组成的建筑。所有的颜色都是极其温暖却柔和的橘色，透过某种柔光滤镜进行着略微的浮变。</p>\n<p>这是一定可以实现的梦，而非某种空想——是只要愿意做到就一定可以实现的愿景。但那梦却禁止我用某种有意识的方式实现它，只希望我在某个无意识、不经意的时刻遇见它，而当我意识到处于梦中的那一刻，梦便自顾地终结了。</p>\n<p>另一个梦则来自随意 (Voluntary) 的捏造，原料则是现实的规则与个人的幻想，正如利用头骨做面部复原一样，将以幻想形成的肌肉、皮肤与结缔组织一一按顺序黏合到规则的骨头上便可以见到它的样貌。可是真正随意的部分只是规则之外的东西，而那骨骼绝非是可以被改变的，不过没什么好急迫的，因为我能想象出那梦的样貌。</p>\n<p>而直到前不久——大约是八年后的现在——新的梦才继续出现。作为完完全全的构造主义  (Structuralism) 梦境，能看到的只有一些线条、图形与颜色，而令人平静的格式塔样景观却并未出现。“这是毫无道理的”，这样告诉自己。但这是已经发生在现实 (wirklich) 中的事情，它必然合乎某种理性(Vernünftig)。“事实就是这样”，这是没有办法的事情，无论如何它都必然存在着。</p>\n<p>“Stand by me, but I bet that I’ll never be back…”\n“Stand by me, but I bet that I’ll never be back…”，「春嵐」的歌词这样在新的梦中、世界的中心继续着，呼唤着试图对梦作出解答的声音。</p>\n<p>而现在能回忆起的，大约只有橘色、头骨与正在发生的事情</p>";

				const frontmatter = {"title":"橘色、头骨与正发生的事","date":"2026-5-8 20:06:00 +0800","minutesRead":"3 min","words":545};
				const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/blog/blog6.md";
				const url = "/blog/blog6";
				function rawContent() {
					return "   \n                  \n                             \n   \n大约是在中学一年级、又或者是二年级，不知道是突然浮现在脑海中的、或是由梦中来的一个场景，大约是下午：读书+咖啡+夕阳，还有一些由简单几何体组成的建筑。所有的颜色都是极其温暖却柔和的橘色，透过某种柔光滤镜进行着略微的浮变。\n\n这是一定可以实现的梦，而非某种空想——是只要愿意做到就一定可以实现的愿景。但那梦却禁止我用某种有意识的方式实现它，只希望我在某个无意识、不经意的时刻遇见它，而当我意识到处于梦中的那一刻，梦便自顾地终结了。\n\n另一个梦则来自随意 (Voluntary) 的捏造，原料则是现实的规则与个人的幻想，正如利用头骨做面部复原一样，将以幻想形成的肌肉、皮肤与结缔组织一一按顺序黏合到规则的骨头上便可以见到它的样貌。可是真正随意的部分只是规则之外的东西，而那骨骼绝非是可以被改变的，不过没什么好急迫的，因为我能想象出那梦的样貌。\n\n而直到前不久——大约是八年后的现在——新的梦才继续出现。作为完完全全的构造主义  (Structuralism) 梦境，能看到的只有一些线条、图形与颜色，而令人平静的格式塔样景观却并未出现。“这是毫无道理的”，这样告诉自己。但这是已经发生在现实 (wirklich) 中的事情，它必然合乎某种理性(Vernünftig)。“事实就是这样”，这是没有办法的事情，无论如何它都必然存在着。\n\n“Stand by me, but I bet that I’ll never be back…”\n“Stand by me, but I bet that I’ll never be back…”，「春嵐」的歌词这样在新的梦中、世界的中心继续着，呼唤着试图对梦作出解答的声音。\n\n而现在能回忆起的，大约只有橘色、头骨与正在发生的事情\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
