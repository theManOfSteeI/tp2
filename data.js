import { getGamingProducts } from './mock.js';

const renderProductosDestacados = () => {
    const productos = getGamingProducts();
    const productosDestacados = productos.filter(producto => producto.destacado);
    const contenedor = document.getElementById('productos-destacados');

    productosDestacados.forEach(producto => {
        
        const card = document.createElement('div');
        card.className = 'card m-3 col-12 col-md-12 col-lg-12';
        card.style.width = '18rem';
        card.style.background = '#FF0099';

        // Crear el enlace
        const link = document.createElement('a');
        link.href = "#"; // Actualiza esto con el enlace correcto

        
        const img = document.createElement('img');
        //img.src = `/public/images/${producto.imagen}`; //ruta de la imagen en archivo
        img.src = producto.imagen; //ruta de la imagen en enlace
        img.className = 'card-img-top mt-2';
        img.alt = producto.nombre;

        // imagen al enlace
        link.appendChild(img);

       
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        //titulo
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = producto.nombre;
        cardTitle.className = 'text-white';

        //título a tarjeta
        cardBody.appendChild(cardTitle);

        //enlace a la card
        card.appendChild(link);
        card.appendChild(cardBody);

        // tarjeta al contenedor
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderProductosDestacados);




const renderProductosOfertas = () => {
    const productos = getGamingProducts();
    const productosOferta = productos.filter(producto => producto.enOferta);
    const contenedor = document.getElementById('productos-ofertas');

    productosOferta.forEach(producto => {
        
        const card = document.createElement('div');
        card.className = 'card m-3 col-12 col-md-12 col-lg-12';
        card.style.width = '18rem';
        card.style.background = '#FF0099';

       
        const link = document.createElement('a');
        link.href = "#"; 

        
        const img = document.createElement('img');
        //img.src = `/public/images/${producto.imagen}`; //ruta de la imagen en archivo
        img.src = producto.imagen; //ruta de la imagen en enlace 
        img.className = 'card-img-top mt-2';
        img.alt = producto.nombre;

        
        link.appendChild(img);

        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = producto.nombre;
        cardTitle.className = 'text-white';

        
        cardBody.appendChild(cardTitle);

        
        card.appendChild(link);
        card.appendChild(cardBody);

        
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderProductosOfertas);

