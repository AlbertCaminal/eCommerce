"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const AccountPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header session={null} />

      {/* Main Content */}
      <main className="flex flex-1 bg-gray-50">
        <div className="mx-auto flex w-full max-w-7xl flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full border-b border-gray-200 bg-white p-3 md:w-1/4 md:border-b-0 md:border-r md:p-6">
            <div className="rounded bg-gray-100 p-3 shadow-sm md:p-4">
              <h2 className="text-lg font-bold md:text-xl">JACK&JONES CLUB</h2>
              <p className="mt-1 text-sm text-gray-600 md:mt-2 md:text-base">
                0 POINT
              </p>
              <p className="text-sm text-gray-600 md:text-base">
                Al realizar una compra, puedes ganar más puntos
              </p>
              <button className="mt-3 w-full rounded bg-black py-1 text-sm text-white transition hover:bg-gray-800 md:mt-4 md:py-2 md:text-base">
                VER IDENTIFICACIÓN DE AFILIADO
              </button>
            </div>

            <nav className="mt-4 grid grid-cols-1 gap-2 md:mt-6 md:grid-cols-2">
              <button className="w-full rounded bg-gray-200 py-2 text-sm text-gray-700 transition hover:bg-gray-300 md:text-base">
                Página Principal
              </button>
              <button className="w-full rounded bg-gray-200 py-2 text-sm text-gray-700 transition hover:bg-gray-300 md:text-base">
                Perfil del Usuario
              </button>
              <button className="w-full rounded bg-gray-200 py-2 text-sm text-gray-700 transition hover:bg-gray-300 md:text-base">
                Pedidos
              </button>
              <button className="w-full rounded bg-gray-200 py-2 text-sm text-gray-700 transition hover:bg-gray-300 md:text-base">
                Devoluciones
              </button>
              <button className="w-full rounded bg-gray-200 py-2 text-sm text-gray-700 transition hover:bg-gray-300 md:text-base">
                Loyalty
              </button>
              <button className="w-full rounded bg-gray-200 py-2 text-sm text-gray-700 transition hover:bg-gray-300 md:text-base">
                Preferencias
              </button>
              <button className="w-full rounded bg-gray-200 py-2 text-sm text-gray-700 transition hover:bg-gray-300 md:text-base">
                Asistencia
              </button>
            </nav>

            <div className="mt-4 text-sm text-gray-700 md:mt-6 md:text-base">
              <p>albertolome1@gmail.com</p>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Cierra la sesión y redirige a la página principal
                  void signOut({ callbackUrl: "/" });
                }}
                className="font-medium text-red-500 hover:underline"
              >
                Desconexión
              </Link>
            </div>
          </aside>

          {/* Content */}
          <section className="w-full bg-gray-100 p-3 md:w-3/4 md:p-8">
            <h1 className="text-lg font-bold md:text-2xl">
              Bienvenido, albertolome1@gmail.com
            </h1>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-6 md:grid-cols-3 md:gap-6">
              <div className="rounded bg-white p-3 text-center shadow-sm md:p-4">
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  OFERTAS Y DESCUENTOS ESPECIALES
                </p>
              </div>
              <div className="rounded bg-white p-3 text-center shadow-sm md:p-4">
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  COMPRA Y OBTÉN PUNTOS CON CADA COMPRA
                </p>
              </div>
              <div className="rounded bg-white p-3 text-center shadow-sm md:p-4">
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  DISFRUTA DE UN 10 % DE DTO. EN TU 1.ª COMPRA
                </p>
              </div>
            </div>

            <h2 className="mt-4 text-base font-bold md:mt-8 md:text-xl">
              Visto Recientemente
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 md:gap-4">
              <div className="rounded bg-white p-3 text-center shadow-sm md:p-4">
                <img
                  src="/images/item1.jpg"
                  alt="Pantalones Cargo"
                  className="mb-2 rounded"
                />
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  Pantalones Cargo Cortes
                </p>
                <p className="text-sm text-gray-600 md:text-base">49.99 €</p>
              </div>
              <div className="rounded bg-white p-3 text-center shadow-sm md:p-4">
                <img
                  src="/images/item2.jpg"
                  alt="Jeans"
                  className="mb-2 rounded"
                />
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  JIGLENN JJORGIGINAL SQ 223
                </p>
                <p className="text-sm text-gray-600 md:text-base">29.99 €</p>
              </div>
              <div className="rounded bg-white p-3 text-center shadow-sm md:p-4">
                <img
                  src="/images/item3.jpg"
                  alt="Jeans"
                  className="mb-2 rounded"
                />
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  JIGLENN JJORGIGINAL SQ 270
                </p>
                <p className="text-sm text-gray-600 md:text-base">29.99 €</p>
              </div>
              <div className="rounded bg-white p-3 text-center shadow-sm md:p-4">
                <img
                  src="/images/item4.jpg"
                  alt="Jeans"
                  className="mb-2 rounded"
                />
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  JIGLENN JJORGIGINAL SQ 349
                </p>
                <p className="text-sm text-gray-600 md:text-base">29.99 €</p>
              </div>
              <div className="rounded bg-white p-3 text-center shadow-sm md:p-4">
                <img
                  src="/images/item5.jpg"
                  alt="Pantalones Cargo Junior"
                  className="mb-2 rounded"
                />
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  Pantalones Cargo Junior
                </p>
                <p className="text-sm text-gray-600 md:text-base">39.99 €</p>
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
