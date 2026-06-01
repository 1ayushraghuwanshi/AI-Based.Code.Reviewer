export default [
  {
    files: ['**/*.js'], //only check .js files in server derectory
    rules: {
      semi: 'error', //force semicolons
      'no-unused-vars': 'warn', // warf in unused variables are present
    },
  },
];
