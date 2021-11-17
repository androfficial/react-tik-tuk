const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@api':        'src/api',
    '@assets':     'src/assets',
    '@components': 'src/components',
    '@hoc':        'src/hoc',
    '@pages':      'src/pages',
    '@redux':      'src/redux',
    '@services':   'src/services',
    '@styles':     'src/styles',
  })(config);

  return config;
};