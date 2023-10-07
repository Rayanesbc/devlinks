function toggleMode() {
  const body = document.body

  // if (body.classList.contains('light')){
  //   body.classList.remove('light')
  // } else {
  //   body.classList.add('light')
  // }

  body.classList.toggle("light")

  const image = document.querySelector("#profile img")

  if (body.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de sol e casaco preto, fundo gradiente roxo e azul."
    )
  } else {
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de grau e casaco preto, fundo gradiente roxo e azul."
    )
  }
}
