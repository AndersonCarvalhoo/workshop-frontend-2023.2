# workshop-frontend-2023.2
Deploy: https://starwars.anderson444.repl.co/
Este projeto foi baseado em STAR WARS 

A pagina index.html é a pagina de Curiosidades sobre star wars. Na primeira parte da pagina foi adicionado
um trailer via iframe que pode ser assistido e ao lado do iframe um pequeno resumo sobre o que é STAR WARS.
Na segunda parte foi adicionado um resumo sobre dois principais personagens que é o YODA e DARTH VADER.
Na terceira e ultima parte foi adicionado uma imagem apresentando a cronologia do STAR WARS
No header da index.html pode-se acessar a página GALERIA.

A pagina galeria é a pagina que está consumindo a api de star wars, nela você pode ir no card que aparece no meio da tela, selecionar ou digitar qual personagem você quer receber as informações e quando realizado a api vai retornar em tempo real as informações 

COMO FOI A LÓGICA?
Teve que ser adicionado uma função async para que possa usar o await, essa função é acionada assim que o usuario enviar o input ou alternar o selected(eventos onchange e onclick), enviando como parâmetro o valor do texto e input. Esses valores que são enviados como parâmetro foi usado no fetch da api para buscar o personagem de acordo com os valores digitados, e como geralmente o fetch com await demora foi colocado um loading pra ficar rodando antes do fetch, e depois do fetch ser realizado o loading é removido com display none e as informações do personagem são adicionadas 'https://swapi.dev/api/people/?search='+opcao. pelo ?search=personagem, caso o valor do usuario seja digitado errado a api retorna o personagem mais proximo. 


