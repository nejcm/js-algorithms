module.exports = {
  '*.(js|ts)': ['eslint', 'jest --findRelatedTests'],
  '*.+(js|jsx|ts|tsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
};
