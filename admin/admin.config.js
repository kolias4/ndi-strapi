module.exports = {
  webpack: (config, webpack) => {
    // Add your variable using the DefinePlugin
    config.plugins.push(
      new webpack.DefinePlugin({
        test:JSON.stringify(process.env.test),
        strapi_url:JSON.stringify(process.env.STRAPI_URL)
      })
    );

    return config;
  },
};
