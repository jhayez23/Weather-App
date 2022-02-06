function getCityRequest(city) {
    var apiKey="4eee0bd954mshd1f16e4134e0360p11a373jsnfe9f419c6f50";

  var requestUrl = "https://https://rapidapi.com/community/api/open-weather-map?apiKey"+ apiKey+"&city=" + city;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
       console.log(data[i])
      }
    });
}
function getInput(city){
    let queryUrl = "https://https://rapidapi.com/community/api/open-weather-map?apiKey" + apiKey+ city;
}
function searchBtn(){

}
getCityRequest("chicago");