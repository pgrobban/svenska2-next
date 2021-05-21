module.exports = {
  future: {
    webpack5: true
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }]
                },
                titleProp: true
              }
            }
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
          }
        }
      ]
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: "/lessons",
        destination: "/lesson/before-you-start",
        permanent: true
      }
    ];
  },
  /* async rewrites() {
    return [
      {
        source: `/lesson/from-a-to-${encodeURIComponent('ö')}`,
        destination: '/lesson/from-a-to-o'
      }
    ]
  }*/
};
