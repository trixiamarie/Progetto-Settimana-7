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
    console.log(data);
  })
  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

// Dati del nuovo prodotto da inviare
let newProduct = {
  name: "Prosciutto di Parma DOP",
  description: "Prosciutto di Parma DOP stagionato TOT mesi",
  brand: "Crudazon",
  imageUrl:
    "https://media.istockphoto.com/id/487342826/it/foto/fette-di-prosciutto-su-vecchio-sfondo-in-legno.jpg?s=1024x1024&w=is&k=20&c=a1sbwDdhWmS1zcLo2nQb96FMYls3ABR5sY8oUGujaxE=",
  price: 19.99,
};

fetch(api, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
  body: JSON.stringify(newProduct),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

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
document
  .getElementById("submitBtn")
  .addEventListener("click", async function () {
    await addProduct();
  });

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

let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
  document.getElementById("productName").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productBrand").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImageUrl").value = "";
});
