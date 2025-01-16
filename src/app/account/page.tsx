"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const AccountPage: React.FC = () => {
  const { data: session } = useSession(); // Recupera la sesión del usuario
  const [activeSection, setActiveSection] = useState("home"); // Estado para manejar el contenido

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

  const renderSectionContent = () => {
    switch (activeSection) {
      case "home":
        return <p>Este es el contenido de la Página Principal.</p>;
      case "profile":
        return <p>Este es el contenido del Perfil del Usuario.</p>;
      case "orders":
        return <p>Este es el contenido de los Pedidos.</p>;
      case "returns":
        return <p>Este es el contenido de las Devoluciones.</p>;
      case "loyalty":
        return <p>Este es el contenido de Loyalty.</p>;
      case "preferences":
        return <p>Este es el contenido de las Preferencias.</p>;
      case "support":
        return <p>Este es el contenido de Asistencia.</p>;
      default:
        return <p>Selecciona una opción del menú.</p>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header session={session} />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-2/5 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h2 className="text-xl font-bold text-gray-800">JACK&JONES CLUB</h2>
              <p className="mt-2 text-gray-600">0 POINT</p>
              <p className="text-gray-600">
                Al realizar una compra, puedes ganar más puntos.
              </p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition text-sm">
                VER IDENTIFICACIÓN DE AFILIADO
              </button>
            </div>

            <nav className="mt-6 grid grid-cols-1 gap-4">
              <button
                onClick={() => setActiveSection("home")}
                className={`w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm ${
                  activeSection === "home" ? "bg-gray-300" : ""
                }`}
              >
                Página Principal
              </button>
              <button
                onClick={() => setActiveSection("profile")}
                className={`w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm ${
                  activeSection === "profile" ? "bg-gray-300" : ""
                }`}
              >
                Perfil del Usuario
              </button>
              <button
                onClick={() => setActiveSection("orders")}
                className={`w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm ${
                  activeSection === "orders" ? "bg-gray-300" : ""
                }`}
              >
                Pedidos
              </button>
              <button
                onClick={() => setActiveSection("returns")}
                className={`w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm ${
                  activeSection === "returns" ? "bg-gray-300" : ""
                }`}
              >
                Devoluciones
              </button>
              <button
                onClick={() => setActiveSection("loyalty")}
                className={`w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm ${
                  activeSection === "loyalty" ? "bg-gray-300" : ""
                }`}
              >
                Loyalty
              </button>
              <button
                onClick={() => setActiveSection("preferences")}
                className={`w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm ${
                  activeSection === "preferences" ? "bg-gray-300" : ""
                }`}
              >
                Preferencias
              </button>
              <button
                onClick={() => setActiveSection("support")}
                className={`w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition text-sm ${
                  activeSection === "support" ? "bg-gray-300" : ""
                }`}
              >
                Asistencia
              </button>
            </nav>

            <div className="mt-6 text-gray-700">
              <p className="text-sm">
                {session?.user?.email ?? "Correo no disponible"}
              </p>

              {/* Botón de Desconexión normal */}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  void signOut({ callbackUrl: "/" });
                }}
                className="block mt-4 text-red-500 hover:underline font-medium"
              >
                Desconexión
              </Link>

              {/* Botón para Eliminar usuario y luego cerrar sesión */}
              <button
                onClick={handleDeleteUser}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition text-sm"
              >
                Eliminar cuenta
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <section className="w-full md:w-3/5 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Bienvenido, {session?.user?.name ?? "Usuario"}
            </h1>
            <div>{renderSectionContent()}</div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AccountPage;
