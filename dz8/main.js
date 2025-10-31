const key = "app_cart";

const loadCart = () => {
  return JSON.parse(localStorage.getItem(key)) || [];
}

const saveCart = (cart) => {
  localStorage.setItem(key, JSON.stringify(cart));
}

const renderCart = () => {
  const cart = loadCart();
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "product";
div.innerHTML = `
    <span>${item.nameProduct} (${item.count} шт.) - ${item.price} сом</span>
        <button onclick="deleteProduct(${index})">Удалить</button>
    `;
    cartDiv.appendChild(div);
    });

    const totalCount = cart.reduce((sum, p) => sum + Number(p.count), 0);
    const totalPrice = cart.reduce((sum, p) => sum + p.count * p.price, 0);

    document.getElementById("totalCount").textContent = totalCount;
    document.getElementById("totalPrice").textContent = totalPrice;
}

document.getElementById("addBtn").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const count = Number(document.getElementById("count").value);
    const price = Number(document.getElementById("price").value);

    if (!name || count <= 0 || price < 0) {
    alert("Введите корректные данные!");
    return;
    }

    const cart = loadCart();
    cart.push({ nameProduct: name, count, price });
    saveCart(cart);
    renderCart();

    document.getElementById("name").value = "";
    document.getElementById("count").value = 1;
    document.getElementById("price").value = "";
});

const deleteProduct = (index) => {
    const cart = loadCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

document.getElementById("clearBtn").addEventListener("click", () => {
    localStorage.removeItem(key);
    renderCart();
});

renderCart();