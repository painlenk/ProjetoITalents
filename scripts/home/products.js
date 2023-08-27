const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3002/products");
    const data = await response.json();
    return data;
  } catch (e) {
    alert("erro ao realizar a requisição", e.message);
  }
};

const createCard = function (product) {
  return ` <div class="card">
  <figure class="card-img-container">
    <img
      class="card-img"
      src="../../assets/${product.imgId}.svg"
      alt=${product.name}
    />
  </figure>
  <div class="card-info">
    <span>${product.name}</span>
    <span>preço: R$ ${product.price}</span>
    <button class="card-btn-add-cart">Adicionar ao carrinho</button>
  </div>
</div>`;
};

const getCard = async () => {
  const { products } = await getProducts();
  const cardContainer = document.querySelector(".card-container");

  for (let i = 1; i < 6; i++) {
    cardContainer.innerHTML += createCard(products[i]);
  }
};

getCard();
