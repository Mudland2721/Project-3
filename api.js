$(document).ready(function () {
  // function targeting the searchArtist button
  $("#artistSearch").on("click", function () {
    //console log to see if button works
    console.log("button clicked");

    const artistInput = $("#artistInput").val();

    if (artistInput != "") {
      const queryURL =
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistInput;

      var settings = {
        async: true,
        crossDomain: true,
        // url: "https://deezerdevs-deezer.p.rapidapi.com/search?q=2pac",
        url: queryURL,
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key":
            "d0b39321a7msha49b7aec705a8c7p18e760jsnf7d5b65d6c7c",
        },
      };

      $.ajax(settings).done(function (response) {
        console.log(queryURL);
        console.log(response);

        $(".artistName").text("Name" + response.data.artist.title);
        $(".topSongs").text("Songs" + response.title_short);
        $(".albumName").text("Album" + response.album);
      });
    } else {
      $("#error").html("Field is empty");
    }
  });
});
