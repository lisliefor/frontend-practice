const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  configureWebpack: {
    entry: {
      "editor.worker.bundle": "monaco-editor/esm/vs/editor/editor.worker.js",
      "json.worker.bundle": "monaco-editor/esm/vs/language/json/json.worker",
      "css.worker.bundle": "monaco-editor/esm/vs/language/css/css.worker",
      "html.worker.bundle": "monaco-editor/esm/vs/language/html/html.worker",
      "ts.worker.bundle": "monaco-editor/esm/vs/language/typescript/ts.worker"
    }
  },
  configureWebpack: {
    plugins: [new MonacoWebpackPlugin()]
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  }
};
