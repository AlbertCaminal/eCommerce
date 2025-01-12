"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const AccountPage: React.FC = () => {
  const handleDeleteUser = async () => {
    try {
      // 1. Eliminar el usuario en la base de datos (usando el endpoint que creamos)
      const response = await fetch("/api/delete-user", {
        method: "DELETE",
      });

      if (!response.ok) {
        // Maneja el error, p. ej. mostrar un mensaje
        console.error("Error al eliminar usuario");
        return;
      }

      // 2. Después de borrar en la BD, cerramos la sesión
      //    y redirigimos a la página principal (o donde quieras).
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Error en handleDeleteUser:", error);
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
              <p className="mt-1 md:mt-2 text-gray-600 text-sm md:text-base">
                0 POINT
              </p>
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

              {/* Botón de Desconexión normal */}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  void signOut({ callbackUrl: "/" });
                }}
                className="text-red-500 hover:underline font-medium"
              >
                Desconexión
              </Link>

              {/* Botón para Eliminar usuario y luego cerrar sesión */}
              <button
                onClick={handleDeleteUser}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition text-sm md:text-base"
              >
                Eliminar cuenta
              </button>
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

            <h2 className="mt-4 md:mt-8 text-base md:text-xl font-bold">
              Visto Recientemente
            </h2>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 mt-4">
              <div className="text-center bg-white p-3 md:p-4 rounded shadow-sm">
                <img
                  src="/images/item1.jpg"
                  alt="Pantalones Cargo"
                  className="rounded mb-2"
                />
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Pantalones Cargo Cortes
                </p>
                <p className="text-gray-600 text-sm md:text-base">49.99 €</p>
              </div>
              <div className="text-center bg-white p-3 md:p-4 rounded shadow-sm">
                <img
                  src="/images/item2.jpg"
                  alt="Jeans"
                  className="rounded mb-2"
                />
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  JIGLENN JJORGIGINAL SQ 223
                </p>
                <p className="text-gray-600 text-sm md:text-base">29.99 €</p>
              </div>
              <div className="text-center bg-white p-3 md:p-4 rounded shadow-sm">
                <img
                  src="/images/item3.jpg"
                  alt="Jeans"
                  className="rounded mb-2"
                />
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  JIGLENN JJORGIGINAL SQ 270
                </p>
                <p className="text-gray-600 text-sm md:text-base">29.99 €</p>
              </div>
              <div className="text-center bg-white p-3 md:p-4 rounded shadow-sm">
                <img
                  src="/images/item4.jpg"
                  alt="Jeans"
                  className="rounded mb-2"
                />
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  JIGLENN JJORGIGINAL SQ 349
                </p>
                <p className="text-gray-600 text-sm md:text-base">29.99 €</p>
              </div>
              <div className="text-center bg-white p-3 md:p-4 rounded shadow-sm">
                <img
                  src="/images/item5.jpg"
                  alt="Pantalones Cargo Junior"
                  className="rounded mb-2"
                />
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Pantalones Cargo Junior
                </p>
                <p className="text-gray-600 text-sm md:text-base">39.99 €</p>
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
