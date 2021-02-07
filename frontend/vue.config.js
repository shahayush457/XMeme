const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../backend/view"),
  devServer: {
    proxy: {
      "/memes": {
        target: "http://localhost:8081"
      }
    }
  }
};
