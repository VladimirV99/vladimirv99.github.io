module.exports = {
  reactStrictMode: true,
  assetPrefix: '/',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' }
    };
  }
};
