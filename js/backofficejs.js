let key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NWU4MTI2NzYxNDAwMTgzYzJlYzEiLCJpYXQiOjE3MDIzODczMjksImV4cCI6MTcwMzU5NjkyOX0.HeLJ8p-82qwvrGoPPWuTJQuFW9KnxDei-Z8XAMZRb0M";
let api = "https://striveschool-api.herokuapp.com/api/product/";

fetch(api, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${key}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    createList(data);
    console.log(data);
  })
  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

// Dati del nuovo prodotto da inviare
// let newProduct = {
//   name: "Prosciutto di Parma DOP",
//   description: "Prosciutto di Parma DOP stagionato TOT mesi",
//   brand: "Crudazon",
//   imageUrl:
//     "https://media.istockphoto.com/id/487342826/it/foto/fette-di-prosciutto-su-vecchio-sfondo-in-legno.jpg?s=1024x1024&w=is&k=20&c=a1sbwDdhWmS1zcLo2nQb96FMYls3ABR5sY8oUGujaxE=",
//   price: 19.99,
// };

// fetch(api, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${key}`,
//   },
//   body: JSON.stringify(newProduct),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });

//COSTRUTTORE
class product {
  constructor(name, description, brand, imageUrl, price) {
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}

// Utilizzo del costruttore per creare un nuovo oggetto "Prodotto"

// let p1 = new product(
//   "Prosciutto di San Daniele DOP",
//   "Prosciutto di San Daniele DOP stagionato TOT mesi",
//   "Crudazon",
//   "https://media.istockphoto.com/id/1637636771/it/foto/carne-essiccata.jpg?s=1024x1024&w=is&k=20&c=2yQXAiOgqhXy8p8OmpiLIGEDwRmQKFEyyRkV2ioTzhU=",
//   29.99
// );

// let p2 = new product(
//   "Prosciutto Crudo Toscano",
//   "Prosciutto Crudo Toscano stagionato TOT mesi",
//   "Gusto Toscana",
//   "https://media.istockphoto.com/id/1134208157/it/foto/antipasto-freddo-prosciutto-su-una-foglia-di-insalata-verde-guarnito-con-pomodoro-ciliegino.jpg?s=1024x1024&w=is&k=20&c=27AMX3U9W5-_9_tqNi0Ukl0npDQ1Ea2Y-lUVRWpVI8Y=",
//   27.99
// );

// let p3 = new product(
//   "Prosciutto Crudo di Norcia",
//   "Prosciutto Crudo di Norcia stagionato TOT mesi",
//   "Tradizione Umbra",
//   "https://media.istockphoto.com/id/1178567342/it/foto/prosciutto-secco.jpg?s=1024x1024&w=is&k=20&c=6Bw0WGgZdBtFkBMHepyVz8vwjEYnpwMP-AxzrKOCwUQ=",
//   31.99
// );

// let p4 = new product(
//   "Prosciutto Crudo Sardo",
//   "Prosciutto Crudo Sardo stagionato TOT mesi",
//   "Sapore della Sardegna",
//   "https://media.istockphoto.com/id/1362972939/it/foto/prosciutto-serrano-crudo-o-spagnolo-su-un-piatto-bianco-su-un-tavolo-con-pomodoro-biologico-e.jpg?s=1024x1024&w=is&k=20&c=gCf3-BHlNAR0OYLnRJj7DX1uABYegqkbkEjojY83v1Q=",
//   29.99
// );

// let p5 = new product(
//   "Prosciutto di Carpegna DOP",
//   "Prosciutto di Carpegna DOP stagionato TOT mesi",
//   "Gusto di Carpegna",
//   "https://media.istockphoto.com/id/1036910918/it/foto/fetta-di-salsiccia-di-salame-e-verdure-sul-piatto.jpg?s=1024x1024&w=is&k=20&c=VMnGSVRu-Dh_P4bYL6nPQzCPjh95-nmSfNqIcu9PvWE=",
//   25.99
// );

//POST DEI PRODOTTI CREATI IN JS
// fetch(api, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${key}`,
//   },
//   body: JSON.stringify(p1),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });

// fetch(api, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${key}`,
//   },
//   body: JSON.stringify(p2),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });

// fetch(api, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${key}`,
//   },
//   body: JSON.stringify(p3),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });

// fetch(api, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${key}`,
//   },
//   body: JSON.stringify(p4),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });

// fetch(api, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${key}`,
//   },
//   body: JSON.stringify(p5),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta:", error);
//   });


//FORM E CREAZIONE DEL PRODOTTO AGGIUNTO DALL'UTENTE


document.getElementById("submitBtn").addEventListener("click", async function () {
    await addProduct();
  });

  //AGGIUNGI PRODOTTI
async function addProduct() {
  let productName = document.getElementById("productName").value;
  let productDescription = document.getElementById("productDescription").value;
  let productBrand = document.getElementById("productBrand").value;
  let productPrice = document.getElementById("productPrice").value;
  let productImageUrl = document.getElementById("productImageUrl").value;

  let nProduct = {
    name: productName,
    description: productDescription,
    brand: productBrand,
    imageUrl: productImageUrl,
    price: parseFloat(productPrice),
  };

  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(nProduct),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Errore nella richiesta di modifica:", error);
    });
}

//RESETTA FORM
let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
  let userConfirmed = confirm("Sei sicuro di voler cancellare il contenuto del form?");

if (userConfirmed) {
  document.getElementById("productName").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productBrand").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImageUrl").value = "";
}});

//CREA LISTA PRODOTTI
function createList(x) {
  let ulList = document.querySelector('div.accordion-body ul');
  x.forEach(y => {
    let liList = document.createElement('li');
    liList.classList.add("m-2","border","border-secondary","rounded","p-2","d-flex","align-items-center", "justify-content-between"
    );
    let liName = document.createElement('p');
    liName.innerText = y.name;
    liName.style.width = "15rem";
    let liDescription = document.createElement('p');
    liDescription.innerText = y.description;
    liDescription.style.width = "20rem";
    let liBrand = document.createElement('p');
    liBrand.innerText = y.brand;
    liBrand.style.width = "10rem";
    let liPrice = document.createElement('p');
    liPrice.innerText = "€" + y.price +"/Kg";
    liPrice.style.width = "5rem";
    let liUrlImage = document.createElement('img');
    liUrlImage.src = y.imageUrl;
    liUrlImage.style.width = "auto";
    liUrlImage.style.height = "4rem";
    let btnMod = document.createElement('button');
    btnMod.innerHTML=`<i class="bi bi-pencil-square"></i>`;
    btnMod.classList.add('btn', 'btn-primary');
    btnMod.setAttribute("data-bs-toggle", "modal");
    btnMod.setAttribute("data-bs-target", "#exampleModal");
    btnMod.addEventListener('click', function () {
      let existingBtn = document.getElementById("existingBtn");
      if (existingBtn) {
        existingBtn.remove();
      }
        document.querySelector('#productName').value = y.name;
        document.querySelector('#productDescription').value = y.description;
        document.querySelector('#productBrand').value = y.brand;
        document.querySelector('#productPrice').value = y.price;
        document.querySelector('#productImageUrl').value = y.imageUrl;
        let saveBtn = document.createElement("button");
        saveBtn.innerText = "Invia";
        saveBtn.classList.add("btn", "btn-outline-success");
        saveBtn.id = "existingBtn";
        let modalContainer = document.querySelector(
          "div.modal-body div.container"
        );
        modalContainer.appendChild(saveBtn);
        saveBtn.addEventListener("click", function () {
          editLi(y);
          let success= document.createElement('p');
          success.innerText="Dati Inviati"
          modalContainer.appendChild(success);
        });
      }
    )

    let btnCanc = document.createElement('button');
    btnCanc.innerHTML=`<i class="bi bi-trash3"></i>`;
    btnCanc.classList.add('btn', 'btn-danger');
    btnCanc.addEventListener('click', function () {
      cancLi(y);
    })


    ulList.appendChild(liList);
    liList.appendChild(liUrlImage);
    liList.appendChild(liName);
    liList.appendChild(liDescription);
    liList.appendChild(liBrand);
    liList.appendChild(liPrice);
    liList.appendChild(btnMod);
    liList.appendChild(btnCanc);
    
  });
}

//MODIFICA PRODOTTI
function editLi(x) {
  let newName = document.getElementById("productName").value;
  let newDescription = document.getElementById("productDescription").value;
  let newBrand = document.getElementById("productBrand").value;
  let newPrice = document.getElementById("productPrice").value;
  let newproductImageUrl = document.getElementById("productImageUrl").value;

  let updatedProduct = {
    name: newName,
    description: newDescription,
    brand: newBrand,
    price: parseFloat(newPrice),
    imageUrl: newproductImageUrl
  };

  fetch(`${api}/${x._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(updatedProduct),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateLi(x, updatedProduct);
    })
    .catch((error) => {
      console.error("Errore nella richiesta di modifica:", error);
  });

  function updateLi(oldProduct, newProduct) {
      let liElement = document.getElementById(oldProduct._id);
      liElement.remove();
      createList([newProduct]);
  }
}

//CANCELLA PRODOTTI
function cancLi(x) {
  let userConfirmed = confirm("Sei sicuro di voler eliminare questo prodotto?");

if (userConfirmed) {
  console.log("L'utente ha confermato.");
  fetch(`${api}/${x._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error in delete request:", error);
    });
}
}