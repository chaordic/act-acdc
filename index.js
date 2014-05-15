var server = require("restify").createServer(),

    index = require("./lib/index");

server.get("/", index);

server.listen(8080, function() {
    console.log("AC/DC is up and running!");
});
