import Link from "next/link";
import { HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";

export default async function Home() {
  const session = await auth();

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
          <div className="container mx-auto flex items-center justify-between py-4">
            {/* Logo */}
            <h1 className="text-3xl font-bold">
              <Link href="/">LOGO</Link>
            </h1>

            {/* Navigation */}
            <nav className="flex gap-8">
              <Link href="/" className="hover:text-gray-600">
                HOMBRES
              </Link>
              <Link href="/mujeres" className="font-bold text-black">
                MUJERES
              </Link>
              <Link href="/ninos" className="hover:text-gray-600">
                NIÑOS
              </Link>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="BUSCAR..."
                  className="w-48 border border-gray-300 px-4 py-1 text-sm focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-500">
                  🔍
                </button>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/profile"
                  className="text-gray-600 hover:text-black"
                >
                  👤
                </Link>
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
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto flex justify-center gap-8 py-2 text-sm font-bold">
              <Link href="/novedades" className="hover:underline">
                NOVEDADES
              </Link>
              <Link href="/ropa" className="hover:underline">
                ROPA
              </Link>
              <Link href="/moda-vaquera" className="hover:underline">
                MODA VAQUERA
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
            </div>
          </div>
        </header>

        <section className="mt-6 px-6 lg:px-6">
          {/* Hero Section */}
          <section className="relative mx-auto max-w-[2050px]">
            <img
              src="/images/posando.png"
              alt="Hero Background"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="text-center text-white">
                <h2 className="mb-4 text-4xl font-bold">Eleva Tu Estilo</h2>
                <p className="mb-6 text-lg">
                  Moda atemporal, opciones sostenibles
                </p>
                <Link
                  href="/shop"
                  className="bg-white px-6 py-3 text-lg text-black hover:bg-gray-200"
                >
                  Compra Ahora
                </Link>
              </div>
            </div>
          </section>

          {/* Promotional Section */}
          <section className="container mx-auto py-16">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">
                The Art of Fewer, Better Choices
              </h2>
              <p className="mt-4 text-gray-600">
                Opting for quality over quantity means selecting timeless,
                durable, and responsibly made items. Our organic offerings are
                designed with integrity and care.
              </p>
            </div>
          </section>

          {/* Product Highlights */}
          <section className="container mx-auto py-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
              What to Wear Now
            </h2>
          </section>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-16">
          <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="mb-4 font-bold">Contact Us</h4>
              <p>Email: support@cein.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Customer Care</h4>
              <p>Shipping & Returns</p>
              <p>FAQs</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Get the Latest</h4>
              <input
                type="email"
                placeholder="Enter your email"
                className="mb-2 w-full rounded border border-gray-300 p-2"
              />
              <button className="w-full rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-600">
            &copy; {new Date().getFullYear()} CEIN. All rights reserved.
          </div>
        </footer>
      </main>
    </HydrateClient>
  );
}
