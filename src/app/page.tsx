/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";
import Image from "next/image";
import HeroImage from "./assets/images/Posando.png";
import CarouselClient from "./_components/CarouselClient";

export default async function Home() {
  const session = await auth();

  const products = await api.products.getAllProducts();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-white text-gray-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          {/* Top Promo Bar */}
          <div className="bg-gray-100 py-1 text-center text-sm text-red-600">
            <Link href="/ofertas" className="hover:underline">
              OFERTAS OTOÑO-INVIERNO | HASTA UN 50% DE DESCUENTO EN ARTÍCULOS SELECCIONADOS
            </Link>
          </div>

          {/* Main Header */}
          <div className="mx-auto max-w-[2050px] px-6 py-5">
            <div className="flex items-center justify-between">
              {/* Dropdown Menu para dispositivos móviles */}
              <div className="relative flex items-center md:hidden">
                {/* Checkbox Hack */}
                <input
                  type="checkbox"
                  id="menu-toggle"
                  className="peer hidden"
                />

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

                    {/* Contenido real del menú (colocado después del fondo para evitar solapamiento) */}
                    <div className="relative z-10 py-2">
                      {/* Navegación Principal en Fila con Menor Espaciado */}
                      <nav className="flex justify-center space-x-4 border-b border-gray-200 py-2">
                        <Link
                          href="/"
                          className="py-1 text-sm font-bold hover:text-gray-600"
                        >
                          HOMBRES
                        </Link>
                        <Link
                          href="/mujeres"
                          className="py-1 text-sm font-bold hover:text-gray-600"
                        >
                          MUJERES
                        </Link>
                        <Link
                          href="/ninos"
                          className="py-1 text-sm font-bold hover:text-gray-600"
                        >
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

                      {/* Navegación Secundaria como Botones de Ancho Completo */}
                      <div>
                        <div className="flex flex-col space-y-0.5">
                          <Link
                            href="/novedades"
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            NOVEDADES
                          </Link>
                          <Link
                            href="/ropa"
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            ROPA
                          </Link>
                          <Link
                            href="/moda-vaquera"
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            MODA VAQUERA
                          </Link>
                          <Link
                            href="/zapatos"
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            ZAPATOS
                          </Link>
                          <Link
                            href="/accesorios"
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            ACCESORIOS
                          </Link>
                          <Link
                            href="/ofertas"
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            OFERTAS
                          </Link>
                          <Link
                            href="/premium"
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            PREMIUM
                          </Link>
                          <Link
                            href="/plus-size"
                            className="w-full bg-gray-200 px-4 py-2 text-left text-sm font-bold hover:bg-gray-300"
                          >
                            PLUS SIZE
                          </Link>
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

              {/* Logo (centro) */}
              <h1 className="text-center text-3xl font-bold">
                <Link href="/">LOGO</Link>
              </h1>

              {/* Search and Icons */}
              <div className="flex items-center justify-end gap-6">
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
                    <Link
                      href="/profile"
                      className="text-gray-600 hover:text-black"
                    >
                      👤
                    </Link>
                  ) : (
                    <Link
                      href="/api/auth/signin"
                      className="text-gray-600 hover:text-black"
                    >
                      👤
                    </Link>
                  )}
                  <Link
                    href="/wishlist"
                    className="text-gray-600 hover:text-black"
                  >
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

        <section className="mt-6 px-6 lg:px-6">
          {/* Hero Section */}
          <section className="relative mx-auto mb-6 max-w-[2050px]">
            <Image
              src={HeroImage}
              alt="Hero Background"
              layout="responsive"
              width={2050}
              height={800}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="text-center text-white">
                <h2 className="mb-4 text-2xl font-bold transition-all duration-500 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Eleva Tu Estilo
                </h2>
                <p className="sm:text-md mb-6 text-base transition-all duration-500 md:text-xl lg:text-2xl xl:text-3xl">
                  Moda atemporal, opciones sostenibles
                </p>
                <Link
                  href="/shop"
                  className="sm:tetx-md inline-block bg-white px-2 py-1 text-sm text-black transition-all duration-500 hover:bg-gray-200 sm:px-3 sm:py-2 md:px-4 md:py-3 md:text-lg lg:px-10 lg:py-5 lg:text-xl"
                >
                  Compra Ahora
                </Link>
              </div>
            </div>
          </section>

          {/* Carousel Section */}
          <section className="relative mx-auto mb-6 max-w-[2050px]">
            <CarouselClient />
          </section>

          {/* Product Section */}
          {/* <section>
            {products.map(({ name, imageUrl }, i) => (
              <div key={i}>
                <div>{name}</div>
                <img src={imageUrl}></img>
              </div>
            ))}
          </section> */}

          {/* Promotional Section */}
          <section className="mx-auto max-w-[2050px] bg-gray-100 py-24">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold">
                El arte de tener menos y mejores opciones
              </h2>
              <p className="mx-auto mt-10 max-w-xl text-gray-600">
                Optar por la calidad frente a la cantidad significa optar por lo
                atemporal, artículos duraderos y fabricados de forma
                responsable. Nuestras ofertas orgánicas son diseñadas con
                integridad y cuidado.
              </p>
            </div>
          </section>

          {/* Season Trends */}
          <section id="tendencias" className="py-24">
            <div className="container mx-auto text-center">
              <h2 className="mb-8 text-2xl font-bold">
                Tendencias de Temporada
              </h2>
              <p className="mb-16 text-gray-600">
                Descubre las prendas y accesorios más populares de esta
                temporada.
              </p>

              <div className="flex flex-wrap justify-center gap-16">
                {/* Tarjeta 1 */}
                <div className="w-80 overflow-hidden rounded-lg bg-white shadow-md">
                  <Image
                    src={HeroImage}
                    alt="Abrigos Oversize"
                    width={300}
                    height={200}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                      Abrigos Oversize
                    </h3>
                    <p className="text-sm text-gray-500">
                      Perfectos para mantenerte abrigado con estilo.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                    >
                      Ver más
                    </a>
                  </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="w-80 overflow-hidden rounded-lg bg-white shadow-md">
                  <Image
                    src={HeroImage}
                    alt="Pantalones Cargo"
                    width={300}
                    height={200}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                      Pantalones Cargo
                    </h3>
                    <p className="text-sm text-gray-500">
                      La combinación perfecta de comodidad y moda.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                    >
                      Ver más
                    </a>
                  </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="w-80 overflow-hidden rounded-lg bg-white shadow-md">
                  <Image
                    src={HeroImage}
                    alt="Botas Chunky"
                    width={300}
                    height={200}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">Botas Chunky</h3>
                    <p className="text-sm text-gray-500">
                      Dale un toque atrevido y sofisticado a tu outfit.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                    >
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-16">
          <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="mb-4 font-bold">Contacta con nosotros</h4>
              <p>Email: support@logo.com</p>
              <p>Teléfono: +123 456 7890</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Atención al cliente</h4>
              <p>Envíos y Devoluciones</p>
              <p>FAQs</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Consigue lo último</h4>
              <input
                type="email"
                placeholder="Enter your email"
                className="mb-2 w-full rounded border border-gray-300 p-2"
              />
              <button className="w-full rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
                Suscribete
              </button>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-600">
            &copy; {new Date().getFullYear()} LOGO. Todos los derechos
            reservados.
          </div>
        </footer>
      </main>
    </HydrateClient>
  );
}
