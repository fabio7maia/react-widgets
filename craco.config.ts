// import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import packageJson from "./package.json";

const basePublicPath =
  "https://fabio7maia.github.io/react-widgets/fakecdn/assets/";

module.exports = {
  webpack: {
    configure: (
      webpackConfig: any,
      { env, paths }: { env: any; paths: any }
    ) => {
      // const plugins = webpackConfig.plugins;

      return env === "production"
        ? {
            ...webpackConfig,
            devtool: undefined,
            output: {
              path:
                __dirname + `/fakecdn/assets/${packageJson.version}-[fullhash]`,
              publicPath: `${basePublicPath}${packageJson.version}-[fullhash]/`,
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
            // plugins: [
            //   ...plugins,
            //   new WebpackManifestPlugin({
            //     fileName: "asset-manifest-peerDependencies.json",
            //     generate: (seed, files, entrypoints) => {
            //       const manifestFiles = files.filter(
            //         (x) => x.isChunk || x.isModuleAsset
            //       );

            //       const writeFiles: Record<string, string> = {};

            //       manifestFiles.forEach((x) => {
            //         const index = x.path.indexOf("/static/");

            //         writeFiles[x.name] = x.path.substring(index);
            //       });

            //       return {
            //         files: writeFiles,
            //         entrypoints: entrypoints.main,
            //         peerDependencies: packageJson.peerDependencies,
            //       };
            //     },
            //   }),
            // ],
          }
        : webpackConfig;
    },
  },
};
