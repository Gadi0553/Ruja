// Función para mostrar los productos en el carrito
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const catalogoSection = document.getElementById('catalogo');

    // Limpiar la sección de productos antes de mostrar los elementos del carrito
    catalogoSection.innerHTML = '';

    cart.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <span>${product.price}</span>
        `;
        catalogoSection.appendChild(productDiv);
    });
}

// Llamar a displayCart() para mostrar los productos cuando la página se carga
window.onload = displayCart;
