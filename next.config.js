module.exports = {
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

  async rewrites() {
    return [
      {
        source: "/lessons",
        destination: "/lesson/before-you-start"
      },
      {
        source: "/bites",
        destination: "/bite/about-bites"
      }
    ];
  }
};
