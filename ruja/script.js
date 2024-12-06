// Seleccionamos el campo de búsqueda y la lista de productos
const searchBar = document.getElementById('search-bar');
const products = document.querySelectorAll('.product');

// Añadimos un evento de entrada para filtrar productos
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productDescription = product.querySelector('p').textContent.toLowerCase();
        
        // Mostramos o escondemos el producto según la coincidencia con la búsqueda
        if (productName.includes(query) || productDescription.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});


    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".hero img");
        images.forEach((img) => {
            img.addEventListener("load", () => {
                img.classList.add("loaded"); // Agrega la clase para activar la animación
            });
        });
    });

    function showProductModal(image, title, description, price) {
        // Configurar el contenido del modal
        document.getElementById("modalImage").src = image;
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDescription").textContent = description;
        document.getElementById("modalPrice").textContent = price;
    
        // Crear el enlace a WhatsApp
        const whatsappMessage = `Quiero comprar este artículo: ${title} (${price}).`;
        document.getElementById("whatsappLink").href = `https://wa.me/18094784211?text=${encodeURIComponent(whatsappMessage)}`;
    
        // Mostrar el modal
        document.getElementById("productModal").style.display = "flex";
    }
    
    function closeProductModal() {
        // Ocultar el modal
        document.getElementById("productModal").style.display = "none";
    }
    
    function showProductModal(imageSrc, title, description, price) {
        document.getElementById('modalImage').src = imageSrc;
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDescription').textContent = description;
        document.getElementById('modalPrice').textContent = price;
        document.getElementById('whatsappLink').href = `https://wa.me/18094784211?text=Quiero%20comprar%20este%20artículo:%20${title}%20por%20${price}`;
        document.getElementById('productModal').style.display = 'block';
    }
    
    function closeProductModal() {
        document.getElementById('productModal').style.display = 'none';
    }
    
// Array para almacenar los productos en el carrito
let cart = [];

// Función para mostrar el modal y llenar los datos
function showProductModal(imageSrc, title, description, price) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('whatsappLink').href = `https://wa.me/18094784211?text=Quisiera comprar ${title} por ${price}`;

    // Mostrar el modal
    document.getElementById('productModal').style.display = 'block';
}

// Función para cerrar el modal
function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Función para añadir productos al carrito
function addToCart() {
    const title = document.getElementById('modalTitle').textContent;
    const description = document.getElementById('modalDescription').textContent;
    const price = document.getElementById('modalPrice').textContent;

    // Crear un objeto para el producto
    const product = {
        title,
        description,
        price,
        image: document.getElementById('modalImage').src
    };

    // Añadir el producto al carrito
    cart.push(product);

    // Almacenar el carrito en localStorage (opcional)
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${title} ha sido añadido al carrito`);
}

// Función para mostrar los productos en el carrito
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSection = document.getElementById('cartSection');
    const cartItemsContainer = document.getElementById('cartItems');

    // Limpiar la sección de productos en el carrito antes de mostrar los elementos
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        cart.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <span>${product.price}</span>
            `;
            cartItemsContainer.appendChild(productDiv);
        });
    }
}

// Llamar a displayCart() para mostrar los productos en el carrito cuando la página se carga
window.onload = displayCart;


