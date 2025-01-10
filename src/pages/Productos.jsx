import React, { createContext, useState } from 'react';
import '../css/Productos.css';
import Zotac3060 from '../assets/img/zotac3060.png';
import Zotac3070 from '../assets/img/zotac3070.png';
import Msi4070 from '../assets/img/msi4070super.png';
import Asus4060 from '../assets/img/asus4060ti.png';
import Asus4080 from '../assets/img/asustuf4080.png';
import Asus4090 from '../assets/img/asustuf4090.png';

// Crear el contexto
export const ProductContext = createContext();

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
    const [products] = useState([
        {
            id: 1,
            name: 'Nvidia Zotac 3060',
            price: 300,
            description: 'Una tarjeta gráfica calidad/precio muy buena para gaming.',
            img: Zotac3060,
        },
        {
            id: 2,
            name: 'Nvidia Zotac 3070',
            price: 500,
            description: 'Buen rendimiento para gaming y creación de contenido.',
            img: Zotac3070,
        },
        {
            id: 3,
            name: 'Nvidia Msi 4070',
            price: 750,
            description: 'Excelente para gaming y creación de contenido.',
            img: Msi4070,
        },
        {
            id: 4,
            name: 'Nvidia Asus 4060',
            price: 350,
            description: 'Gama de entrada de la nueva generación de GPUs de Nvidia.',
            img: Asus4060,
        },
        {
            id: 5,
            name: 'Nvidia Asus 4080',
            price: 1100,
            description: 'Potencia máxima para gaming y creación de contenido.',
            img: Asus4080,
        },
        {
            id: 6,
            name: 'Nvidia Asus 4090',
            price: 1500,
            description: 'Tope de gama de Nvidia, solo para entusiastas.',
            img: Asus4090,
        },
    ]);

    const addProduct = (product) => {
        alert(`Producto agregado al carrito: ${product.name}`);
        localStorage.setItem('producto', JSON.stringify(product));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

// Componente Productos
const Productos = () => {
    return (
        <ProductContext.Consumer>
            {({ products, addProduct }) => (
                <main className="seccionCards">
                    <h1 className="tituloProductos">Productos</h1>
                    <section className="fila">
                        {products.map((product) => (
                            <div className="card" key={product.id}>
                                <img src={product.img} alt={product.name} />
                                <div className="cardContenido">
                                    <h3 className="cardTitulo">{product.name} ${product.price}</h3>
                                    <p className="cardDescripcion">{product.description}</p>
                                    <button
                                        className="comprar"
                                        onClick={() => addProduct(product)}
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            )}
        </ProductContext.Consumer>
    );
};

export default Productos;
