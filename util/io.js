import fetch from 'unfetch'


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


 function getJson(path){
  console.log("GET from '/api/"+path+"':\n" )

  fetch("/api/"+path, {
    mode: 'cors',
    method: 'GET',
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
  }).then( (response) => console.log(response) )
}


export {getJson, postJson}

