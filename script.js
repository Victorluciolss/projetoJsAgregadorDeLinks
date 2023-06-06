function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // !!! Pode ser feita com uma condicional igual a baixo mas pode usar a função toggle que faz a mesma coisa que é mudar o fundo do document.
  //if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}

  // Para trocar a img do document segue os passo a baixo.

  // Pegar a img
  const img = document.querySelector("#profile img")

  // substituor a img
  if (html.classList.contains("light")) {
    // se tiver light mode , adiciona a img avatar-dark
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute("alt", "Foto de nuvens de cor laranja devido aos raios de sol")
  } else {
    // se tiver sem light mode , manter a img avatar-light
    img.setAttribute("src", "./assets/avatar-dark.jpg")
  }
}
