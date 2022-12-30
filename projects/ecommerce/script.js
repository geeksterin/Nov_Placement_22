const productsContainer = document.getElementById("products-container");
const cartContainer = document.getElementById("carts-container");

// const cartItems = []

async function fetchPhotosAndPopulateTheUI() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    console.log(data);

    if (!Array.isArray(data)) {
      data = data?.results;
    }

    productsContainer.innerHTML = null;
    data.forEach(generateThumbnail);

    // return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

function renderCartItems() {
  let cartItems = localStorage.getItem("cart");
  cartItems = cartItems ? JSON.parse(cartItems) : [];
  if (cartItems.length < 1) {
    const noItemsMessage = document.createElement("h3");
    noItemsMessage.innerText = "No items have been added to the cart yet!";
    cartContainer.appendChild(noItemsMessage);
  }

  cartItems.forEach(generateCartCard);

  const totalPrice = cartItems.reduce((acc, curr) => {
    const price = curr.price * curr.quantity;
    return acc+price;
  }, 0);


  const totalAmount = document.createElement("h3")
  totalAmount.innerText = "Your total is equal to " +  totalPrice
  cartContainer.appendChild(totalAmount)
  console.log(totalPrice)
}

function generateCartCard(product) {
    const productCard = document.createElement("div");
    // productCard.classList.add("card")
    productCard.classList.add("card", "thumbnail-custom", "p-2");
  
    const thumbnail = document.createElement("img");
    thumbnail.src = product?.image;
    thumbnail.alt = product?.alt_description;
    thumbnail.classList.add("card-img-top");
    // thumbnail.classList.add("thumbnail-custom")
    productCard.appendChild(thumbnail);
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const productName = document.createElement("p");
    productName.innerText = product.title;
    productName.classList.add("card-title");
    productCard.appendChild(productName);
  
    const price = document.createElement("p");
    price.innerText = `INR ${product.price} /-`;
    price.classList.add("card-text");
    productCard.appendChild(price);
  
    const qty = document.createElement("p")
    qty.innerText = `Quantity - ${product.quantity}`
    productCard.appendChild(qty)

    const incrementQuantity = document.createElement("button")
    incrementQuantity.innerText = "+"
    incrementQuantity.classList.add("btn", "btn-primary")
    incrementQuantity.addEventListener("click", function() {
        let cartItems = localStorage.getItem("cart");
        cartItems = JSON.parse(cartItems);
        cartItems = cartItems.map(item => {
            if(item.id === product.id){
                return {...item, quantity: item.quantity + 1}
            }

            return item
        })
        // cartItems = cartItems
        //   ? [...cartItems, { ...product, quantity: 1 }]
        //   : [{ ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(cartItems));
        window.location.reload()
    })
    productCard.appendChild(incrementQuantity)

  
      cartContainer.appendChild(productCard);
   
  }

function generateThumbnail(product) {
  const productCard = document.createElement("div");
  // productCard.classList.add("card")
  productCard.classList.add("card", "thumbnail-custom", "p-2");

  const thumbnail = document.createElement("img");
  thumbnail.src = product?.image;
  thumbnail.alt = product?.alt_description;
  thumbnail.classList.add("card-img-top");
  // thumbnail.classList.add("thumbnail-custom")
  productCard.appendChild(thumbnail);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const productName = document.createElement("p");
  productName.innerText = product.title;
  productName.classList.add("card-title");
  productCard.appendChild(productName);

  const price = document.createElement("p");
  price.innerText = `INR ${product.price} /-`;
  price.classList.add("card-text");
  productCard.appendChild(price);

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("btn", "btn-primary");
  addToCartBtn.innerText = "Add to cart!";

  addToCartBtn.addEventListener("click", function () {
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);
    cartItems = cartItems
      ? [...cartItems, { ...product, quantity: 1 }]
      : [{ ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartItems));
  });

  productCard.appendChild(addToCartBtn);

  if (window.location.pathname.includes("cart.html")) {
    // renderCartItems()
    cartContainer.appendChild(productCard);
  } else {
    // fetchPhotosA÷ndPopulateTheUI();
    productsContainer.appendChild(productCard);
  }
}

function populateUI() {
  // path - /
  // path - /cart.html
  if (window.location.pathname.includes("cart.html")) {
    renderCartItems();
  } else {
    fetchPhotosAndPopulateTheUI();
  }
}

populateUI();
