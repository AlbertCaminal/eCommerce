import Link from "next/link";
import { HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";
import Image from "next/image";
import HeroImage from "./assets/images/Posando.png";
import CarouselClient from "./_components/CarouselClient";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default async function Home() {
  const session = await auth();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-white text-gray-900">
        {/* Header */}
        <Header session={session} />

        {/* Sección de contenido principal con flex-1 */}
        <section className="flex-1 mt-6 px-6 lg:px-6">
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
                {/* Título principal */}
                <h2 className="mb-4 font-bold transition-all duration-500 xxxs:text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl sm:mb-2 xs:mb-1 xxs:mb-0 xxxs:mb-0">
                  Eleva Tu Estilo
                </h2>

                {/* Subtítulo/Descripción */}
                <p className="mb-8 transition-all duration-500 xxxs:text-xxxs xxs:text-xxxs xs:text-xxs sm:text-xs md:text-sm lg:text-lg xl:text-2xl sm:mb-6 xs:mb-4 xxxs:mb-2 text-base">
                  Moda atemporal, opciones sostenibles
                </p>

                {/* Botón */}
                <Link href="/shop" className="inline-block bg-white text-black transition-all duration-500 hover:bg-gray-200 xxxs:text-xxxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xxl xxl:text-xxxl xl:px-8 xl:py-5 lg:px-6 lg:py-4 md:px-4 md:py-3 sm:px-3 sm:py-2 xs:px-2 xs:py-1 xxs:px-2 xxs:py-1 xxxs:px-2 xxxs:py-1">
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
              <h2 className="font-bold xxxs:text-base xxs:text-sm xs:text-md sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-4">
                El arte de tener menos y mejores opciones
              </h2>
              <p className="mx-auto mt-10 max-w-xl text-gray-600 xxxs:text-xxxs xxs:text-xxs xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
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
              <h2 className="mb-8 font-bold xxxs:text-base xxs:text-sm xs:text-md sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">
                Tendencias de Temporada
              </h2>
              <p className="mb-16 text-gray-600 xxxs:text-xxxs xxs:text-xxs xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
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
                    <h3 className="mb-2 font-semibold xxxs:text-xs xxs:text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">
                      Abrigos Oversize
                    </h3>
                    <p className="text-gray-500 xxxs:text-xxxs xxs:text-xxs xs:text-xs sm:text-sm md:text-sm lg:text-base">
                      Perfectos para mantenerte abrigado con estilo.
                    </p>
                    <a href="#" className="mt-4 inline-block bg-black px-4 py-2 text-white hover:bg-gray-800 xxxs:text-xxxs xxs:text-xxs xs:text-xs sm:text-sm md:text-sm lg:text-base">
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
                    <h3 className="mb-2 font-semibold xxxs:text-xs xxs:text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">
                      Pantalones Cargo
                    </h3>
                    <p className="text-gray-500 xxxs:text-xxxs xxs:text-xxs xs:text-xs sm:text-sm md:text-sm lg:text-base">
                      La combinación perfecta de comodidad y moda.
                    </p>
                    <a href="#" className="mt-4 inline-block bg-black px-4 py-2 text-white hover:bg-gray-800 xxxs:text-xxxs xxs:text-xxs xs:text-xs sm:text-sm md:text-sm lg:text-base">
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
                    <h3 className="mb-2 font-semibold xxxs:text-xs xxs:text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">
                      Botas Chunky
                    </h3>
                    <p className="text-gray-500 xxxs:text-xxxs xxs:text-xxs xs:text-xs sm:text-sm md:text-sm lg:text-base">
                      Dale un toque atrevido y sofisticado a tu outfit.
                    </p>
                    <a href="#" className="mt-4 inline-block bg-black px-4 py-2 text-white hover:bg-gray-800 xxxs:text-xxxs xxs:text-xxs xs:text-xs sm:text-sm md:text-sm lg:text-base">
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
