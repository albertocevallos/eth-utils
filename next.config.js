const withImages = require('next-images')

// module.exports = withImages({
//   images: {
//     domains: [process.env.NEXT_PUBLIC_TOKEN_IMAGES_S3_DOMAIN],
//   },
// })

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/unit',
        permanent: true,
      },
    ]
  },
}
