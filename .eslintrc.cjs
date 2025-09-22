module.exports = {
  root: true, // ensures this config is the root one
  env: { 
    node: true, 
    es2022: true, 
    jest: true, 
    browser: true 
  },
  extends: ['eslint:recommended'], // use recommended base rules
  overrides: [
    {
      files: ['client/**/*.{js,jsx}'], 
      env: { browser: true }, // React runs in the browser
    },
    {
      files: ['server/**/*.js'],
      env: { node: true }, // API runs in Node
    }
  ]
};