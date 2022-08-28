async function loadCountries() {
  let fetchPromise = new Promise((resolve, reject) => {
    let url = "https://api.openaq.org/v1/countries";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const countries = JSON.parse(xhttp.response).results;
        resolve(countries);
      }
    };
  });
  let countries = await fetchPromise;
  return countries;
}

function loadCountriesDiv() {
  let countriesPromise = loadCountries();
  countriesPromise.then((data) => {
    data = data.map((eachData) => eachData.name);
    console.log("Countries :- ", data);
    document.getElementById("countriesDiv").innerHTML = data;
  });
}
