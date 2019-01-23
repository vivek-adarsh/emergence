const LOCAL_SERVER = 'http://localhost:5000/'

function postJson(path,data){
  console.log("POST to '"+LOCAL_SERVER+path+"':\n" + JSON.stringify(data))

  fetch(LOCAL_SERVER+path, {
    mode: 'cors',
    method: 'POST',
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}


export {postJson}

