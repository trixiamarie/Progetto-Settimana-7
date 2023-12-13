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
    createProdCard(data);
    console.log(data);
  })
  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

//CREA LE CARD DEI PRODOTTI AUTOMATICAMENTE
function createProdCard(product) {
  let pContainer = document.querySelector("div.container .card-group");
  console.log(pContainer);
  let row = document.createElement("div");
  row.classList.add("row", "justify-content-between");
  pContainer.appendChild(row);

  let cardsPerRow = 3;
  let columnsPerCard = 12 / cardsPerRow;

  product.forEach((x) => {
    let divCard = document.createElement("div");
    divCard.classList.add(
      `col-${columnsPerCard}`,
      "card",
      "mb-3",
      "mx-2",
      "justify-content-between",
      "shadow-sm"
    );

    divCard.style.width = "25rem";
    divCard.style.padding = "0";

    let pImg = document.createElement("img");
    pImg.classList.add("card-img-top");
    pImg.alt = x.title;
    pImg.src = x.imageUrl;
    pImg.style.width = "auto";
    pImg.style.height = "17rem";

    let divBody = document.createElement("div");

    let h5Body = document.createElement("h5");
    h5Body.classList.add("card-title", "p-2", "text-center");
    h5Body.innerText = x.name;

    let pBody = document.createElement("span");
    pBody.classList.add("badge", "p-2", "bg-primary", "m-2");
    pBody.innerText = x.brand;

    let pBody1 = document.createElement("p");
    pBody1.classList.add("p-2", "m-2");
    pBody1.innerText = x.description;

    let divPDA = document.createElement("div");

    let priceBody = document.createElement("p");
    priceBody.classList.add("p-2", "m-2", "text-center", "bg-dark-subtle");
    priceBody.innerText = "Prezzo: " + "$" + x.price + "/Kg";
    priceBody.style.fontWeight = "bold";

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("btnEdit", "btn", "btn-outline-info");
    btnEdit.innerText = "Edit";
    btnEdit.setAttribute("data-bs-toggle", "modal");
    btnEdit.setAttribute("data-bs-target", "#exampleModal");
    btnEdit.addEventListener("click", function () {
      let existingBtn = document.getElementById("existingBtn");
      if (existingBtn) {
        existingBtn.remove();
      }
        let saveBtn = document.createElement("button");
        saveBtn.innerText = "Invia";
        saveBtn.classList.add("btn", "btn-outline-success");
        saveBtn.id = "existingBtn";
        let modalContainer = document.querySelector(
          "div.modal-body div.container"
        );
        modalContainer.appendChild(saveBtn);
        saveBtn.addEventListener("click", function () {
          editProduct(x);
        });
      }
    );

    let btnInfo = document.createElement("button");
    btnInfo.classList.add("btn", "btn-outline-success", "m-2");
    btnInfo.innerHTML = `<i class="bi bi-info-circle"></i>`;

    // btnInfo.setAttribute("data-bs-toggle", "modal");
    // btnInfo.setAttribute("data-bs-target", "#exampleModal");
    btnInfo.addEventListener("click", function () {
        infoProduct(x);
    });

    divBody.appendChild(h5Body);
    divBody.appendChild(pBody1);
    divBody.appendChild(pBody);
    divBody.appendChild(divPDA);
    divPDA.appendChild(priceBody);
    divPDA.appendChild(btnInfo);
    divPDA.appendChild(btnEdit);
    divCard.appendChild(pImg);
    divCard.appendChild(divBody);
    row.appendChild(divCard);
  });
}

//MODIFICA LE CARD
async function editProduct(product) {
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
    imageUrl: newproductImageUrl,
  };

  await fetch(`${api}/${product._id}`, {
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
      updateCard(product, updatedProduct);
    })
    .catch((error) => {
      console.error("Errore nella richiesta di modifica:", error);
    });

  function updateCard(oldProduct, newProduct) {
    let cardElement = document.getElementById(oldProduct._id);
    cardElement.remove();
    createProdCard([newProduct]);
  }
}

//INFO CARD MODAL
function infoProduct(product) {
  //VALORI NUTRIZIONALI
  // let title = document.querySelector('.modal h5.modal-title');
  // title.innerText = product.name;
  // let modalBody = document.querySelector('.modal div.modal-body');
  // if (modalBody.children.length === 0) {
  // let imgBody = document.createElement('img');
  // modalBody.appendChild(imgBody);
  // // imgBody.src = product.imageUrl;
  // let imagePath = "./assets/img/valorinutrizionali.jpg";
  // imgBody.src = imagePath;
  // imgBody.style.width = "auto";
  // imgBody.style.height = "40rem";}
}
