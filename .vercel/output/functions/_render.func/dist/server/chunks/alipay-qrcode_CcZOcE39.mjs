const alipay = new Proxy({"src":"/_astro/alipay-qrcode.DBYU6Uk3.jpg","width":464,"height":464,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/assets/alipay-qrcode.jpg";
							}
							
							return target[name];
						}
					});

export { alipay as default };
