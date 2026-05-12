/* empty css                */
import { c as createComponent } from './astro-component_DfenplIq.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './entrypoint_C9AHn4Vx.mjs';
import 'clsx';

const html = () => "<p>当我们用/iː/的发音念meat(/miːt/)时，可能会联想到为什么人们不会用同样的发音去拼读great(/ɡreɪt/)，若详细观察类似的拼写方式与其在单词中实际发音的方式，不难发现其多变性：</p>\n<p>great(/ɡreɪt/)—meat(/miːt/)</p>\n<p>room(/ruːm/)—flood(/flʌd/)</p>\n<p>soup(/suːp/)—house(/haʊs/)</p>\n<p>resume(/ˈrezjuːmeɪ/)—resume(/rɪˈzjuːm/)</p>\n<p>准确地说，在英语中的长元音似乎发生了某种变化，使得它们的发音位置移向了口腔的“更深处”——也就是元音音值的推移。在英语研究中，这种被称为 “元音大推移（Great Vowel Shift）” 的变动，是英语从中古英语过渡到早现代英语的核心语音转折。</p>\n<p>在 GVS 过程中，许多长元音的舌位被“抬高”，有些甚至变成双元音（为什么不试试读一读上面的单词呢？注意感受舌中部的位置变化）。这种差异化与15-16世纪的拼写标准化（尤其是印刷术引入与正字法的推行）共同作用：印刷术的普及让不同地区、不同方言的发音 “被锚定在某些拼写上”，同时拼写和发音可能来自不同的方言，从而进一步加剧了发音与拼写的脱节。</p>\n<p>但并不是所有长元音都遵循GVS的变化，正如前例中第一列单词：它们因拼读了特殊的辅音（例如双唇辅音 /m/、/p/等，它们被认为会阻碍某些元音音值的抬升）而保留了GVS前的发音——为我们理解长元音的链推提供了样本——我们或许可以得知某些单词较为原始的发音。额外地，部分外来词在GVS逐渐结束后加入到英语中，这些词进入英语时已经有成熟拼写或语音系统，它们未必经历当时大规模音系的连锁变动。</p>\n<p>语言作为人类信息的载体，并非是一个完美闭环的符号系统，而是嵌入在言语活动中的语言实践（language-games）——语言的意义来自于它的使用，而非抽象逻辑的完美规则。而GVS作为语言变迁的重大节点，恰是这一张力最生动、最真实的体现。</p>";

				const frontmatter = {"title":"GVS——例外的变迁","date":"2025-11-22 01:02:00 +0800","minutesRead":"3 min","words":573};
				const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/blog/blog4.md";
				const url = "/blog/blog4";
				function rawContent() {
					return "   \n                 \n                               \n   \n当我们用/iː/的发音念meat(/miːt/)时，可能会联想到为什么人们不会用同样的发音去拼读great(/ɡreɪt/)，若详细观察类似的拼写方式与其在单词中实际发音的方式，不难发现其多变性：\n\ngreat(/ɡreɪt/)—meat(/miːt/)\n\nroom(/ruːm/)—flood(/flʌd/)\n\nsoup(/suːp/)—house(/haʊs/)\n\nresume(/ˈrezjuːmeɪ/)—resume(/rɪˈzjuːm/)\n\n准确地说，在英语中的长元音似乎发生了某种变化，使得它们的发音位置移向了口腔的“更深处”——也就是元音音值的推移。在英语研究中，这种被称为 “元音大推移（Great Vowel Shift）” 的变动，是英语从中古英语过渡到早现代英语的核心语音转折。\n\n在 GVS 过程中，许多长元音的舌位被“抬高”，有些甚至变成双元音（为什么不试试读一读上面的单词呢？注意感受舌中部的位置变化）。这种差异化与15-16世纪的拼写标准化（尤其是印刷术引入与正字法的推行）共同作用：印刷术的普及让不同地区、不同方言的发音 “被锚定在某些拼写上”，同时拼写和发音可能来自不同的方言，从而进一步加剧了发音与拼写的脱节。\n\n但并不是所有长元音都遵循GVS的变化，正如前例中第一列单词：它们因拼读了特殊的辅音（例如双唇辅音 /m/、/p/等，它们被认为会阻碍某些元音音值的抬升）而保留了GVS前的发音——为我们理解长元音的链推提供了样本——我们或许可以得知某些单词较为原始的发音。额外地，部分外来词在GVS逐渐结束后加入到英语中，这些词进入英语时已经有成熟拼写或语音系统，它们未必经历当时大规模音系的连锁变动。\n\n语言作为人类信息的载体，并非是一个完美闭环的符号系统，而是嵌入在言语活动中的语言实践（language-games）——语言的意义来自于它的使用，而非抽象逻辑的完美规则。而GVS作为语言变迁的重大节点，恰是这一张力最生动、最真实的体现。";
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
