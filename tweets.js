window.onload = function() {
    main();
}

function main() {
    var color = "grey";
    var paper = Raphael(650, 100, 700, 700);
    var row = Math.sqrt(amitabh.length);
    var arr = [];
    s();
    bubble(row, row);

    function bubble(cols, rows) {
        var count = 0;
        var padding = 20;

        for (var i = 0; i < rows; i++) {

            y = padding + (i * padding)
            for (var j = 0; j < cols; j++) {
                count++;

                var x = 100 + padding + (j * padding);
                var r = amitabh[count].retweet_count / 70;

                if (arr[count].theme == "cinema")
                    color = "red";
                else if (arr[count].theme == "sport")
                    color = "pink";
                else if (arr[count].theme == "family")
                    color = "green";
                else if (arr[count].theme == "kbc")
                    color = "orange";
                else if (arr[count].theme == "india")
                    color = "lightblue";
                else if (arr[count].theme == "love")
                    color = "purple";

                var c = paper.circle(x, y, r)
                    .attr({
                        "fill": color,
                        "stroke": "none",
                        "cursor": "pointer",
                        "title": "@Amitabh Bachchan : " + amitabh[count].text
                    });
                console.log(arr[count].text);
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
            if (amitabh[i].text.match(/(cinema|trailer|song|movie|film)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "cinema"
                });
            else if (amitabh[i].text.match(/(sport|game|world cup|cricket|football|kabaddi|goal)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "sport"
                });
            else if (amitabh[i].text.match(/(family)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "family"
                });
            else if (amitabh[i].text.match(/kbc/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "kbc"
                });
            else if (amitabh[i].text.match(/india/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "india"
                });
            else if (amitabh[i].text.match(/(peace|happiness|love|fun|great|fantastic|wonderful|incredible|brilliant)/i))
                arr.push({
                    text: amitabh[i].text,
                    retweet_count: amitabh[i].retweet_count,
                    theme: "love"
                });
        }
        
    }
}