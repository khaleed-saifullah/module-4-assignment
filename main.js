// Product List
let products = [
  {
    id: 1,
    name: "Shirt One",
    price: "150",
    img: "images/image-one.webp",
  },
  {
    id: 2,
    name: "Shirt Two",
    price: "400",
    img: "images/image-two.webp",
  },
  {
    id: 3,
    name: "Shirt Three",
    price: "800",
    img: "images/image-three.webp",
  },
  {
    id: 4,
    name: "Shirt Four",
    price: "900",
    img: "images/image-four.webp",
  },
];

let product_list = document.querySelector(".product-list .row");

for (let i = 0; i < products.length; i++) {
  let product = document.createElement("div");
  product.classList.add("col-md-4");
  product.innerHTML = `<img class="product-image" src="${products[i].img}" alt=""> <h3 class="product-name">${products[i].name}</h3> <div class="product-info"><p class="product-price">${products[i].price}</p><a href="#" class="btn btn-primary add-to-cart-btn">Add to cart</a><span class="product-id d-none">${products[i].id}</span></div> `;
  product_list.appendChild(product);
}

let cart_list = document.querySelector(".cart-lists");

let cart_button = document.querySelectorAll(".add-to-cart-btn");

let subTotal = 0;

let subtotalElement = document.getElementById("subtotal");

cart_button.forEach((button) => {
  button.addEventListener("click", () => {
    let productID = button.nextElementSibling.textContent - 1;
    let cartItems = document.createElement("div");
    cartItems.classList.add("cart-item");
    cartItems.innerHTML = `<div class="cart-content"><img class="cart-image" src="${products[productID].img}" alt=""><h5 class="cart-product-name">${products[productID].name}</h5></div><p class="cart-product-price">${products[productID].price}</p>`;
    cart_list.appendChild(cartItems);

    subTotal += parseInt(products[productID].price);
    subtotalElement.textContent = subTotal;
  });
});

let clearCartBtn = document.getElementById("clear-cart");

clearCartBtn.addEventListener("click", () => {
  cart_list.innerHTML = "";
  subtotalElement.innerHTML = "";
});
