let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json())
        .then((data) => {
            let country = data[0];
            console.log(country);
            console.log(country.capital[0]);
            console.log(country.flags.svg);
            console.log(country.name.common);
            console.log(country.continents[0]);
            console.log(Object.keys(country.currencies)[0]);
            console.log(country.currencies[Object.keys(country.currencies)[0]].name);
            console.log(Object.values(country.languages).toString().split(",").join(", "));

            document.getElementById("result").innerHTML = `
                <img src="${country.flags.svg}" class="flag-img">
                <h2>${country.name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital: </h4>
                        <span>${country.capital[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent: </h4>
                        <span>${country.continents[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population: </h4>
                        <span>${country.population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency: </h4>
                        <span>${country.currencies[Object.keys(country.currencies)[0]].name} - ${Object.keys(country.currencies)[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Languages: </h4>
                        <span>${Object.values(country.languages).toString().split(",").join(", ")}</span>
                    </div>
                </div>
            `;
        })
        .catch(() => {
            if (countryName.length === 0) {
                document.getElementById("result").innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                document.getElementById("result").innerHTML = `<h3>Please enter a valid country name</h3>`;
            }
        });
});
