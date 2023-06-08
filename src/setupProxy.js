const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/User/create-user.php", {
      target: "http://localhost/Cellphones/api",
      changeOrigin: true,
    })
  );
};
