import { e as getImage$1 } from './_astro_assets_DntDX2KG.mjs';
import './entrypoint_DG8tOUKX.mjs';

const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"@astrojs/vercel/build-image-service","config":{"sizes":[640,750,828,1080,1200,1920,2048,3840],"domains":[],"remotePatterns":[{"protocol":"https"}]}},"domains":[],"remotePatterns":[{"protocol":"https"}],"responsiveStyles":true,"breakpoints":[640,750,828,1080,1200,1920,2048,3840]};
								Object.defineProperty(imageConfig, 'assetQueryParams', {
									value: undefined,
									enumerable: false,
									configurable: true,
								});
								const getImage = async (options) => await getImage$1(options, imageConfig);

export { getImage, imageConfig };
