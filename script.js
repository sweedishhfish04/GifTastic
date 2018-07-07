var topics = ["Arizona Cardinals 2018", "Atlanta Falcons 2018", "Baltmore Ravens 2018", "Buffalo Bills 2018", "Carolina Panthers 2018", "Chicago Bears 2018", "Cincinnati Bengals 2018", "Cleveland Browns 2018", "Dallas Cowboys 2018", "Denver Broncos 2018", "Detroit Lions 2018", "Green Bay Packers 2018", "Houston Texans 2018", "Indianapolis Colts 2018", "Jacksonville Jaguars 2018", "Kansas City Chiefs 2018", "Miami Dolphins 2018", "Minnesota Vikings 2018", "New England Patriots 2018", "New Orleans Saints 2018", "New York Giants 2018", "New York Jets - Butt Fumble", "Oakland Raiders Football", "Philadelphia Eagles 2018", "Pittsburgh Steelers 2018", "San Diego Chargers 2018", "San Francisco 49ers 2018", "Seattle Seahawks 2018", "St Louis Rams 2018", "Tampa Bay Buccaneers 2018", "Tennessee Titans 2018", "Washington Redskins 2018"];

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
            url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${topic}&limit=10`
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