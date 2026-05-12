import { b as createGetCollection } from './runtime_BtSO5LLC.mjs';

// astro-head-inject

const liveCollections = {};

const getCollection = createGetCollection({
	liveCollections,
});

async function getBlogCollection(contentType = "blog") {
  return await getCollection(contentType, ({ data }) => {
    return !data.draft ;
  });
}
function sortMDByDate(collections) {
  return collections.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate ?? 0).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate ?? 0).valueOf();
    return bDate - aDate;
  });
}
function getAllTags(collections) {
  return collections.flatMap((collection) => [...collection.data.tags]);
}
function getUniqueTagsWithCount(collections) {
  return [
    ...getAllTags(collections).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      /* @__PURE__ */ new Map()
    )
  ].sort((a, b) => b[1] - a[1]);
}

export { getUniqueTagsWithCount as a, getBlogCollection as g, sortMDByDate as s };
