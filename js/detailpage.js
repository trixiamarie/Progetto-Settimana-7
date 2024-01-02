let key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NWU4MTI2NzYxNDAwMTgzYzJlYzEiLCJpYXQiOjE3MDIzODczMjksImV4cCI6MTcwMzU5NjkyOX0.HeLJ8p-82qwvrGoPPWuTJQuFW9KnxDei-Z8XAMZRb0M";
let api = "https://striveschool-api.herokuapp.com/api/product/";

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log("Product ID from URL:", id);

function createDettaglio(productId) {
  let url = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
  fetch(url, {
      method: 'GET', 
      headers: { Authorization: `Bearer ${key}`, }
  })
  .then(response => response.json())
  .then(json => {
      console.log(json);
      let contenitore = document.querySelector('#dettaglio');
      let imgDettaglio = document.createElement('img');
      imgDettaglio.src = json.imageUrl;
      let titoloDettaglio = document.createElement('h2');
      titoloDettaglio.innerText = json.name+" ("+json.brand+") ";
      let descDettaglio = document.createElement('p');
      descDettaglio.innerText = "Prezzo: " + "$" + json.price + "/Kg. " + "Descrizione: "+ json.description ;
      descDettaglio.style.marginTop = "1rem";
      descDettaglio.style.marginBottom = "1rem";
      let imgValori = document.createElement('img');
      imgValori.src = "./assets/img/valorinutrizionali.jpg";

      contenitore.appendChild(titoloDettaglio);
      contenitore.appendChild(imgDettaglio);
      contenitore.appendChild(descDettaglio);
      contenitore.appendChild(imgValori);
  })
  .catch(error => console.log(error));
}

createDettaglio(id);
