// Fetch data from API with try and catch
const pokemonSearch = async (pokemon) => {
    try{
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
       const pokeData = await res.json();
       // console.log(data);
        
     // create function to callback this function
     // Display pokemon details
       const pokeInfo = document.getElementById('pokemonInfo');

       pokeInfo.innerHTML = `
        <h2>${pokeData.name}</h2>
        <img src="${pokeData.sprites.front_default}" alt="${pokemon.name}">
        <h3>Abilities</h3>
        <ul>${pokeData.abilities.map(a => `<li>${a.ability.name}</li>`).join("")}
        </ul>
        <h3>Base Experience</h3>
        <p>${pokeData.base_experience}</p>

      
        <h3>Sounds:</h3>
        <audio src="${pokeData.cries.latest}" controls></audio>
        <audio src="${pokeData.cries.legacy}" controls></audio>
        `
 
    } catch{
        console.log(`Error fetching from API ${pokemon}`);
    }
   
}

// function to handle onSubmit
function handleSubmit(event) {
    event.preventDefault();

    // Get pokemon value log in console
    const pokemonInput = document.getElementById("pokemonInput").value
    console.log("https://pokeapi.co/api/v2/pokemon/", pokemonInput);
    pokemonSearch(pokemonInput);
}


// Function to callback 
function displayPokeInfo(pokeData, callback) {
    const pokeInfo = document.getElementById('pokemonInfo');
}
