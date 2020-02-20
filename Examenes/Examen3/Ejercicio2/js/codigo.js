async function loadJson(url) { 
    let response = await fetch(url); 
  
    if (response.status == 200) {
      let json = await response.json(); 
      let tabla="<tr><th>ID</th><th>LogIn</th><th>type</th></tr>"
      for(let i=0;i<30;i++){
        tabla+="<tr><td>";
        tabla+=json[i].id
        tabla+="</td><td>"
        tabla+=json[i].login
        tabla+="</td><td>"
        tabla+=json[i].type
        tabla+="</td></tr>";
      }
      document.getElementById('table').innerHTML=tabla;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('https://api.github.com/users')
    .catch(alert); // Error: 404