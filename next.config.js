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
