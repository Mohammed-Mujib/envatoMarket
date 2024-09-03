const productsRows = document.querySelector("#productsRows");
const cartRows = document.querySelector("#cartRows");
const recomend = document.querySelector("#recomendProducts");
const totalMain = document.querySelector("#total-main");
const totalSub = document.querySelector("#total-sub");

let cart = JSON.parse(localStorage.getItem("cart_items")) || [];
cart.forEach(item => {
    item.getPrice = function() {
        return this.quantity * this.price;
    };
});
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

let recomendProducts = JSON.parse(localStorage.getItem("recomendProducts")) || [
    {
        name: "super Package",
        image: "package7.jpg",
        price: 104,
        addedToCart: false,
        id: 10,
        quantity: 1,
        getPrice: function() {
            return this.quantity * this.price;
        }
    },
    {
        name: "ultimate Package",
        image: "package8.jpg",
        price: 234,
        addedToCart: false,
        id: 20,
        quantity: 1,
        getPrice: function() {
            return this.quantity * this.price;
        }
    }
];

if (location.pathname == "/shop.html") {
    displayProducts();
}
if (location.pathname == "/cart.html") {
    displayCart();
    displayRecomendProducts();
}

function displayProducts() {
    let cartona = "";
    for (let i = 0; i < products.length; i++) {
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

function addToCart(product_id) {
    for (let i = 0; i < products.length; i++) {
        if (product_id == products[i].id) {
            if (products[i].addedToCart == false) {
                products[i].addedToCart = true;

                // Push a new object to the cart with the getPrice method
                cart.push({
                    id: products[i].id,
                    name: products[i].name,
                    image: products[i].image,
                    price: products[i].price,
                    quantity: products[i].quantity,
                    getPrice: products[i].getPrice // Ensure this is a reference to the function
                });

                localStorage.setItem("ex_products", JSON.stringify(products));
                localStorage.setItem("cart_items", JSON.stringify(cart));

                // Update the cart display if on the cart page
                if (location.pathname == "/cart.html") {
                    displayCart();
                }
            }
        }
    }
}

function displayCart() {
    let box = "";
    for (let i = 0; i < cart.length; i++) {
        box += `
                <tr class="">
                    <td class="delete-td p-3"><button class="btn-delete text-danger p-2 px-3 btn mt-4 border"><i class="fa-solid fa-xmark"></i></button></td>
                    <td class="img-td p-3  border"><img src="images/${cart[i].image}" alt=""></td>
                    <td class="Product-name-td p-3  border"><h5>${cart[i].name}</h5></td>
                    <td class="Price-td p-3  border">$ ${cart[i].price}</td>
                    <td class="Quantity-td p-3  border ">
                        <div class="quantitiy d-flex justify-content-center">
                            <button class="btn btn-plus bg-light" onclick = "quantityMines(${i})">-</button>
                            <input type="text" class="q-input w-25 text-center" value="${cart[i].quantity}" onmouseleave = "quantityInputFormater()" >
                            <button class="btn btn-mines bg-light" onclick = "quantityPlus(${i})">+</button>
                        </div>
                    </td>
                    <td class="Subtotal-td p-3  border">$ ${cart[i].getPrice()}</td>
                </tr>
                `;
    }
    cartRows.innerHTML = box;
}

function getTotal(){
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].getPrice()
    }
    totalMain.innerHTML = `$${total}`;
    totalSub.innerHTML = `$${total}`;
}

console.log(getTotal());

function displayRecomendProducts() {
    let cartona = "";
    for (let i = 0; i < recomendProducts.length; i++) {
        cartona +=`
                <div class="col-sm-12 col-md-6 mb-2 mt-2 mb-sm-4">
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

const qInput = document.querySelectorAll(".q-input");

function quantityInputFormater() {
    let nums = ["1","2","3","4","5","6","7","8","9","0"];
    let gojo = (e)=>{
        if (e.value == "NaN") {
            e.value = 1
        }
        if (e.value.length <1) {
            this.value = 1
        }
        // if (!nums.includes(this.key)) {
        // }  
        e.value = parseInt(e.value)   
    }
    gojo()
}

function test() {
    qInput.forEach((e)=>{
        e.addEventListener("keyup",(dosa)=>{
            let nums = ["1","2","3","4","5","6","7","8","9","0"];
            if (e.value == "NaN") {
                e.value = 1
            }
            if (e.value.length <1) {
                e.value = 1
            }
            if (!nums.includes(dosa.key)) {
                e.value = parseInt(e.value)   
            }  
        })    
    });
}

test();

// qInput.forEach((e)=>{
//     e.addEventListener("keyup",(dosa)=>{
//         let nums = ["1","2","3","4","5","6","7","8","9","0"];
//         if (e.value == "NaN") {
//             e.value = 1
//         }
//         if (e.value.length <1) {
//             e.value = 1
//         }
//         if (!nums.includes(dosa.key)) {
//             e.value = parseInt(e.value)   
//         }  
//     })    
// });

function quantityPlus(count) {
    cart[count].quantity ++;
    localStorage.setItem("cart_items", JSON.stringify(cart));
    displayCart();
    test()
    getTotal()
}
function quantityMines(count) {
    if (cart[count].quantity >=2) {
        cart[count].quantity --;
    }
    localStorage.setItem("cart_items", JSON.stringify(cart));
    displayCart();
    test()
    getTotal()
}
