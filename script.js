var topics = ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers", "San Diego Chargers", "San Francisco 49ers", "Seattle Seahawks", "St. Louis Rams", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"];

const apiKey = "Me6MDcUD9yDO5seeuDQJMVLbwGCw5ZlZ"

topics.forEach(function (topic) {
    addButton(topic)
})

function addButton(topic) {
    var id = topic.split(' ').join('');
    $("#topics").append('<button id="' + id + '" type="button">' + topic + '</button>')
    $("#" + id).click(function () {
        $("#images").html('')
        $.ajax({
            url: `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${topic}&limit=10`
        }).done(function (response) {
            console.log(response)
            response.data.forEach(function (gif) {
                var id = gif.id
                var stillUrl = gif.images.fixed_height_still.url
                var gifUrl = gif.images.fixed_height.url
                $("#images").append('<div class="img"> <img id="' + id + '" src="' + stillUrl + '"> <p>' + gif.rating.toUpperCase() + '</p></div>')

                $("#" + id).click(function () {
                    if ($("#" + id).attr('src') === stillUrl) {
                        $("#" + id).attr('src', gifUrl)
                    } else {
                        $("#" + id).attr('src', stillUrl)
                    }
                })
            })
        });
    })
}
$("#submit").click(function (){
    console.log($("#newButton").val())
    if ($("#newButton").val()){
        addButton($("#newButton").val())
    }
})