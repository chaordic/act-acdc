var server = require("restify").createServer(),

    index = require("./lib/index"),
    librato = require("./lib/librato");

server.pre(function(req, res, next) {
    req.actAcdc = {
        startTime: new Date().getTime()
    };

    next();
});

server.get("/", index);

server.on("after", function(req) {
    var elapsedTime = new Date().getTime() - req.actAcdc.startTime;

    librato.increment("act-acdc.request.time", elapsedTime);
    librato.increment("act-acdc.request.count");
});

server.listen(8080, function() {
    console.log("AC/DC is up and running!");
});
