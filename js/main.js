var elList = document.querySelector("#pokemon_list")

var newPokemonsList = pokemons.slice(0, 52)

function renderPokemons(array, location) {
    elList.innerHTML = null

    for (var item of array) {
        // Put into <li> teg
        var newLi = document.createElement("li")
        newLi.classList.add("col-3", "mb-4", "list-item")
        
        // Put into <div> teg
        var  newDiv =  document.createElement("div")
        newDiv.setAttribute("class", "card pokemons-wrapper")
        
        // Put into <img> teg
        var newImg = document.createElement("img")
        newImg.setAttribute("src", `http://www.serebii.net/pokemongo/pokemon/${item.num}.png`)
        newImg.setAttribute("class", "card-img-top p-4 img-size ")
        newImg.setAttribute("alt", "Pakemon image")
        newImg.setAttribute("width", "200")
        
        var newWrapperDiv = document.createElement("DIV")
        newWrapperDiv.classList.add("text-center")
        
        var newHeading = document.createElement("h4")
        newHeading.textContent = item.name
        
        var newP = document.createElement("p")
        newP.setAttribute("class", "fs-5")
        newP.textContent = item.type
        
        var newP2 = document.createElement("p")
        
        newP2.setAttribute("class", "fs-5")
        newP2.textContent = item.weight

        var newP3 = document.createElement("p")
        newP3.textContent = item.height
        
        newWrapperDiv.appendChild(newHeading);
        newWrapperDiv.appendChild(newP);
        newWrapperDiv.appendChild(newP2);
        newWrapperDiv.appendChild(newP3);
        
        
        
        newDiv.appendChild(newImg);
        newDiv.appendChild(newWrapperDiv);
        
        newLi.appendChild(newDiv)
        
        location.appendChild(newLi)
    }
     
}

renderPokemons(newPokemonsList, elList)

