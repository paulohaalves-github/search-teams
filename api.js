/*
const getTeams = (name) => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '345262d555add75f5c2f999bf32c3f78',
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    };
    
    const result = fetch(`https://v3.football.api-sports.io/teams?name=${name}`, options)
    .then((response) => response.json())
    .then((dados) => {
      return dados;
    })
    .catch(err => console.error(err));

    console.log(result)
    return result
}
*/


async function getTeams(name) {
  const url = `https://v3.football.api-sports.io/teams?name=${name}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '345262d555add75f5c2f999bf32c3f78',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };

  const resp = await fetch(url, options);
  if (resp.status === 200){
    const obj = await resp.json();
    console.log(obj)
    
    return obj
  }

}

      


