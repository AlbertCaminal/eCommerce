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
              OFERTAS OTOÑO-INVIERNO | HASTA UN 50% DE DESCUENTO EN ARTÍCULOS
              SELECCIONADOS
            </Link>
          </div>

          {/* Main Header */}
          <div className="mx-auto grid max-w-[2050px] grid-cols-3 items-center px-6 py-5">
            {/* Logo */}
            <h1 className="text-3xl font-bold">
              <Link href="/">LOGO</Link>
            </h1>

            {/* Navigation */}
            <nav className="flex items-center justify-center gap-8">
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

            {/* Search and Icons */}
            <div className="flex items-center justify-end gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="BUSCAR..."
                  className="w-full border border-gray-300 px-4 py-1 text-sm transition-all duration-500 focus:outline-none sm:max-w-[4rem] md:max-w-[6.5rem] lg:max-w-[18rem]"
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

          {/* Secondary Navigation */}
          <div className="border-t border-gray-200 bg-gray-50 py-1">
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
          <section className="relative mx-auto max-w-[2050px] mb-6">
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
          <CarouselClient />

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
          <section className="container mx-auto py-16">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">
                El arte de tener menos y mejores opciones
              </h2>
              <p className="mt-4 text-gray-600">
                Optar por la calidad frente a la cantidad significa optar por lo
                atemporal, Artículos duraderos y fabricados de forma
                responsable. Nuestras ofertas orgánicas son diseñado con
                integridad y cuidado.
              </p>
            </div>
          </section>

          {/* Product Highlights */}
          <section className="container mx-auto py-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Que llevar ahora
            </h2>
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
