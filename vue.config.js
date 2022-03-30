module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  productionSourceMap: false,
  devServer: {
    host: "183.128.185.33",
    open: true,
  },
};
