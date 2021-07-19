// Variable / Constante
const searchInput = document.getElementById('search');
const results = document.getElementById('results');


let countries;
let searchTerm = '';

// API REQUEST 

const fetchCountries = async() => {

    countries = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;population;flag').then(res => res.json());

        console.log(countries);

};

