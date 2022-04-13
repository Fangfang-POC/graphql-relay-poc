module.exports = {
  "plugins": [
    "relay",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
  ],
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        corejs: 3,
        modules: false,
        useBuiltIns: "usage",
      },
    ],
    "@babel/preset-typescript",
  ]
}