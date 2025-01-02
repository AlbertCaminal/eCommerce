import Link from "next/link";
import { HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";

export default async function Home() {
  const session = await auth();

  return (
    <HydrateClient>
      <main className="flex flex-col min-h-screen bg-white text-gray-900">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          {/* Top Promo Bar */}
          <div className="bg-gray-100 text-center text-sm text-red-600 py-1">
            DEALS OTOÑO-INVIERNO | HASTA UN 50% DE DESCUENTO EN ARTÍCULOS SELECCIONADOS
          </div>

          {/* Main Header */}
          <div className="container mx-auto flex justify-between items-center py-4">
            {/* Logo */}
            <h1 className="text-3xl font-bold">
              <Link href="/">JACK&JONES</Link>
            </h1>

            {/* Navigation */}
            <nav className="flex gap-8">
              <Link href="/" className="hover:text-gray-600">
                HOMBRES
              </Link>
              <Link href="/mujeres" className="hover:text-gray-600">
                MUJERES
              </Link>
              <Link href="/ninos" className="text-black font-bold">
                NIÑOS
              </Link>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="BUSCAR..."
                  className="border border-gray-300 rounded-full px-4 py-1 text-sm w-48 focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  🔍
                </button>
              </div>
              <div className="flex gap-4">
                <Link href="/profile" className="text-gray-600 hover:text-black">
                  👤
                </Link>
                <Link href="/wishlist" className="text-gray-600 hover:text-black">
                  ❤️
                </Link>
                <Link href="/cart" className="text-gray-600 hover:text-black">
                  🛒
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto flex justify-center py-2 gap-8 text-sm font-bold">
              <Link href="/novedades" className="hover:text-gray-700">
                NOVEDADES
              </Link>
              <Link href="/ropa" className="hover:text-gray-700">
                ROPA
              </Link>
              <Link href="/deals" className="hover:text-gray-700">
                DEALS
              </Link>
              <Link href="/moda-vaquera" className="hover:text-gray-700">
                MODA VAQUERA
              </Link>
              <Link href="/zapatos" className="hover:text-gray-700">
                ZAPATOS
              </Link>
              <Link href="/accesorios" className="hover:text-gray-700">
                ACCESORIOS
              </Link>
              <Link href="/ofertas" className="hover:text-gray-700">
                OFERTAS
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Elevate Your Style</h2>
              <p className="text-lg mb-6">Timeless Fashion, Sustainable Choices</p>
              <Link
                href="/shop"
                className="bg-white text-black px-6 py-3 rounded-lg text-lg hover:bg-gray-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* Promotional Section */}
        <section className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">The Art of Fewer, Better Choices</h2>
            <p className="text-gray-600 mt-4">
              Opting for quality over quantity means selecting timeless, durable, and responsibly made items. Our organic offerings are designed with integrity and care.
            </p>
          </div>
        </section>

        {/* Product Highlights */}
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-8">What to Wear Now</h2>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-16">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <p>Email: support@cein.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Care</h4>
              <p>Shipping & Returns</p>
              <p>FAQs</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get the Latest</h4>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded mb-2 border border-gray-300"
              />
              <button className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-600">&copy; {new Date().getFullYear()} CEIN. All rights reserved.</div>
        </footer>
      </main>
    </HydrateClient>
  );
}
