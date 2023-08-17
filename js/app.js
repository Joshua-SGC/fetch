let url = 'http://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) =>{
    console.log(data)
    let body = ""
    for(var i = 0; i<data.length; i++){
        body+=`<tr><td>${(data[i].id)}</td><td>${(data[i].name)}</td><td>${(data[i].email)}</td><td>${(data[i].username)}</td><td>${(data[i].phone)}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}