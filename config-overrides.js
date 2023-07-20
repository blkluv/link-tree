const { override, addBabelPreset } = require('customize-cra');

module.exports = override(
  addBabelPreset('@babel/preset-react', {
    runtime: 'automatic',
    throwIfNamespace: false, // Add this line to bypass the JSX namespace tags warning
  })
);
