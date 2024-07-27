/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: true
});

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Add the ProvidePlugin configuration
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );

    return config;
  },
};

module.exports = withPWA(nextConfig);
