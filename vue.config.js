module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://127.0.0.1:3002/",
        ws: false,
        changeOrigin: true,
      },
    },
  },
};
