var express = require( "express" );
var serveStatic = require( "serve-static" );
var appRouter = require( "../server/api" );

module.exports = function(options) {
    const app = express();
    const PORT = options.PORT || 8081;

    app.use(serveStatic(__dirname + "/build"));
    appRouter(app);

    app.listen(PORT);

    console.log( "Started API Server on port: " + PORT );
};
