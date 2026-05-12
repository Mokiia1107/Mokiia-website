/* empty css                */
import { c as createComponent } from './astro-component_DfenplIq.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './entrypoint_C9AHn4Vx.mjs';
import 'clsx';

const html = () => "<p>在对各种语言的敬语体系考察中，不难发现如下有趣的现象：</p>\n<p>we（英文：我们）——尊称：我（指代“I”）</p>\n<p>vous（法文：你们）——敬称：您（指代“tu”）</p>\n<p>вы（俄文：你们）——敬称：您（指代“ты”）</p>\n<p>朕（中文：我们）——尊称：我（指代“我”）</p>\n<p>简而言之，它们利用某一种人称代词的复数形式表示尊敬，或可称其为“尊严复数“（pluralis majestatis/royal we）。这种语言现象跨越了多个语系，但使用同一套逻辑来表达尊敬的效果</p>\n<p>以英语中的royal we为例，最为人们熟知的短语应当是维多利亚女王的”we are not amused“：这种表达习惯是以犹太教的三位一体教义为背景，传入英国后被亨利二世首次使用，以用we表示君权神授下的”上帝和我“，并以此彰显皇家地位。</p>\n<p>当说话人想不外加任何冗余的词汇而意图强调身份的区别时，最好的做法是将演讲者与受话人分割开——要么自居高位，要么抬举对方——这便产生了基于某种特征划分群体的需求。在以三位一体为信仰基础的文化中，说话人最常采取的策略便是依赖君权神授的解释，将自身与神权分为一类，并以此将自身与受话人所属群体分隔开，这一点不约而同地也被中文的语言环境所采用。</p>\n<p>这也引申出一个概念：对说话人或受话人的敬意并不起源于该人自身，而是对对方所属身份的敬意——随之而来的是距离感，即一种由原始的畏惧心理所引发的感受——我们不希望与利害者过近。</p>\n<p>这种距离感带来的隐喻同样可观：你不止是一个人，而是某个群体权威的代表。反之，将自身置于某种神圣地位上时，也是在宣告：违背我等于抵抗我们所有人的意志，这或许是作为群体动物的天生反射——依赖群体的幻想来维持自身的生存，同时也在敬畏存在于群体中的、更宏大的秩序。</p>";

				const frontmatter = {"title":"复数——基于群体的尊重","date":"2025-11-04 22:15:00 +0800","minutesRead":"3 min","words":587};
				const file = "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/pages/blog/blog2.md";
				const url = "/blog/blog2";
				function rawContent() {
					return "   \n                  \n                               \n   \n\n在对各种语言的敬语体系考察中，不难发现如下有趣的现象：\n\nwe（英文：我们）——尊称：我（指代“I”）\n\nvous（法文：你们）——敬称：您（指代“tu”）\n\nвы（俄文：你们）——敬称：您（指代“ты”）\n\n朕（中文：我们）——尊称：我（指代“我”）\n\n简而言之，它们利用某一种人称代词的复数形式表示尊敬，或可称其为“尊严复数“（pluralis majestatis/royal we）。这种语言现象跨越了多个语系，但使用同一套逻辑来表达尊敬的效果\n\n以英语中的royal we为例，最为人们熟知的短语应当是维多利亚女王的”we are not amused“：这种表达习惯是以犹太教的三位一体教义为背景，传入英国后被亨利二世首次使用，以用we表示君权神授下的”上帝和我“，并以此彰显皇家地位。\n\n当说话人想不外加任何冗余的词汇而意图强调身份的区别时，最好的做法是将演讲者与受话人分割开——要么自居高位，要么抬举对方——这便产生了基于某种特征划分群体的需求。在以三位一体为信仰基础的文化中，说话人最常采取的策略便是依赖君权神授的解释，将自身与神权分为一类，并以此将自身与受话人所属群体分隔开，这一点不约而同地也被中文的语言环境所采用。\n\n这也引申出一个概念：对说话人或受话人的敬意并不起源于该人自身，而是对对方所属身份的敬意——随之而来的是距离感，即一种由原始的畏惧心理所引发的感受——我们不希望与利害者过近。\n\n这种距离感带来的隐喻同样可观：你不止是一个人，而是某个群体权威的代表。反之，将自身置于某种神圣地位上时，也是在宣告：违背我等于抵抗我们所有人的意志，这或许是作为群体动物的天生反射——依赖群体的幻想来维持自身的生存，同时也在敬畏存在于群体中的、更宏大的秩序。";
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
