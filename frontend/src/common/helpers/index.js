export const getImage = (image) => {
  // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
  return new URL(`../../assets/img/${image}`, import.meta.url).href;
};

export const getPublicImage = (path) => {
  const publicUrl = "/api";
  const divider = path.startsWith("/") ? "" : "/";
  return [publicUrl, path].join(divider);
};
