var config = require("../config"),
    libratoClient = require("librato-metrics").createClient(config.librato),
    hostname = require("os").hostname(),

    gauges = {};

var librato = {
    increment: function(metric, value) {
        gauges[metric] = gauges[metric] || 0;
        gauges[metric] += value || 1;
    }
};

setInterval(function() {
    var localGauges = gauges;

    gauges = {};

    Object.keys(localGauges).forEach(function(metric) {
        var payload = {
            gauges: [{
                name: metric,
                value: localGauges[metric],
                source: hostname
            }]
        };

        libratoClient.post("/metrics", payload, function() {});
    });

}, 60 * 1000);

module.exports = librato;
