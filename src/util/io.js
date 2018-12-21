function post(path,data){
  console.log("POST to '"+path+"':\n" + JSON.stringify(data))

  fetch('http://localhost:5000/'+path, {
    mode: 'cors',
    method: 'POST',
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

export {post}