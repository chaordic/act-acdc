var restify = require("restify"),
    server = restify.createServer(),

    twitterAuth,
    twitter,

    redis = require("redis").createClient();

try {
    twitterAuth = require("./twitterAuth");
} catch(e) {
    console.error(e);
    console.error("[ERROR] Please see README.me for troubleshooting");
    process.exit(1);
}

twitter = new require("twitter")(twitterAuth);

server.get("/", function(req, res, next) {
    var term = "#acdc",
        key = "twitter-search-" + term;

    cache.get(key,
        function miss(){
            twitter.search(term, function(data) {
                cache.set(key, data);
                res.send(data);
                next();
            });
        },
        function hit(data){
            res.send(data);
            next();
        });
});

var cache = {
    get: function(key, miss, hit) {
        redis.get(key, function(err, data) {
            if (err || !data) {
                miss();
            } else {
                hit(JSON.parse(data));
            }
        });
    },
    set: function(key, data) {
        redis.
            multi().
            set(key, JSON.stringify(data)).
            pexpire(key, 300000).
            exec();
    }
};

server.listen(8080, function() {
    console.log("AC/DC is up and running!");
});
