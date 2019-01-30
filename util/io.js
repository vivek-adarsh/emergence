import fetch from 'isomorphic-unfetch'

function postJson(path,data){
  console.log("POST to '/api/"+path+"':\n" + JSON.stringify(data))

  fetch("/api/"+path, {
    mode: 'cors',
    method: 'POST',
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then( (response) => console.log(response) )
}


async function getJson(path){
  console.log("GET from '/api/"+path+"':\n" )

  const res = await fetch('http://localhost:3000/api/'+path)
  const data = await res.json()

  console.log(`Fetched ${data.length} entries`)
  return data
}

export {getJson, postJson}
