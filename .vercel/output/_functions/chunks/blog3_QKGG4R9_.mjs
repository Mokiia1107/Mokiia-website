/* empty css                */
import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './entrypoint_DG8tOUKX.mjs';
import 'clsx';

const html = () => "<p>假如问我为何要为其他人推荐EVA，最好的答案可能是：它是为了回答“我将要向哪去”而创作的：\n神之子对于补完计划的抉择，决定了人类究竟以何种形态存在：\n他说：“大家都去死吧！…”\n又说：“…虽然这样的世界依旧存在隔阂与误解，但只有在那里，‘我’才是存在的”\n自我的世界是一切所感事实的总和，——“自我”即世界的界限，而不是它的一部分\n在LCL之海中我们到底是完全融入、理解了他人，还是将自我的边界无限扩大，将所有的“非我”同化为“自我”？\n自我不能凭空成立，自我必须以“他者”为界。正是他者的界限，痛苦才得以被体验——一道清晰的边界线——痛苦不会来源于世界之内。正因如此，我们才确信地具有独立的意志：我们无法除去他者世界之内的存在\n在不存在A.T. Field的世界里，我们的选择是：如何处理自我的世界——去远离界限，或是因它而存在——尤其是在人生分界线处，我们不得不做出回答\n因此，它逼着我们面对这最后一个问题：“我将要向怎样的世界出发”</p>";

				const frontmatter = {"title":"Evangelion——在人生分界线处的选择","date":"2025-11-05 22:15:00 +0800","minutesRead":"2 min","words":363};
				const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/blog/blog3.md";
				const url = "/blog/blog3";
				function rawContent() {
					return "   \n                             \n                               \n   \n假如问我为何要为其他人推荐EVA，最好的答案可能是：它是为了回答“我将要向哪去”而创作的：\n神之子对于补完计划的抉择，决定了人类究竟以何种形态存在：\n他说：“大家都去死吧！...”\n又说：“...虽然这样的世界依旧存在隔阂与误解，但只有在那里，‘我’才是存在的”\n自我的世界是一切所感事实的总和，——“自我”即世界的界限，而不是它的一部分\n在LCL之海中我们到底是完全融入、理解了他人，还是将自我的边界无限扩大，将所有的“非我”同化为“自我”？\n自我不能凭空成立，自我必须以“他者”为界。正是他者的界限，痛苦才得以被体验——一道清晰的边界线——痛苦不会来源于世界之内。正因如此，我们才确信地具有独立的意志：我们无法除去他者世界之内的存在\n在不存在A.T. Field的世界里，我们的选择是：如何处理自我的世界——去远离界限，或是因它而存在——尤其是在人生分界线处，我们不得不做出回答\n因此，它逼着我们面对这最后一个问题：“我将要向怎样的世界出发” ";
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
