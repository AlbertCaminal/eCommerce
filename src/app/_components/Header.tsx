/* eslint-disable @typescript-eslint/consistent-type-imports */
"use client";

import Link from "next/link";
import { Session } from "next-auth";

interface HeaderProps {
  session: Session | null;
}

const Header: React.FC<HeaderProps> = ({ session }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Promo Bar */}
      <div className="bg-gray-100 py-1 text-center text-sm text-red-600 xxxs:text-xxxs xxs:text-xxs xs:text-xs">
        <Link href="/ofertas" className="hover:underline">
          OFERTAS OTOÑO-INVIERNO | HASTA UN 50% DE DESCUENTO EN ARTÍCULOS
          SELECCIONADOS
        </Link>
      </div>

      {/* Main Header */}
      <div className="relative mx-auto max-w-[2050px] px-3 py-4 xxxs:px-2 xs:px-4 sm:px-6">
        {/* Contenedor Flex Principal */}
        <div className="flex items-center justify-between">
          {/* Elemento Izquierdo: Dropdown + Search en Pantallas Grandes */}
          <div className="flex items-center">
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
              <div className="fixed left-0 top-0 z-40 h-screen w-72 translate-x-[-100%] transform bg-gray-50 shadow-lg transition-transform duration-300 peer-checked:translate-x-0 xs:w-80">
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
                  <div className="relative z-10 p-4">
                    {/* Barra de Búsqueda dentro del menú desplegable en móvil */}
                    <div className="mt-8">
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
                    <div className="mt-4">
                      <div className="flex flex-col space-y-2">
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

            {/* Search Bar para pantallas más grandes (movida a la izquierda) */}
            <div className="relative hidden md:block ml-4">
              <input
                type="text"
                placeholder="BUSCAR..."
                className="w-40 border border-gray-300 px-3 py-1 text-xs transition-all duration-500 focus:outline-none xxxs:w-24 xs:w-48 lg:w-64 xl:w-80 xxxl:w-96"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-500">
                🔍
              </button>
            </div>
          </div>

          {/* Logo (centrado) */}
          <div className="absolute left-1/2 z-10 -translate-x-1/2 transform">
            <h1 className="text-center text-xl font-bold xxxs:text-xl xs:text-xl md:text-xxl lg:text-xxl xl:text-3xl xxxl:text-3xl">
              <Link href="/">LOGO</Link>
            </h1>
          </div>

          {/* Elemento Derecho: Iconos de cuenta, wishlist y carrito */}
          <div className="flex items-center gap-3 md:gap-4">
            {session ? (
              <Link
                href="/account"
                className="text-lg text-gray-600 hover:text-black xxxs:text-xxxs xs:text-sm lg:text-base xl:text-lg xxxl:text-xl"
              >
                👤
              </Link>
            ) : (
              <Link
                href="/api/auth/signin?callbackUrl=/account"
                className="text-lg text-gray-600 hover:text-black xxxs:text-xxxs xs:text-sm lg:text-base xl:text-lg xxxl:text-xl"
              >
                👤
              </Link>
            )}

            <Link
              href="/wishlist"
              className="text-lg text-gray-600 hover:text-black xxxs:text-xxxs xs:text-sm lg:text-base xl:text-lg xxxl:text-xl"
            >
              ❤️
            </Link>
            <Link
              href="/cart"
              className="text-lg text-gray-600 hover:text-black xxxs:text-xxxs xs:text-sm lg:text-base xl:text-lg xxxl:text-xl"
            >
              🛒
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation para pantallas más grandes */}
      <div className="hidden border-t border-gray-200 bg-gray-50 py-1 md:block">
        <div className="container mx-auto flex justify-center gap-5 py-2 text-sm font-bold xxxs:text-xxxs xs:text-sm lg:text-sm xl:text-lg xxxl:text-xl">
          <Link href="/novedades" className="hover:underline">
            NOVEDADES
          </Link>
          <Link href="/ropa" className="hover:underline">
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
