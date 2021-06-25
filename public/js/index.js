function getPlayerDb() {
    const url = "./db.json";

    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result
    });
}

async function loadPlayers() {
    const players = await getPlayerDb();
    let html = ""
    players.forEach(element => {
        html += `

        <div class="col-lg-3 container">

          <div class="card" style="width:18rem;">
            <a href="./player.html" class="container">
             <div class="btn_photo" onClick="clickPlayer(${element.id})">
              <img src="${element.photo}" class="card-img-top" alt="${element.name}" >
             </div>
            </a>  
             <div class="card-body">
                <h5 class="card-title">${element.name} ${element.number}</h5>
                <p class="card-text">${element.position} </p>
                <p class="card-text">${element.country} </p>
             </div>
          </div>

        </div>
        `;

        document.getElementsByClassName("players")[0].innerHTML = html
    });

}

loadPlayers();    


function clickPlayer(element){
   const id = localStorage.setItem("player", element)
}




