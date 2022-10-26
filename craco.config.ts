import packageJson from "./package.json";

module.exports = {
  webpack: {
    configure: (
      webpackConfig: any,
      { env, paths }: { env: any; paths: any }
    ) => {
      return env === "production"
        ? {
            ...webpackConfig,
            devtool: undefined,
            output: {
              path:
                __dirname + `/fakecdn/assets/${packageJson.version}-[fullhash]`,
              publicPath: `https://fabio7maia.github.io/react-widgets/fakecdn/assets/${packageJson.version}-[fullhash]/`,
              filename: "static/js/[name].[contenthash:8].js",
              // path: path.resolve(__dirname, "dist"),
              library: {
                type: "umd",
                name: "ReactWidgets",
              },
              clean: true,
            },
            externals: {
              react: "React", // Case matters here
              "react-dom/client": "ReactDOM", // Case matters here
            },
          }
        : webpackConfig;
    },
  },
};
