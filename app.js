

async function pesquisarTime(){
  const timeEscolhido = document.getElementById('timeEscolhido').value;
  const name = document.getElementById('nameTime');
  const country  = document.getElementById('country');
  const founded = document.getElementById('founded');
  const img = document.getElementById('escudo');

  let section = document.getElementById("resultados-pesquisa");


  const response = await getTeams(timeEscolhido);
  dados = response.response

  console.log('Imprimindo resposta')
  console.log(dados)
  /*
  nome = response.response[0].team.name
  fundacao = response.response[0].team.founded
  pais = response.response[0].team.country
  imagem = response.response[0].team.logo

  name.innerText = nome;
  country.innerText = `País: ${pais}`;
  founded.innerText = `Fundação: ${fundacao}`;

  img.innerHTML = logo;
  */
  // Inicializa uma string vazia para armazenar os resultados
  let resultado = "";
  if (response.results == 0){
    resultado += `
    <div class="item-resultado">
        <div class="time">
            <h2>
                Time não encontrado.
            </h2>
            <p class="descricao-meta" id="country">Verifique se você digitou o título corremente e tente novamente.</p>
            <img src="" alt="">
        </div>
    </div>   `;
  }
  // para cada dado dentro da lista de dados
  for (let dado of dados) {
      resultado += `
              <div class="item-resultado">
                  <div class="time">
                      <h2>
                          <a href="#" target="_blank" >${dado.team.name}</a>
                      </h2>
                      <img src=${dado.team.logo} alt="">
                      <p class="descricao-meta" id="country">País: ${dado.team.country}</p>
                      <p class="descricao-meta" id="founded">Fundação: ${dado.team.founded}</p>
                      <h4>Estádio: ${dado.venue.name}</h4>
                      
                      <p> Cidade : ${dado.venue.name} Endereço: ${dado.venue.address} </p>
                      <p>Capacidade: ${dado.venue.capacity}</p>
                      <img src=${dado.venue.image} alt="">
                  </div>
              </div>   `;
      }
console.log(resultado)      
// Atribui os resultados gerados à seção HTML
section.innerHTML = resultado;

};
