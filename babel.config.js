module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-typescript',
    ['@babel/plugin-transform-react-jsx'],
    '@babel/plugin-transform-runtime',
    'no-side-effect-class-properties',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    'babel-plugin-minify-dead-code-elimination',
  ],
};
