const productsRows = document.querySelector("#productsRows");
const cartRows = document.querySelector("#cartRows");
const recomend = document.querySelector("#recomendProducts");
const totalMain = document.querySelector("#total-main");
const totalSub = document.querySelector("#total-sub");
const cartRowsRow = document.querySelector("#cartRowsRow");

let cart = JSON.parse(localStorage.getItem("cart_items")) || [];

// add the getPrice function to the cart items
function addGetPrice(){
    cart.forEach(item => {
        item.getPrice = function() {
            return this.quantity * this.price;
        };
    });
}
addGetPrice()

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

let recomendProducts = JSON.parse(localStorage.getItem("recomendProducts"))|| [
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

//the statement will be performed only in the shop page
if (location.pathname == "/shop.html") {
    displayProducts();
}

//the statement will be preformed only in the cart page
if (location.pathname == "/cart.html") {
    displayCart();
    displayRecomendProducts();
}

// display the products in the shop page
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

// a function that perform the event of adding products to cart
function addToCart(product_id) {
    if (location.pathname == "/cart.html") {
        for (let i = 0; i < recomendProducts.length; i++) {
            if (product_id == recomendProducts[i].id) {
                if (recomendProducts[i].addedToCart == false) {
                    recomendProducts[i].addedToCart = true;
    
                    // Push a new object to the cart with the getPrice method
                    cart.push({
                        id: recomendProducts[i].id,
                        name: recomendProducts[i].name,
                        image: recomendProducts[i].image,
                        price: recomendProducts[i].price,
                        quantity: recomendProducts[i].quantity,
                        getPrice: recomendProducts[i].getPrice 
                    });
    
                    localStorage.setItem("recomendProducts", JSON.stringify(recomendProducts));
                    localStorage.setItem("cart_items", JSON.stringify(cart));
                    addGetPrice();
                    displayCart();
                    successpopup();
                }
            }
        }
    }
    else{
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
                        getPrice: products[i].getPrice 
                    });
                    localStorage.setItem("ex_products", JSON.stringify(products));
                    localStorage.setItem("cart_items", JSON.stringify(cart));
                    successpopup();
                }
            }
        }
    }
    console.log(cart);
}

// display the products in the cart page
// function displayCart() {
//     let box = "";
//     for (let i = 0; i < cart.length; i++) {
//         box += `
//                 <tr class="">
//                     <td class="delete-td p-3"><button class="btn-delete text-danger p-2 px-3 btn mt-4 border" onclick = "deleteFromCart(${i})"><i class="fa-solid fa-xmark"></i></button></td>
//                     <td class="img-td p-3  border"><img src="images/${cart[i].image}" alt=""></td>
//                     <td class="Product-name-td p-3  border"><h5>${cart[i].name}</h5></td>
//                     <td class="Price-td p-3  border">$ ${cart[i].price}</td>
//                     <td class="Quantity-td p-3  border ">
//                         <div class="quantitiy d-flex justify-content-center">
//                             <button class="btn btn-plus bg-light" onclick = "quantityMines(${i})">-</button>
//                             <input type="number" class="q-input w-25 text-center no-spinners" value="${cart[i].quantity}"  >
//                             <button class="btn btn-mines bg-light" onclick = "quantityPlus(${i})">+</button>
//                         </div>
//                     </td>
//                     <td class="Subtotal-td p-3  border">$ ${cart[i].getPrice()}</td>
//                 </tr>
//                 `;
//     }
//     cartRows.innerHTML = box;
//     getTotal()
// }
function displayCart() {
    let box = "";
    for (let i = 0; i < cart.length; i++) {
        box += `
                <div class="col-12 row border p-sm-2 align-content-center mx-auto mb-sm-3 bg-main my-md-0 border-b-sm">
                    <div class="col-sm-12 col-md-1  delete-td p-3 d-flex justify-content-center align-content-center position-relative ">
                        <button class="btn-delete text-danger p-2 px-3 btn  border position-absolute top-50 start-50 translate-middle" onclick = "deleteFromCart(${i})">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="col-sm-12 col-md-3 bg-white img-cart p-3  border ">
                        <img src="images/${cart[i].image}" class="w-50 w-sm-100" alt="">
                    </div>
                    <div class="col-sm-12 col-md-2 bg-white Product-name-td p-3  border d-flex align-items-center">
                        <span class=" me-2 fw-bold d-md-none">name: </span>
                        <h5 class="m-0 fw-normal">${cart[i].name}</h5>
                    </div>
                    <div class="col-sm-12 col-md-1 bg-white Price-td p-3 border d-flex align-items-center">
                        <span class=" me-2 fw-bold d-md-none">Price: </span>
                        $${cart[i].price}
                    </div>
                    <div class="col-sm-12 col-md-3 bg-white Quantity-td p-3 border d-flex align-items-center justify-content-center">
                        <span class=" me-2 fw-bold d-md-none">Quantity: </span>
                        <div class="quantitiy d-flex  justify-content-center">
                            <button class="btn btn-plus bg-light m-2" onclick="quantityMines(${i})">-</button>
                            <input type="number" class="q-input w-25 text-center no-spinners mx-2" value="${cart[i].quantity}" onkeyup= "quantitytybe(${i})" >
                            <button class="btn btn-mines bg-light mt-2" onclick="quantityPlus(${i})">+</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-2 bg-white Subtotal-td p-3 border d-flex align-items-center ">
                        <span class=" me-2 fw-bold d-md-none">Suptotal: </span>
                        $${cart[i].getPrice()}
                    </div>
                </div>
                `;
    }
    let boxheader = `
                <div class="col-12 row border p-sm-2 align-content-center mx-auto bg-main pb-sm-2 row_header_caer rounded-top mb-0">
                    <div class="col-sm-12 col-md-1 bg-light  delete-td p-1 d-flex justify-content-center align-content-center position-relative "></div>
                    <div class="col-sm-12 col-md-3 bg-light img-cart p-1  border "></div>
                    <div class="col-sm-12 col-md-2 bg-light Product-name-td p-1  border d-flex align-items-center">
                        <p class="mb-0 fw-bold ms-2">Product</p>
                    </div>
                    <div class="col-sm-12 col-md-1 bg-light Price-td p-1  border d-flex align-items-center">
                        <p class="mb-0 fw-bold ms-2">Price</p>
                    </div>
                    <div class="col-sm-12 col-md-3 bg-light Quantity-td p-1  border d-flex align-items-center">
                        <p class="mb-0 fw-bold ms-2">Quantity</p>
                    </div>
                    <div class="col-sm-12 col-md-2 bg-light Subtotal-td p-1  border d-flex align-items-center">
                        <p class="mb-0 fw-bold ms-2">Subtotal</p>
                    </div>
                </div>
    `; 
    cartRowsRow.innerHTML = boxheader + box;
    getTotal()
}

// will update the value of the total
function getTotal(){
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].getPrice()
    }
    totalMain.innerHTML = `$${total}`;
    totalSub.innerHTML = `$${total}`;
}

// display the products in the cart page
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

//FIXME:
const qInput = document.querySelectorAll(".q-input");

// function quantityInputFormater() {
//     let nums = ["1","2","3","4","5","6","7","8","9","0"];
//     let gojo = (e)=>{
//         if (e.value == "NaN") {
//             e.value = 1
//         }
//         if (e.value.length <1) {
//             this.value = 1
//         }
//         // if (!nums.includes(this.key)) {
//         // }  
//         e.value = parseInt(e.value)   
//     }
//     gojo()
// }

//FIXME:
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
            getTotal()
        })    
    });
}

function quantitytybe(count){
    if (qInput[count].value.length <1) {
        qInput[count].value = 1
    }
    cart[count].quantity = qInput[count].value;
    displayCart()
    getTotal()
    localStorage.setItem("cart_items", JSON.stringify(cart));
    console.log(cart[count]);
    
}

/*qInput.forEach((e)=>{
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
});*/

// increace the quantity of a product
function quantityPlus(count) {
    cart[count].quantity ++;
    localStorage.setItem("cart_items", JSON.stringify(cart));
    displayCart();
    
    getTotal()
}

// dicreace the quantity of a product
function quantityMines(count) {
    if (cart[count].quantity >=2) {
        cart[count].quantity --;
    }
    localStorage.setItem("cart_items", JSON.stringify(cart));
    displayCart();
    getTotal()
}

// delete products from the cart and update the product list
function deleteFromCart(count) {
    for (let i = 0; i < products.length; i++) {
        if (cart[count].id == products[i].id) {
            products[i].addedToCart = false;
            localStorage.setItem("ex_products", JSON.stringify(products));
        }
    }
    for (let i = 0; i < recomendProducts.length; i++) {
        if (cart[count].id == recomendProducts[i].id) {
            recomendProducts[i].addedToCart = false;
            localStorage.setItem("recomendProducts", JSON.stringify(recomendProducts));
        }
    }
    cart.splice(count,1)
    addGetPrice()
    console.log(cart);
    localStorage.setItem("cart_items", JSON.stringify(cart));    
    displayCart()
}


function successpopup() {
    let successAnime = document.querySelector(".successAnime");
    successAnime.classList.toggle("d-none") 
    setTimeout(()=>{
        successAnime.classList.toggle("opacity-0") 
    },1000)
    setTimeout(()=>{
        successAnime.classList.toggle("opacity-0") 
        setTimeout(()=>{
            successAnime.classList.toggle("d-none") 
        },2000)
    },3500)
}
// let showCArtbtn = document.querySelector("#howbtn");
// showCArtbtn.addEventListener("click",()=>{

//     location.assign(`/cart.html`)
// })