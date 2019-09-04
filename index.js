const url = "https://pokeapi.co/api/v2/pokemon/"


fetch(url)
.then(response => response.json())
.then(result => {
    // console.log(result)
    iteratePokemon(result)
})

//a header with name
//an image with sprite image
//list with abilities



function iteratePokemon(response){
    const pokemons = response.results
    pokemons.forEach(pokemon => {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonObj => {
            createPokemonCard(pokemonObj)
        })
    })
}

function createPokemonCard(pokemon){
    let div = document.createElement('div')

    const name = document.createElement('h1')
        name.textContent = pokemon.name

    const image = document.createElement('img')
        image.src = pokemon.sprites.front_shiny

    const abilitiesList = document.createElement('ul')
        pokemon.abilities.forEach(abilityObj => {
            let li = document.createElement('li')
            li.textContent = abilityObj.ability.name
            abilitiesList.appendChild(li)
        })
    
    div.append(name, image, abilitiesList)
    
    document.body.appendChild(div)
}