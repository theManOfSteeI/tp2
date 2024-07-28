export const getGamingProducts = () => {
    return [
        {
            id: 1,
            nombre: "Teclado Mecánico RGB",
            descripcion: "Teclado mecánico con retroiluminación RGB, ideal para gaming.",
            categoria: "Periféricos",
            CategoriaId:1,
            precio: 80.00,
            descuento: 10, // en porcentaje
            stock: 20,
            marca: "HyperX",
            modelo: "Alloy FPS Pro",
            garantia: "2 años",
            destacado: true,
            enOferta: false,
            image: "Teclado_Mecanico_RGB.webp",
            peso: "900g",
            imagen: "https://www.hd-tecnologia.com/imagenes/articulos/2020/10/CORSAIR-presenta-un-nuevo-teclado-mecanico-para-juegos-el-CORSAIR-K60-RGB-PRO.jpg"
        },
        {
            id: 2,
            nombre: "Mouse Gaming Inalámbrico",
            descripcion: "Mouse inalámbrico con sensor óptico de alta precisión.",
            categoria: "Periféricos",
            CategoriaId:1,
            precio: 60.00,
            descuento: 5,
            stock: 15,
            marca: "Logitech",
            modelo: "G Pro Wireless",
            garantia: "1 año",
            destacado: true,
            enOferta: false,
            image: "Mouse Gaming Inalámbrico Logitech.jpg",
            peso: "80g",
            imagen: "https://www.malditohard.com.ar/wp-content/uploads/product/8/MOU061.webp"
        },
        {
            id: 3,
            nombre: "Monitor Gaming 27'' 144Hz",
            descripcion: "Monitor de 27 pulgadas con tasa de refresco de 144Hz y resolución 2K.",
            categoria: "Monitores",
            CategoriaId:2,
            precio: 300.00,
            descuento: 15,
            stock: 10,
            marca: "ASUS",
            modelo: "ROG Strix",
            garantia: "3 años",
            destacado: true,
            enOferta: true,
            image: "Monitor_Gaming_27_144Hz.webp",
            peso: "4.5kg",
            imagen: "https://www.qloud.ar/SITES/IMG/gaming-point-06-2021/221_06-03-2023-03-03-55-2.png"
        },
        {
            id: 4,
            nombre: "Tarjeta Gráfica RTX 3080",
            descripcion: "Tarjeta gráfica de alto rendimiento con 10GB de memoria GDDR6X.",
            categoria: "Componentes",
            CategoriaId:3,
            precio: 800.00,
            descuento: 20,
            stock: 5,
            marca: "NVIDIA",
            modelo: "GeForce RTX 3080",
            garantia: "3 años",
            destacado: false,
            enOferta: true,
            image: "Tarjeta Gráfica RTX 3080 NVIDIA.jpg",
            peso: "1.4kg",
            imagen: "https://www.ozeros.com/wp-content/uploads/2020/10/MSI-GEFORCE-RTX-3080-GAMING-X-TRIO-10G-1.jpg"
        },
        {
            id: 5,
            nombre: "Auriculares Gaming con Micrófono",
            descripcion: "Auriculares con sonido envolvente 7.1 y micrófono retráctil.",
            categoria: "Periféricos",
            CategoriaId:1,
            precio: 50.00,
            descuento: 10,
            stock: 25,
            marca: "Razer",
            modelo: "Kraken",
            garantia: "1 año",
            destacado: false,
            enOferta: true,
            image: "Auriculares Gaming con Micrófono Razer.jpg",
            peso: "350g",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vm5t80tSqb_Bw5YdcZvEGtwi8jBYiT4P7w&s"
        },
        {
            id: 6,
            nombre: "Silla Gaming Ergonómica",
            descripcion: "Silla ergonómica ajustable con soporte lumbar y reposabrazos 4D.",
            categoria: "Mobiliario",
            CategoriaId:4,
            precio: 150.00,
            descuento: 10,
            stock: 8,
            marca: "DXRacer",
            modelo: "Formula Series",
            garantia: "2 años",
            destacado: false,
            enOferta: true,
            image: "Silla Gaming Ergonómica DXRacer.webp",
            peso: "22kg",
            imagen: "https://img.freepik.com/fotos-premium/silla-gaming-ergonomica-colores-vibrantes-00478-01_883586-53770.jpg?w=826"
        }
    ];
}


export const getProductCategories = () => {
    return [
        {
            id: 1,
            nombre: "Periféricos",
            precioMin: 50.00,
            precioMax: 200.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                "Teclado Mecánico RGB.webp",
                "Mouse Gaming Inalámbrico",
                "Auriculares Gaming con Micrófono"
            ],
            descripcion: "Dispositivos adicionales que mejoran la experiencia de uso de una computadora.",
            popularidad: 4.5 // escala del 1 al 5
        },
        {
            id: 2,
            nombre: "Monitores",
            precioMin: 100.00,
            precioMax: 600.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Monitor Gaming 27'' 144Hz",
                "Monitor UltraWide 34''"
            ],
            descripcion: "Pantallas de alta definición para visualizar el contenido de la computadora.",
            popularidad: 4.0
        },
        {
            id: 3,
            nombre: "Componentes",
            precioMin: 30.00,
            precioMax: 1200.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                "Tarjeta Gráfica RTX 3080",
                "Procesador Intel i9",
                "Disco Duro SSD 1TB"
            ],
            descripcion: "Partes internas esenciales para el funcionamiento de una computadora.",
            popularidad: 4.8
        },
        {
            id: 4,
            nombre: "Mobiliario",
            precioMin: 100.00,
            precioMax: 500.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Silla Gaming Ergonómica",
                "Escritorio Ajustable"
            ],
            descripcion: "Muebles diseñados para proporcionar comodidad y soporte durante el uso de la computadora.",
            popularidad: 4.2
        },
        {
            id: 5,
            nombre: "Almacenamiento",
            precioMin: 20.00,
            precioMax: 300.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                "Disco Duro Externo 2TB",
                "Pendrive 128GB"
            ],
            descripcion: "Dispositivos utilizados para guardar y transportar datos digitales.",
            popularidad: 4.3
        },
        {
            id: 6,
            nombre: "Audio",
            precioMin: 30.00,
            precioMax: 200.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Altavoces Bluetooth",
                "Auriculares Inalámbricos"
            ],
            descripcion: "Equipos para la reproducción y grabación de sonido.",
            popularidad: 4.6
        }
    ];
}
