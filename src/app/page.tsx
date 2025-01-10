/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import { HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";
import Image from "next/image";
import HeroImage from "./assets/images/Posando.png";
import CarouselClient from "./_components/CarouselClient";
import Header from "./_components/Header"; // Adjust the path if necessary
import Footer from "./_components/Footer"; // Import the Footer component

export default async function Home() {
  const session = await auth();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-white text-gray-900">
        {/* Header */}
        <Header session={session} />

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
                  className="sm:text-md inline-block bg-white px-3 py-2 text-sm text-black transition-all duration-500 hover:bg-gray-200 sm:px-3 sm:py-2 md:px-4 md:py-3 md:text-lg lg:px-10 lg:py-5 lg:text-xl"
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
                <div className="w-80 overflow-hidden bg-white shadow-lg">
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
                      className="mt-4 inline-block bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                    >
                      Ver más
                    </a>
                  </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="w-80 overflow-hidden bg-white shadow-lg">
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
                      className="mt-4 inline-block bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                    >
                      Ver más
                    </a>
                  </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="w-80 overflow-hidden bg-white shadow-lg">
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
                      className="mt-4 inline-block bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
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
        <Footer />
      </main>
    </HydrateClient>
  );
}