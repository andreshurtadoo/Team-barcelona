const getId = localStorage.getItem("player");
const id = parseInt(getId)

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
    let html = "";
    players.forEach(element => {
        if(element.id === id){
            html += `

              <div class="row">
                <div class="col-sm">
                  <div class="card item" style="width: 25rem;">
                    <img src="${element.photo}" class="card-img-top img-player" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text carta">${element.info}</p>
                      <a href="#" class="btn btn-primary">Biografia Completa</a>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="item carta subtitle" >
                    <p class="text">${element.about}</p>
                  </div>
                </div>
             </div>

            `
            document.getElementsByClassName("players")[0].innerHTML = html
        }     
    });
}

loadPlayers(); 



