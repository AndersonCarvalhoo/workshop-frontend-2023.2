let caracteristicas = document.getElementById('caracteristicas')
let texto = document.getElementById('nomes_personagens')
let select = document.getElementById('selecionar_personagens')
let card = document.getElementById('card')
let load = document.getElementById('load')
let data;
function getPersonagemInput() {
    dadosPersonagem(texto.value)
    load.style.display='block'
    caracteristicas.innerHTML = '' // usado para quando mudar a opção de personagem sumir as caracteristicas do antigo
}
function getPersonagemSelected() {
    dadosPersonagem(select.value)
    load.style.display='block'
    caracteristicas.innerHTML = ''
}
async function dadosPersonagem(opcao){
    const response = await fetch('https://swapi.dev/api/people/?search='+opcao)
    data = await response.json()
    load.style.display='none'
    caracteristicas.innerHTML = `<h3 style="margin: 10px 0px 5px; padding: 15px 30px; text-align:center;">${data.results[0].name}</h3> `
    caracteristicas.innerHTML += `<p>Massa: ${data.results[0].mass}</p> `
    caracteristicas.innerHTML += `<p>Cor de cabelo: ${data.results[0].hair_color}</p> `
    caracteristicas.innerHTML += `<p>Cor de pele: ${data.results[0].skin_color}</p> `
    caracteristicas.innerHTML += `<p>Cor dos olhos: ${data.results[0].eye_color}</p> `
    caracteristicas.innerHTML += `<p>Data de aniversario: ${data.results[0].birth_year}</p> `
    caracteristicas.innerHTML += `<p style="margin-bottom: 20px;">Sexo: ${data.results[0].gender}</p> `
}