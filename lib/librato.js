var libratoAuth = require("../libratoAuth"),
    libratoClient = require("librato-metrics").createClient({
        email: libratoAuth.email,
        token: libratoAuth.token
    }),
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
                value: localGauges[metric]
            }]
        };

        libratoClient.post("/metrics", payload);
    });
}, 60 * 1000);

module.exports = librato;
