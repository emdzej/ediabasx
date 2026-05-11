module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", "node_modules", ".turbo"],
  rules: {
    // Allow `_`-prefixed args and bindings to mark intentionally-unused
    // parameters/captures — common when implementing an interface that
    // requires a positional arg the concrete subclass doesn't need
    // (e.g. WebSerialTransport.open(_port) where the port is supplied
    // at construction-time for browser consumers).
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_"
      }
    ],
    // The base rule doesn't understand TypeScript-only syntax; defer
    // entirely to the @typescript-eslint version above.
    "no-unused-vars": "off"
  }
};
