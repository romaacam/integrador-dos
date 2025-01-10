import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './componentes/Navegacion';
import Footer from './componentes/Footer';
import { ProductProvider } from './pages/Productos';


import Home from './pages/Home';
import Productos from './pages/Productos';
import Alta from './pages/Alta';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';


function App() {
    return (
        <>
                <ProductProvider>
                <Navegacion />
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/alta" element={<Alta />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

                <Footer />
                </ProductProvider>
        </>
    )
}

export default App;