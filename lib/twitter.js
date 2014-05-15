var config = require("../config"),
    twitter = new require("twitter")(config.twitter);

module.exports = twitter;
