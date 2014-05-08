var restify = require("restify"),
    server = restify.createServer(),

    twitterAuth,
    twitter;

try {
    twitterAuth = require("./twitterAuth");
} catch(e) {
    console.error(e);
    console.error("[ERROR] Please see README.me for troubleshooting");
    process.exit(1);
}

twitter = new require("twitter")(twitterAuth);

server.get("/", function(req, res, next) {
    twitter.search("#acdc", function(data) {
        res.send(data);
        next();
    });
});

server.listen(8080, function() {
    console.log("AC/DC is up and running!");
});
