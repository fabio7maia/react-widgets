import path from "path";
import {} from "@craco/craco";

module.exports = {
  webpack: {
    configure: (
      webpackConfig: any,
      { env, paths }: { env: any; paths: any }
    ) => {
      return env === "production"
        ? {
            ...webpackConfig,
            output: {
              ...webpackConfig.output,
              path: __dirname + "/build/cdn/assets/[fullhash]",
              publicPath: "https://cdn.example.com/assets/[fullhash]/",
              filename: "react-widgets.js",
              // path: path.resolve(__dirname, "dist"),
              library: {
                type: "umd",
                name: "ReactWidgets",
              },
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
