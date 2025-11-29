function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  html.classList.toggle('light')

  // pegar a tag img 
  const img = document.querySelector("#profile img")
  // e substituir a imagem
  if(html.classList.contains('light')) {
  //se tiver com light mode manter a imagem normal, caso contrário colocar a segunda imagem
  img.setAttribute('src','./assets/foto2.jpg')
  img.setAttribute('alt','Foto modo Light')
} else {
  img.setAttribute('src','./assets/foto_.jpg')
  img.setAttribute('alt','Foto modo Dark')
  }
}