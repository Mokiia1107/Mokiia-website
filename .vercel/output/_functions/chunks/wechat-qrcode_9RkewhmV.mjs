const wechat = new Proxy({"src":"/_astro/wechat-qrcode.Bo1fqqCV.jpg","width":464,"height":464,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/assets/wechat-qrcode.jpg";
							}
							
							return target[name];
						}
					});

export { wechat as default };
