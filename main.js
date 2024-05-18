const img = document.querySelector(".img1")
const titulo = document.querySelector('.titulo')
const subtitulo = document.querySelector('.subtitulo')
const bio = document.querySelector(".bio")
const qtseguidores = document.querySelector(".qtdseguem")
const qtdsigoeu = document.querySelector(".qtdsigo")
const qtdrepositorios = document.querySelector(".qtdrepos")

const url = 'https://api.github.com/users/Mari171803'
const getData = async() =>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data) 

    img.setAttribute('src', data.avatar_url)
    titulo.innerHTML = data.name
    subtitulo.innerHTML = data.login
    qtseguidores.innerHTML = data.followers
    qtdsigoeu.innerHTML = data.following
    qtdrepositorios.innerHTML = data.public_repos
} 
getData()
 