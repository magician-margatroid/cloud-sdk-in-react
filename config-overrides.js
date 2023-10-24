const { ProvidePlugin } = require('webpack');

module.exports = function override(config, env) {
  Error.stackTraceLimit = 256;
  config.ignoreWarnings = [/Failed to parse source map/];
  config.resolve.alias = {
    https: 'agent-base',
    http: 'agent-base'
  };
  config.resolve.fallback = {
    os: false,
    url: false,
    https: false,
    http: false,
    fs: false,
    path: false,
    assert: false,
    zlib: false,
    tls: false,
    net: false,
    constants: false,
    util: require.resolve('util'),
    process: require.resolve('process/browser'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer'),
    console: require.resolve('console-browserify'),
    crypto: require.resolve('crypto-browserify'),
    https: require.resolve('https-browserify')
  };
  config.plugins = [
    ...config.plugins,
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    }),
    new ProvidePlugin({
      process: 'process/browser'
    })
  ];

  return config;
};