window.onload = function() {
    main();
}

function main() {
    var color = "grey";
    var paper = Raphael(750, 150, 700, 700);
    console.log(amitabh.length);
    var row = Math.sqrt(700);
    var arr = [];
    s();
    bubble(row, row);

    function bubble(cols, rows, arr_name) {
        var count = 0;
        var radius = 5;
        var diameter = 2 * radius;
        var padding = 5;

        for (var i = 0; i < rows; i++) {

            cy = padding + (i * (diameter + padding))
            for (var j = 0; j < cols; j++) {
                count++;

                var cx = 50 + padding + (j * (diameter + padding));
                var r = amitabh[count].retweet_count / 70;

                if (arr[i].theme == "cinema")
                    color = "red";
                else if (arr[i].theme == "sport")
                    color = "pink";
                else if (arr[i].theme == "family")
                    color = "green";
                else if (arr[i].theme == "kbc")
                    color = "orange";
                else if (arr[i].theme == "india")
                    color = "lightblue";
                else if (arr[i].theme == "love")
                    color = "purple";

                var c = paper.circle(cx, cy, r)
                    .attr({
                        fill: color,
                        "stroke": "none",
                        "cursor": "pointer",
                        "title": "@Amitabh Bachchan : " + amitabh[count].text
                    });
            }
        }
    }

    var main_circle = paper.circle(250, 200, 200);
    paper.text(100, 100);

    function s() {

        for (i = 0; i < amitabh.length; i++) {
            var s = amitabh[i].text;
            arr.push({
                text: s,
                retweet_count: amitabh[i].retweet_count
            });
        }
        //console.log(arr);

        var cinema = [];
        for (i = 0; i < amitabh.length; i++) {
            if (amitabh[i].text.match(/(movie|film|trailer|song)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "cinema"
                });
        }
        //console.log(cinema);

        var sport = [];
        for (i = 0; i < amitabh.length; i++) {
            if (amitabh[i].text.match(/(world cup|cricket|kabaddi|football|goal|game)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "sport"
                });
        }
        //console.log(sport);

        var family = [];
        for (i = 0; i < amitabh.length; i++) {
            if (amitabh[i].text.match(/(family)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "family"
                });
        }
        //console.log(family);

        var kbc = [];
        for (i = 0; i < amitabh.length; i++) {
            if (amitabh[i].text.match(/kbc/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "kbc"
                });
        }
        //console.log(kbc);

        var india = [];
        for (i = 0; i < amitabh.length; i++) {
            if (amitabh[i].text.match(/india/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "india"
                });
        }
        //console.log(india);
        var love = [];
        for (i = 0; i < amitabh.length; i++) {
            if (amitabh[i].text.match(/(peace|happiness|love|fun|great|fantastic|wonderful|incredible|brilliant)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "love"
                });
        }
        for (i = 0; i < arr.length; i++) {
            if (arr[i].theme == "cinema") {
                console.log(arr[i]);
            } else if (arr[i].theme == "sport") {
                console.log(arr[i]);
            } else if (arr[i].theme == "family") {
                console.log(arr[i]);
            } else if (arr[i].theme == "kbc") {
                console.log(arr[i]);
            } else if (arr[i].theme == "india") {
                console.log(arr[i]);
            } else if (arr[i].theme == "love") {
                console.log(arr[i]);
            }
        }
    }
}