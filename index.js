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
                html(res, data);
                next();
            });
        },
        function hit(data){
            html(res, data);
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

var html = function(res, data) {
    var tweets = data.statuses,
        body = "<html><body><h1>AC/DC: AWS Cloud/DevOps Culture</h1><h2>Twitter results for #acdc</h2><ul style='list-style-type: none;'>%LIST%</ul></body></html>",
        list = [];

    tweets.forEach(function(tweet) {
        list.push(
            "<li style='line-height: 48px; border: 1px solid #000; margin-bottom: 10px;'>" +
                "<img src='" + tweet.user.profile_image_url + "' style='float: left; margin-right: 10px;'>" +
                "<span>" + tweet.text + "</span>" +
            "</li>"
        );
    });

    body = body.replace("%LIST%", list.join(""));

    res.writeHead(200, {
      "Content-Length": Buffer.byteLength(body),
      "Content-Type": "text/html"
    });
    res.write(body);
    res.end();
};

server.listen(8080, function() {
    console.log("AC/DC is up and running!");
});
