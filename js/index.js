// let r1 = document.getElementById("r1");
let r1 = $("#r1");
let r2 = $("#r2");

let data = "";
let ArrayObject = [
    { name: "FOssil", image: "images/product4.png", price: 1250 },
    { name: "Hamilton", image: "images/product2.png", price: 1100 },
    { name: "Mido", image: "images/product3.png", price: 850 }
];

let data1 = "";
let ArrayObject1 = [
    { name: "Silver", image: "images/men's1.jpg", price: 999 },
    { name: "Golden", image: "images/men's2.jpg", price: 1199 },
    { name: "Luxury", image: "images/men's3.jpg", price: 1599 }
];
for (let i = 0; i < ArrayObject.length; i++) {

    data += `
    <div class="col-lg-3 col-md-10 mt-5 sm-12">
        <div class="card card-container">
            <div class="card-img-top">
                <img src="`+ ArrayObject[i].image + `" height = 200px; width = 200px;>
            </div>
            <div class="card-body ">
                <h1 class="card-title">
                    `+ ArrayObject[i].name + `
                </h1>
                <p class="card-text"> $`+ ArrayObject[i].price + `</p>
                <button class = "btn btn-outline-primary">Order Now</button>
            </div>
        </div>
    </div>
    `
};
for (let i = 0; i < ArrayObject1.length; i++) {

    data1 += `
    <div class="col-lg-3 col-md-10 mt-5 sm-12">
        <div class="card card-container">
            <div class="card-img-top">
                <img src="`+ ArrayObject1[i].image + `" height = 200px; width = 200px;>
            </div>
            <div class="card-body ">
                <h1 class="card-title">
                    `+ ArrayObject1[i].name + `
                </h1>
                <p class="card-text"> $`+ ArrayObject1[i].price + `</p>
                <button class = "btn btn-outline-primary">Order Now</button>
            </div>
        </div>
    </div>
    `
};

r1.html(data);
r2.html(data1);
