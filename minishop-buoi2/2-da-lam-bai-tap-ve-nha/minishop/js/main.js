let price = 250000;
typeof price;

price = "hai trăm";
typeof price;

const SHOP = "MiniShop";
SHOP = "Khác";

// 7 / 2;
Math.floor(7 / 2);

"5" == 5;
"5" === 5;
"5" + 5;
Number("5") + 5;

let tenSanPham = "Chuột M1";
`Sản phẩm: ${tenSanPham}`;

function formatPrice(amount) {
    return amount.toLocaleString("vi-VN") + " đ";
}

const products = [
    { id: 1, name: "Chuột không dây M1", price: 250000 },
    { id: 2, name: "Bàn phím cơ K2", price: 790000 },
    { id: 3, name: "Tai nghe Bluetooth T3", price: 450000 },
];

console.log(products.length);
console.log(products[0].name);

let total = 0;
for (let i = 0; i < products.length; i++) {
    total += products[i].price;
}

console.log("Tổng:", formatPrice(total));

for (const product of products) {
    console.log(`${product.name}: ${formatPrice(product.price)}`);
}

products.forEach(function (product) {
    console.log(product.id, product.name);
});

products.push({ id: 4, name: "USB 64GB U4", price: 150000 });
console.log(products.length);

const cheap = products.filter(function (product) {
    return product.price < 300000;
});

console.log(cheap);

function formatPrice(amount) {
    return amount.toLocaleString("vi-VN") + " đ";
}

const CART_KEY = "minishop_cart";

function getCart() {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : {};
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function updateCartCount() {
    const cart = getCart();
    let count = 0;

    for (const id in cart) {
        count += cart[id];
    }

    const badge = document.querySelector("#cart-count");

    if (badge) {
        badge.textContent = count;
    }
}

function addToCart(id) {
    const cart = getCart();
    cart[id] = (cart[id] || 0) + 1;
    saveCart(cart);
    updateCartCount();
}

document.querySelectorAll(".add-to-cart").forEach(function (button) {
    button.addEventListener("click", function () {
        addToCart(button.dataset.id);
    });
});

updateCartCount();

function updateCartTotals(table) {
    let total = 0;

    table.querySelectorAll("tbody tr").forEach(function (row) {
        const price = Number(row.dataset.price);
        const qty = Number(row.querySelector(".qty").value);
        const lineTotal = price * qty;

        row.querySelector(".line-total").textContent = formatPrice(lineTotal);
        total += lineTotal;
    });

    document.querySelector("#cart-total").textContent = formatPrice(total);
}

const cartTable = document.querySelector(".cart-table");

if (cartTable) {
    cartTable.addEventListener("input", function () {
        updateCartTotals(cartTable);
    });

    updateCartTotals(cartTable);
}

const registerForm = document.querySelector("#register-form");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        const password = document.querySelector("#password").value;
        const password2 = document.querySelector("#password2").value;
        const error = document.querySelector("#password-error");

        if (password !== password2) {
            event.preventDefault();
            error.textContent = "Hai mật khẩu không khớp nhau.";
        } else {
            error.textContent = "";
        }
    });
}