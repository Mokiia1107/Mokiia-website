const thumbnail = new Proxy({"src":"/_astro/thumbnail.1GZ294Dz.jpg","width":2048,"height":1152,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/blog/improve-concentration/thumbnail.jpg";
							}
							
							return target[name];
						}
					});

export { thumbnail as default };
