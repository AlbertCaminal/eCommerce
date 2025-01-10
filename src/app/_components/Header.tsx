/* eslint-disable @typescript-eslint/consistent-type-imports */
"use client";

import Link from "next/link";
import { Session } from "next-auth"; // O tu tipo personalizado
// Importa otras dependencias necesarias

interface HeaderProps {
  session: Session | null; // O tu tipo personalizado
}

const Header: React.FC<HeaderProps> = ({ session }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Promo Bar */}
      <div className="bg-gray-100 py-1 text-center text-sm text-red-600">
        <Link href="/ofertas" className="hover:underline">
          OFERTAS OTOÑO-INVIERNO | HASTA UN 50% DE DESCUENTO EN ARTÍCULOS SELECCIONADOS
        </Link>
      </div>

      {/* Main Header */}
      <div className="relative mx-auto max-w-[2050px] px-6 py-5">
        {/* Contenedor Flex Principal */}
        <div className="flex items-center justify-center">
          {/* Elemento Izquierdo: Dropdown y Navegación para Pantallas Grandes */}
          <div className="absolute left-0 flex items-center px-6">
            {/* Dropdown Menu para dispositivos móviles */}
            <div className="relative flex items-center md:hidden">
              {/* Checkbox Hack */}
              <input type="checkbox" id="menu-toggle" className="peer hidden" />

              {/* Botón de apertura del menú (☰) */}
              <label
                htmlFor="menu-toggle"
                className="z-50 cursor-pointer text-2xl peer-checked:hidden"
                aria-label="Abrir menú"
              >
                ☰
              </label>

              {/* Dropdown Menu */}
              <div className="fixed left-0 top-0 z-40 h-screen w-96 translate-x-[-105%] transform border-r border-gray-100 bg-gray-50 shadow-lg transition-transform duration-300 peer-checked:translate-x-0">
                {/* Contenido del menú */}
                <div className="relative h-full overflow-y-auto">
                  {/* Botón de cierre del menú (✖️) */}
                  <label
                    htmlFor="menu-toggle"
                    className="absolute right-2.5 top-3 z-50 cursor-pointer text-xl"
                    aria-label="Cerrar menú"
                  >
                    ✖️
                  </label>

                  {/* Fondo semi-transparente para cerrar el menú al hacer clic fuera */}
                  <label
                    htmlFor="menu-toggle"
                    className="absolute inset-0 bg-white bg-opacity-50"
                  ></label>

                  {/* Contenido real del menú */}
                  <div className="relative z-10 py-2">
                    {/* Navegación Principal */}
                    <nav className="flex justify-center space-x-4 border-b border-gray-200 py-2">
                      <Link href="/" className="py-1 text-sm font-bold hover:text-gray-600">
                        HOMBRES
                      </Link>
                      <Link href="/mujeres" className="py-1 text-sm font-bold hover:text-gray-600">
                        MUJERES
                      </Link>
                      <Link href="/ninos" className="py-1 text-sm font-bold hover:text-gray-600">
                        NIÑOS
                      </Link>
                    </nav>

                    {/* Barra de Búsqueda */}
                    <div className="py-0.5">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="BUSCAR..."
                          className="w-full border border-gray-200 px-4 py-2 text-sm focus:outline-none"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-500">
                          🔍
                        </button>
                      </div>
                    </div>

                    {/* Navegación Secundaria */}
                    <div>
                      <div className="flex flex-col space-y-0.5">
                        {[
                          { href: "/novedades", label: "NOVEDADES" },
                          { href: "/ropa", label: "ROPA" },
                          { href: "/moda-vaquera", label: "MODA VAQUERA" },
                          { href: "/zapatos", label: "ZAPATOS" },
                          { href: "/accesorios", label: "ACCESORIOS" },
                          { href: "/ofertas", label: "OFERTAS" },
                          { href: "/premium", label: "PREMIUM" },
                          { href: "/plus-size", label: "PLUS SIZE" },
                        ].map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navegación para pantallas más grandes */}
            <nav className="hidden items-center justify-start gap-8 md:flex">
              <Link href="/" className="font-bold text-black">
                HOMBRES
              </Link>
              <Link href="/mujeres" className="hover:text-gray-600">
                MUJERES
              </Link>
              <Link href="/ninos" className="hover:text-gray-600">
                NIÑOS
              </Link>
            </nav>
          </div>

          {/* Logo (centro) */}
          <h1 className="text-center text-3xl font-bold">
            <Link href="/">LOGO</Link>
          </h1>

          {/* Elemento Derecho: Search y Iconos */}
          <div className="absolute right-0 flex items-center gap-6 px-6">
            {/* Search Bar para pantallas más grandes */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="BUSCAR..."
                className="w-full rounded border border-gray-300 px-4 py-1 text-sm transition-all duration-500 focus:outline-none sm:max-w-[4rem] md:max-w-[6.5rem] lg:max-w-[18rem]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-500">
                🔍
              </button>
            </div>
            <div className="flex gap-4">
              {session ? (
                <Link href="/profile" className="text-gray-600 hover:text-black">
                  👤
                </Link>
              ) : (
                <Link href="/api/auth/signin" className="text-gray-600 hover:text-black">
                  👤
                </Link>
              )}
              <Link href="/wishlist" className="text-gray-600 hover:text-black">
                ❤️
              </Link>
              <Link href="/cart" className="text-gray-600 hover:text-black">
                🛒
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation para pantallas más grandes */}
      <div className="hidden border-t border-gray-200 bg-gray-50 py-1 md:block">
        <div className="container mx-auto flex justify-center gap-5 py-2 text-sm font-bold">
          <Link href="/shop" className="hover:underline">
            NOVEDADES
          </Link>
          <Link href="/shop" className="hover:underline">
            ROPA
          </Link>
          <Link href="/moda-vaquera" className="hover:underline">
            MODA VAQUERA
          </Link>
          <Link href="/zapatos" className="hover:underline">
            ZAPATOS
          </Link>
          <Link href="/accesorios" className="hover:underline">
            ACCESORIOS
          </Link>
          <Link href="/ofertas" className="hover:underline">
            OFERTAS
          </Link>
          <Link href="/premium" className="hover:underline">
            PREMIUM
          </Link>
          <Link href="/plus-size" className="hover:underline">
            PLUS SIZE
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
