const cart = [
  {
    id: 1,
    name: "tenis Nike",
    imgId: "001",
    price: "100,00",
    available: true,
  },
  {
    id: 2,
    name: "tenis adidas",
    imgId: "002",
    price: "250,99",
    available: true,
  },
];

const card = (item) => {
  return `
    <li class="product-item" id="${item.id}>
        <figure class="product-image">
          <img src="./assets/${item.imgId}.svg" alt="${item.name}" />
        </figure>
      <di class="item-info">
        <span>${item.name}</span>
        <span>Preço: R$ ${item.price}</span>
        <span>Quantidade: 1</span>
        <button class="btn-remove" id="${item.id}">Remover</button>
      </div>
    </li>
  `;
};

const render = (cart) => {
  const ul = document.querySelector(".product-list");

  for (let item of cart) {
    ul.innerHTML += card(item);
  }
};

render(cart);

const products = document.querySelectorAll(".product-item");
const btnRemove = document.querySelectorAll(".btn-remove");

for (let i = 0; i < btnRemove.length; i++) {
  for (let j = 0; j < products.length; j++) {
    btnRemove[i].addEventListener("click", (event) => {
      if (!event.target.classList.contains(".btn-remove")) {
        products[i].remove();
      }
    });
  }
}
