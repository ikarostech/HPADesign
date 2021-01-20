const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias['@'] = path.resolve(__dirname, "../src"),
  config.module.rules.push({
    test: /\.styl$/,
    loaders: ["style-loader", "css-loader", "stylus-loader",{
      loader: 'vuetify-loader',
      options: {
        theme: path.resolve(__dirname, '../src/stylus/'),
        url: true
      }
    }],
    include: path.resolve(__dirname, '../src')
  });
  return config;
};
