module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  productionSourceMap: false,
  devServer: {
    host: "192.168.0.111",
    open: true,
  },
};
