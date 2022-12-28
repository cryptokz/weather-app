let searchInput = $(".search-input")
let searchBtn = $(".search-btn");

searchBtn.click(() => {
	let city = searchInput.val();
	if(city.length > 1){
		$.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=56d8b9f0012abd35fb43c17861569aa7`,
      (res) => {
        if (res && res.length) {
          let lat = res[0].lat;
          let lon = res[0].lon;
          $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=56d8b9f0012abd35fb43c17861569aa7&units=metric`,
            (data) => {
              console.log(data);
              $(".result").html(
                `<h4>${data?.weather[0]?.main}</h4><h2>${data?.main?.temp} C</h2> <h3>Wind: ${data?.wind?.speed} km/s</h3>`);
            });
        }
      }
    );}
})

