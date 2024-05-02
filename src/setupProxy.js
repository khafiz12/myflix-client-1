const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        "/login", 
        createProxyMiddleware({
       target: "https://top-movies-flix-0061641eb1b3.herokuapp.com",
       changeOrigin: true, 
     })
   );
};