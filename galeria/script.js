let caracteristicas = document.getElementById('caracteristicas')
let select = document.getElementById('nomes_personagens')
let card = document.getElementById('card')
let load = document.getElementById('load')
let data;
getPersonagens()
async function getPersonagens() {
    const Response = await fetch('https://swapi.dev/api/people/')
    data = await Response.json()
    load.style.display='none'; // Display none para o loading desaparecer depois de consumir o json
    card.style.display='flex'; //Display flex para o card aparecer assim que o await do response.json() for concluido (valor padrão ta display: none;)

}
function getPersonagem() {
    opcao = select.value
    caracteristicas.innerHTML = `<h3 style="margin: 10px 0px 5px; padding: 15px 30px; text-align:center;">${data.results[opcao].name}</h3> `
    caracteristicas.innerHTML += `<p>Massa: ${data.results[opcao].mass}</p> `
    caracteristicas.innerHTML += `<p>Cor de cabelo: ${data.results[opcao].hair_color}</p> `
    caracteristicas.innerHTML += `<p>Cor de pele: ${data.results[opcao].skin_color}</p> `
    caracteristicas.innerHTML += `<p>Cor dos olhos: ${data.results[opcao].eye_color}</p> `
    caracteristicas.innerHTML += `<p>Data de aniversario: ${data.results[opcao].birth_year}</p> `
    caracteristicas.innerHTML += `<p style="margin-bottom: 20px;">Sexo: ${data.results[opcao].gender}</p> `
}

