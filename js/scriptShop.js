const productsRows = document.querySelector("#productsRows");

if (localStorage.getItem("cart_items") == null) {
    var cart = [];
}else{
    var cart = JSON.parse(localStorage.getItem("cart"));
}

if (localStorage.getItem("ex_products") == null) {
    var products = [
        {
            name:"package1",
            image:"package2.jpg",
            price:34,
            addedToCart:false,
            id:1
        },
        {
            name:"package2",
            image:"package3.jpg",
            price:20,
            addedToCart:false,
            id:2
        },
        {
            name:"package3",
            image:"package4.jpg",
            price:40,
            addedToCart:false,
            id:3
        },
        {
            name:"package4",
            image:"package5.jpg",
            price:23,
            addedToCart:false,
            id:4
        },
        {
            name:"package5",
            image:"package6.jpg",
            price:39,
            addedToCart:false,
            id:5
        },
        {
            name:"package6",
            image:"package7.jpg",
            price:57,
            addedToCart:false,
            id:6
        },
        {
            name:"package7",
            image:"package8.jpg",
            price:84,
            addedToCart:false,
            id:7
        }
    ];
    displayProducts()

}else{
    var products = JSON.parse(localStorage.getItem("ex_products"));
    displayProducts()

}

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
function addToCart(prodcut_id) {
    console.log(products);
    
    for (let i = 0 ; i<products.length; i++) {
        if (prodcut_id == products[i].id) {
            if (products[i].addedToCart == false) {
                // cart.push(products[i]);
                cart.push(products[i]);
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