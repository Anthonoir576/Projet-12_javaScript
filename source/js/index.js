// Variable / Constante / fonction
const searchInput = document.getElementById('search');
const results = document.getElementById('results');


let countries;
let searchTerm = '';


// Espace dans les nombres tous les trois chiffres
function numberSpace(x) {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

}


// API REQUEST 
const fetchCountries = async() => {

    countries = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;population;flag').then(res => res.json());

};

// Mappage
const showCountries = async() => {

    await fetchCountries();

    results.innerHTML = (

        countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()
        ))
        .map(country => (

            `
                <li class="country-item">
                    <img class="country-flag" src="${country.flag}" />
                    <h3 class="country-name">${country.name}</h3>
                    <div class="country-info">
                        <h2 class""country-population>${numberSpace(country.population)}</h2>
                        <h5>Habitants</h5>
                    </div>
                </li>
            `

        )).join('')

    );
};

showCountries();


// INPUT SETUP
searchInput.addEventListener('input', (e) => {

    // valeur de la saisi 
    searchTerm = e.target.value;

    // on relance la fonction pour chaque lettre tappé
    showCountries();
    
});


