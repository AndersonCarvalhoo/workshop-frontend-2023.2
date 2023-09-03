# workshop-frontend-2023.2
Deploy: https://starwars.anderson444.repl.co/
Este projeto foi baseado em STAR WARS 

A pagina index.html é a pagina de Curiosidades sobre star wars. Na primeira parte da pagina foi adicionado
um trailer via iframe que pode ser assistido e ao lado do iframe um pequeno resumo sobre o que é STAR WARS.
Na segunda parte foi adicionado um resumo sobre dois principais personagens que é o YODA e DARTH VADER.
Na terceira e ultima parte foi adicionado uma imagem apresentando a cronologia do STAR WARS
No header da index.html pode-se acessar a página GALERIA.

A pagina galeria é a pagina que está consumindo a api de star wars, nela você pode ir no card que aparece no meio da tela, selecionar qual personagem você quer receber as informações e quando selecionado a api vai retornar em tempo real as informações 

COMO FOI A LÓGICA?
Teve que adicionar uma função async para que possa usar o await, essa função assim que 
a página é carregada ela consome a api, e como geralmente o fetch com await demora
eu coloquei um loading pra ficar rodando antes do fetch, e depois do fetch removi o loading e exibi o card(que por padrão estava display: none; para que só fosse exibido dps que o fetch fosse carregado, usando display: flex;.)
Depois que o card aparece ele fica estático, então eu criei uma função que é acionada pelo evento onchange,
(aciona quando o usuário muda o select para algum personagem) sempre que essa função é acionada ela pega o valor
do atual option que é de 0 adiante, facilitando a busca de dados da api pelo índice e então se o value for 0
ele vai pegar o primeiro indice de results e exibir todas as características conforme digitado.


