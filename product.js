import { getGamingProducts } from './mock.js';

document.addEventListener('DOMContentLoaded', () => {
    const products = getGamingProducts();
    const productList = document.getElementById("product-list");
    let productHTML = "";
    products.forEach((product) => {
        productHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${product.nombre}</h5>
                        <p class="card-text">${product.descripcion}</p>
                        <p class="card-text"><strong>Precio:</strong> $${product.precio}</p>
                        <p class="card-text"><strong>Descuento:</strong> ${product.descuento}%</p>
                        <p class="card-text"><strong>Stock:</strong> ${product.stock}</p>
                        <p class="card-text"><strong>Marca:</strong> ${product.marca}</p>
                        <button class="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
    });
    productList.innerHTML = productHTML;
});
