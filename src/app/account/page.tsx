"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const AccountPage: React.FC = () => {
  const { data: session } = useSession(); // Recupera la sesión del usuario

  const handleDeleteUser = async () => {
    try {
      const response = await fetch("/api/delete-user", {
        method: "DELETE",
      });

      if (!response.ok) {
        console.error("Error al eliminar usuario");
        return;
      }

      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Error en handleDeleteUser:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header session={session} />

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
              <p>{session?.user?.email ?? "Correo no disponible"}</p>

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
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AccountPage;
