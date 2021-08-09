import { resolve as _resolve } from 'path';

export const mode = "development";
export const entry = "./src/main.ts";
export const output = {
  path: `${__dirname}/dist`,
  filename: "main.js"
};
export const module = {
  rules: [
    {
      test: /\.ts$/,
      use: "ts-loader",
      include: _resolve(__dirname, '../src')
    },
    {
      test: /\.styl$/,
      loaders: ["style-loader", "css-loader", "stylus-loader", {
        loader: 'vuetify-loader',
        options: {
          theme: _resolve(__dirname, '../src/stylus/'),
          url: true
        }
      }],
      include: _resolve(__dirname, '../src')
    }
  ]
};
export const resolve = {
  extensions: ['.vue', '.ts'],
  alias: {
    vue: "vue/dist/vue.js"
  }
};
export const target = ["web", "es5"];
