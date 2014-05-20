var html = function(res, data) {
    var tweets = data.statuses || [],
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

module.exports = html;
