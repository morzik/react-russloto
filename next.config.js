const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const env = process.env.NODE_ENV;
const path = require('path')
const dev = env !== "production";

module.exports = withBundleAnalyzer({
    experimental: {
        basePath: dev ? "" : "/2020/200620",
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    assetPrefix: ".",
    sassOptions: {
        includePaths: path.join(__dirname, '../'),
    },
});

