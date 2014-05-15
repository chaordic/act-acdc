var cache = require("./cache"),
    librato = require("./librato"),
    twitter = require("./twitter"),
    html = require("./html");

var index = function(req, res, next) {
    var term = "#acdc",
        key = "twitter-search-" + term;

    librato.increment("act-acdc.throughput");

    cache.get(key,
        function miss(){
            librato.increment("act-acdc.cache.miss");

            twitter.search(term, function(data) {
                cache.set(key, data);
                html(res, data);
                next();
            });
        },
        function hit(data){
            librato.increment("act-acdc.cache.hit");

            html(res, data);
            next();
        });
};

module.exports = index;
