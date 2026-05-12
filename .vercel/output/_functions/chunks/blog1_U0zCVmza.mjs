/* empty css                */
import { c as createComponent } from './astro-component_gWPcVVQZ.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './entrypoint_DG8tOUKX.mjs';
import 'clsx';

const html = () => "<p>在物种演化的过程中，最不必要的存在之一是文明的存在，而当人被剥离掉一切文明的框架后，我们到底是得到了更纯粹的情感，还是基于欲望的幻觉？</p>\n<p>人类的文明建立是以摒弃动物性本能的代价所建立的——“若是个体间需要爱情才能繁衍，那大概九成的物种都会灭亡”因此，从生物量上看，虽然人类不是环境中最优势的物种，但正是文明的存在将人类与其它生物区分开，这也是沙耶选择人类的原因。</p>\n<p>到底是文明依赖于人类而存在，还是人类需要被文明接纳？沙耶之歌或许间接回答了这一问题：</p>\n<p>郁纪的状态就像是面对着失去了所有文明属性的世界，或者说与沙耶相同，他来到了完全陌生的世界，他/她没有继续存在于此的理由，直到对方的出现为这种不必要的存在重新带来了目的性——即对方本身</p>\n<p>这种关系存在的唯一理由是彼此之间确实存在的需要，但也正是这种需求的欲望为存在本身带来了设想下的目的性： 郁纪所产生的并不是基于文明所赋予他的理性，而是基于对情感，这一文明产物的渴求产生的幻觉，这种幻觉并非是不存在的东西，它依旧是物质的，当它得以在个体的认知中存在时，便成了他的个人现实</p>\n<p>沙耶也是如此——这种幻觉如此之强以至于她爱上了一只怪物，尽管这种幻觉的背后是难以理喻的疯狂，正常不过是无尽混乱与疯狂中的某种间歇的集体性幻觉，只不过当它在所有人的可知中存在时，便成了所谓的现实</p>\n<p>于是，当我们抛弃文明的伪装，得到的并不是更纯粹的情感，而是正在坠入幻觉内部的深渊</p>";

				const frontmatter = {"title":"沙耶之歌——不必要的存在","date":"2025-11-03 22:15:00 +0800","minutesRead":"3 min","words":552};
				const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/blog/blog1.md";
				const url = "/blog/blog1";
				function rawContent() {
					return "   \n                   \n                               \n   \n\n在物种演化的过程中，最不必要的存在之一是文明的存在，而当人被剥离掉一切文明的框架后，我们到底是得到了更纯粹的情感，还是基于欲望的幻觉？\n\n人类的文明建立是以摒弃动物性本能的代价所建立的——“若是个体间需要爱情才能繁衍，那大概九成的物种都会灭亡”因此，从生物量上看，虽然人类不是环境中最优势的物种，但正是文明的存在将人类与其它生物区分开，这也是沙耶选择人类的原因。  \n\n到底是文明依赖于人类而存在，还是人类需要被文明接纳？沙耶之歌或许间接回答了这一问题：  \n\n郁纪的状态就像是面对着失去了所有文明属性的世界，或者说与沙耶相同，他来到了完全陌生的世界，他/她没有继续存在于此的理由，直到对方的出现为这种不必要的存在重新带来了目的性——即对方本身  \n\n这种关系存在的唯一理由是彼此之间确实存在的需要，但也正是这种需求的欲望为存在本身带来了设想下的目的性： 郁纪所产生的并不是基于文明所赋予他的理性，而是基于对情感，这一文明产物的渴求产生的幻觉，这种幻觉并非是不存在的东西，它依旧是物质的，当它得以在个体的认知中存在时，便成了他的个人现实  \n\n沙耶也是如此——这种幻觉如此之强以至于她爱上了一只怪物，尽管这种幻觉的背后是难以理喻的疯狂，正常不过是无尽混乱与疯狂中的某种间歇的集体性幻觉，只不过当它在所有人的可知中存在时，便成了所谓的现实  \n\n于是，当我们抛弃文明的伪装，得到的并不是更纯粹的情感，而是正在坠入幻觉内部的深渊 ";
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
