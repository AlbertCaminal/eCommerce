/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api, HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";
import Header from "../_components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../_components/Footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Shop({ searchParams }: any) {
  const { size } = await searchParams;

  const sizeParam = size;

  console.log({ sizeParam });

  // Server actions o data fetching
  const session = await auth();
  const products = await api.products.getAllProducts();

  const sidebarData = {
    Categorías: [
      { name: "Vaqueros", href: "/categorias/vaqueros" },
      { name: "Bermudas", href: "/categorias/bermudas" },
      { name: "Pantalones", href: "/categorias/pantalones" },
      { name: "Shirts", href: "/categorias/shirts" },
      { name: "Chaquetas y abrigos", href: "/categorias/chaquetas-abrigos" },
      { name: "Camisetas", href: "/categorias/camisetas" },
      { name: "Sudaderas", href: "/categorias/sudaderas" },
      { name: "Trajes", href: "/categorias/trajes" },
      { name: "Accesorios", href: "/categorias/accesorios" },
      { name: "Zapatos", href: "/categorias/zapatos" },
      { name: "Punto", href: "/categorias/punto" },
    ],
    Descuentos: [
      { name: "20%", href: "/descuentos/20" },
      { name: "30%", href: "/descuentos/30" },
      { name: "40%", href: "/descuentos/40" },
      { name: "50%", href: "/descuentos/50" },
    ],
    Tallas: [
      { name: "XS", href: "/tallas/xs" },
      { name: "S", href: "/tallas/s" },
      { name: "M", href: "/tallas/m" },
      { name: "L", href: "/tallas/l" },
      { name: "XL", href: "/tallas/xl" },
      { name: "XXL", href: "/tallas/xxl" },
      { name: "Junior", href: "/tallas/junior" },
      { name: "Plus Size", href: "/tallas/plus-size" },
    ],
  };

  const SidebarSection: React.FC<{
    title: string;
    links: { name: string; href: string }[];
  }> = ({ title, links }) => {
    return (
      <div className="mb-4">
        <details className="group" open>
          <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-black focus:outline-none xxs:text-sm xs:text-base">
            {title}
            <svg
              className="h-5 w-5 transition-transform duration-200 group-open:rotate-180 xxs:h-6 xxs:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <ul className="mt-2 pl-4">
            {links.map((link) => (
              <li key={link.name} className="mb-2 text-base xxs:text-sm">
                <Link href={link.href} className="text-black hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    );
  };

  // Determinar el tamaño de la grilla
  const gridSize =
    sizeParam === "large"
      ? "lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2"
      : "md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3 xxs:grid-cols-2 xxxs:grid-cols-2";
  const imageSize = sizeParam === "large" ? 600 : 400;

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-white text-gray-900">
        <Header session={session} />

        {/* FILTROS ARRIBA (Versión móvil colapsable) */}
        <section className="relative mx-auto mt-4 max-w-[2050px] flex-1 px-4 lg:px-6 xl:px-6">
          {/* Mobile filters */}
          <div className="block md:hidden">
            <details className="group relative mb-4">
              <summary className="flex cursor-pointer items-center justify-between bg-gray-100 px-4 py-2 text-lg font-semibold text-black focus:outline-none xxs:text-sm xs:text-base">
                Filtrar
                <svg
                  className="h-5 w-5 transition-transform duration-200 group-open:rotate-180 xxs:h-6 xxs:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="absolute left-0 right-0 top-full z-50 hidden bg-white p-4 shadow-md group-open:block">
                {Object.entries(sidebarData).map(([title, links]) => (
                  <SidebarSection key={title} title={title} links={links} />
                ))}
              </div>
            </details>
          </div>

          <div className="mx-auto flex max-w-[2000px] flex-col md:flex-row">
            {/* Desktop sidebar */}
            <aside className="mb-6 hidden md:block lg:mb-0 lg:w-1/4 lg:pr-6">
              {Object.entries(sidebarData).map(([title, links]) => (
                <SidebarSection key={title} title={title} links={links} />
              ))}
            </aside>

            {/* MAIN CONTENT */}
            <div className="w-full px-2 lg:w-3/4">
              {/* Fila superior: cantidad de productos + botones de tamaño */}
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium xxs:text-xs">
                  {products.length} PRODUCTOS
                </p>
                <div className="flex space-x-2">
                  <Link
                    href={{ pathname: "/shop", query: { size: "normal" } }}
                    className={`px-3 py-1 text-sm xxs:text-xs ${
                      sizeParam !== "large"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200"
                    } `}
                  >
                    Tamaño Normal
                  </Link>
                  <Link
                    href={{ pathname: "/shop", query: { size: "large" } }}
                    className={`px-3 py-1 text-sm xxs:text-xs ${
                      sizeParam === "large"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200"
                    } `}
                  >
                    Tamaño Grande
                  </Link>
                </div>
              </div>

              {/* Product grid */}
              <div className={`grid grid-cols-1 ${gridSize} gap-6`}>
                {products.map((product) => (
                  <div key={product.id}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={imageSize}
                      height={imageSize}
                      className="object-cover"
                    />
                    <h2 className="mt-2 text-base text-gray-800 xxs:text-xs xs:text-sm">
                      {product.name}
                    </h2>
                    <p className="text-black-500 text-sm font-bold xxs:text-xxs xs:text-xs">
                      ${product.price}
                    </p>
                    <Link
                      href={`/product/${product.id}`}
                      className="text-sm text-black hover:underline xxs:text-xxs xs:text-xs"
                    >
                      Ver detalles
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </HydrateClient>
  );
}
