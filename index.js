console.log(`clicked`)

$(document).ready(function() {

  $("#content").on("click", function() {



var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "275a6c5fffmsh711f746bb800438p1d1e58jsn706ac0b57c24"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

});









// $(document).ready(function() {

// const API_KEY = "275a6c5fffmsh711f746bb800438p1d1e58jsn706ac0b57c24";

// $("#content").ready(function () {
//   $.ajax({
//     url: "https://deezerdevs-deezer.p.rapidapi.com/search",
//     type: "GET",
//     success: function (res) {
//       console.log(res);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// });

// });

/// in search bar i need to select which kind of search they are looking for ie ====> song, artist, and album

// maybe do an onclick for whatever they select grab that id and on click call a function that only searches for something specific

})
