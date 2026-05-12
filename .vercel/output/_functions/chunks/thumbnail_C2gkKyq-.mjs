const thumbnail = new Proxy({"src":"/_astro/thumbnail.DzZDiYKA.jpg","width":1024,"height":576,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mokiia1107/Documents/GitHub/Mokiia-website/src/content/blog/3d-rendering/thumbnail.jpg";
							}
							
							return target[name];
						}
					});

export { thumbnail as default };
