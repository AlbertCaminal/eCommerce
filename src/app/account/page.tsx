"use client";

import React from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import Link from 'next/link';

const AccountPage: React.FC = () => {

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Evita el comportamiento por defecto de <a>

    try {
      // Llamamos a la ruta /api/logout (o la que hayas configurado),
      // usando el método POST
      const res = await fetch('/api/logout', { method: 'POST' });

      if (res.ok) {
        // Redirige a donde tú quieras, por ejemplo la página principal
        window.location.href = '/';
      } else {
        console.error('Error cerrando sesión:', await res.json());
      }
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header session={null} />

      {/* Main Content */}
      <main className="flex flex-1 bg-gray-50">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">

          {/* Sidebar */}
          <aside className="w-full md:w-1/4 bg-white p-3 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="bg-gray-100 p-3 md:p-4 rounded shadow-sm">
              <h2 className="text-lg md:text-xl font-bold">JACK&JONES CLUB</h2>
              <p className="mt-1 md:mt-2 text-gray-600 text-sm md:text-base">0 POINT</p>
              <p className="text-gray-600 text-sm md:text-base">
                Al realizar una compra, puedes ganar más puntos
              </p>
              <button className="mt-3 md:mt-4 w-full bg-black text-white py-1 md:py-2 rounded hover:bg-gray-800 transition text-sm md:text-base">
                VER IDENTIFICACIÓN DE AFILIADO
              </button>
            </div>

            <nav className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base">
                Página Principal
              </button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base">
                Perfil del Usuario
              </button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base">
                Pedidos
              </button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base">
                Devoluciones
              </button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base">
                Loyalty
              </button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base">
                Preferencias
              </button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base">
                Asistencia
              </button>
            </nav>

            <div className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base">
              <p>albertolome1@gmail.com</p>
              {/* Aquí modificamos el link para que use handleLogout */}
              <Link
                href="#"
                onClick={handleLogout}
                className="text-red-500 hover:underline font-medium"
              >
                Desconexión
              </Link>
            </div>
          </aside>

          {/* Content */}
          <section className="w-full md:w-3/4 bg-gray-100 p-3 md:p-8">
            <h1 className="text-lg md:text-2xl font-bold">
              Bienvenido, albertolome1@gmail.com
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mt-4 md:mt-6">
              <div className="bg-white p-3 md:p-4 text-center rounded shadow-sm">
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  OFERTAS Y DESCUENTOS ESPECIALES
                </p>
              </div>
              <div className="bg-white p-3 md:p-4 text-center rounded shadow-sm">
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  COMPRA Y OBTÉN PUNTOS CON CADA COMPRA
                </p>
              </div>
              <div className="bg-white p-3 md:p-4 text-center rounded shadow-sm">
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  DISFRUTA DE UN 10 % DE DTO. EN TU 1.ª COMPRA
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AccountPage;
