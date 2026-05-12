const avatar = new Proxy({"src":"/_astro/avatar.g4D3QZBA.png","width":1370,"height":1370,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/assets/avatar.png";
							}
							
							return target[name];
						}
					});

export { avatar as default };
