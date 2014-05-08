var restify = require("restify"),
    server = restify.createServer();

server.get("/", function(req, res, next) {
    res.send("My wife says I'm the only one");
    next();
});

server.listen(8080, function() {
    console.log("AC/DC is up and running!");
});
