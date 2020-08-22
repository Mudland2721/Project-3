const API_KEY = "275a6c5fffmsh711f746bb800438p1d1e58jsn706ac0b57c24";

$("#content").ready(function () {
  $.ajax({
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    type: "GET",
    success: function (res) {
      console.log(res);
    },
    error: function (error) {
      console.log(error);
    },
  });
});
/// in search bar i need to select which kind of search they are looking for ie ====> song, artist, and album

// maybe do an onclick for whatever they select grab that id and on click call a function that only searches for something specific
