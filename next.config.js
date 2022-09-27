const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/Mc-JAM.github.io/' : '',
  images: {
    unoptimized: true,
  },
}