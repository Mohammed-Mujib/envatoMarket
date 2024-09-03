const productsRows = document.querySelector("#productsRows");
const cartRows = document.querySelector("#cartRows");
const recomend = document.querySelector("#recomendProducts")

let cart = JSON.parse(localStorage.getItem("cart_items")) || [];

let products = JSON.parse(localStorage.getItem("ex_products")) || [
    {
        name: "package1",
        image: "package2.jpg",
        price: 34,
        addedToCart: false,
        id: 1,
        quantity: 1, 
        getPrice: function() {
            return this.quantity * this.price; 
        }
    },
    {
        name: "package2",
        image: "package3.jpg",
        price: 20,
        addedToCart: false,
        id: 2,
        quantity: 1, 
        getPrice: function() {
            return this.quantity * this.price; 
        }
    },
    {
        name: "package3",
        image: "package4.jpg",
        price: 40,
        addedToCart: false,
        id: 3,
        quantity: 1, 
        getPrice: function() {
            return this.quantity * this.price; 
        }
    },
    {
        name: "package4",
        image: "package5.jpg",
        price: 23,
        addedToCart: false,
        id: 4,
        quantity: 1, 
        getPrice: function() {
            return this.quantity * this.price; 
        }
    },
    {
        name: "package5",
        image: "package6.jpg",
        price: 39,
        addedToCart: false,
        id: 5,
        quantity: 1, 
        getPrice: function() {
            return this.quantity * this.price; 
        }
    },
    {
        name: "package6",
        image: "package7.jpg",
        price: 57,
        addedToCart: false,
        id: 6,
        quantity: 1, 
        getPrice: function() {
            return this.quantity * this.price; 
        }
    },
    {
        name: "package7",
        image: "package8.jpg",
        price: 84,
        addedToCart: false,
        id: 7,
        quantity: 1, 
        getPrice: function() {
            return this.quantity * this.price; 
        }
    }
];

let recomendProducts = JSON.parse(localStorage.getItem("recomendProducst")) || [
    {
        name: "super Pakege",
        image: "package7.jpg",
        price: 104,
        addedToCart: false,
        id: 10,
        quantitiy:1,
        getPrice : function() {
            return this.quantitiy * this.price
        }
    },
    {
        name: "ultimtPakege",
        image: "package8.jpg",
        price: 234,
        addedToCart: false,
        id: 20,
        quantitiy:1,
        getPrice : function(){
            return this.quantitiy * this.price
        }
    }
]
console.log(location.pathname);

if (location.pathname == "/shop.html") {
    function displayProducts() {
        let cartona = "";
        for (let i = 0 ; i<products.length; i++) {
            cartona +=`
                <div class="col-sm-12 col-md-6 col-lg-4 mb-5 mt-2">
                    <div class="product_box position-relative">
                        <div class="img_box mb-2 ">
                            <img src="images/${products[i].image}" alt="" class=" w-100">
                        </div>
                        <span class="product_price px-4 py-2">$ ${products[i].price}</span>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h2 class="text-center py-2 product_title">${products[i].name}</h2>
                        <button class="btn text-center w-100 add_btn mt-1 mb-2 rounded-0 p-2" onclick="addToCart(${products[i].id})"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                    </div>
                </div>
            `;
        }
        productsRows.innerHTML = cartona;
    }
    displayProducts();
}

function addToCart(prodcut_id) {
    console.log(products);
    
    for (let i = 0 ; i<products.length; i++) {
        if (prodcut_id == products[i].id) {
            if (products[i].addedToCart == false) {
                let addedproduct = {
                    name: products[i].name,
                    image: products[i].image,
                    price: products[i].price,
                    addedToCart: true,
                    id: products[i].id,
                    quantity: products[i].quantity, 
                    getPrice: function() {
                        return this.quantity * this.price; 
                    }
                }
                // cart.push(products[i]);
                // cart.push(products[i]);
                cart.push(addedproduct);
                products[i].addedToCart = true;
                console.log("added");
            }
            else{
                console.log("allready added");
            }
        }
    }
    console.log(products);
    localStorage.setItem("cart_items" ,JSON.stringify(cart))
    localStorage.setItem("ex_products",JSON.stringify(products))
}

if (location.pathname == "/cart.html") {
    function dispalyCart() {
        let box = "";
        if (cart != null) {
            for (let i = 0; i < cart.length; i++) {
                box += `
                        <tr class="">
                            <td class="delete-td p-3"><button class="btn-delete text-danger p-2 px-3 btn mt-4"><i class="fa-solid fa-xmark"></i></button></td>
                            <td class="img-td p-3"><img src="images/${cart[i].image}" alt=""></td>
                            <td class="Product-name-td p-3"><h5>${cart[i].name}</h5></td>
                            <td class="Price-td p-3">$ ${cart[i].price}</td>
                            <td class="Quantity-td p-3 ">
                                <div class="quantitiy d-flex justify-content-center">
                                    <button class="btn btn-plus bg-light">-</button>
                                    <input type="text" class="q-input w-25 text-center" value = "${cart[i].quantity}">
                                    <button class="btn btn-mines bg-light">+</button>
                                </div>
                            </td>
                            <td class="Subtotal-td p-3">$ }</td>
                        </tr>
                `;
            }
            console.log(cart);
            
        }
        else{
            console.log("cart = null");
        }
        cartRows.innerHTML = box;
    }

    dispalyCart();

    function displayrecomendProducts() {
        let cartona = "";
        for (let i = 0 ; i<recomendProducts.length; i++) {
            cartona +=`
                <div class="col-sm-12 col-md-6 mb-2 mt-2">
                    <div class="product_box position-relative">
                        <div class="img_box mb-2 ">
                            <img src="images/${recomendProducts[i].image}" alt="" class=" w-100">
                        </div>
                        <span class="product_price px-4 py-2">$ ${recomendProducts[i].price}</span>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h2 class="text-center py-2 product_title">${recomendProducts[i].name}</h2>
                        <button class="btn text-center w-100 add_btn mt-1 mb-2 rounded-0 p-2" onclick="addToCart(${recomendProducts[i].id})"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                    </div>
                </div>
            `;
        }
        recomend.innerHTML = cartona;
    }

    displayrecomendProducts()
}

