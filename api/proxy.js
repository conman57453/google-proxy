const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://www.google.com/"; // Changed to google.com
  
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/proxy/": "/",  // /proxy/search → google.com/search
    },
  })(req, res);
};

