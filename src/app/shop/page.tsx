/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api, HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";
import Header from "../_components/Header"; // Ajusta la ruta si es necesario
import Link from "next/link";
import Image from "next/image";
import Footer from "../_components/Footer";

// Componente para secciones desplegables utilizando <details> y <summary>
const SidebarSection: React.FC<{ title: string; links: { name: string; href: string }[] }> = ({ title, links }) => {
  return (
    <div className="mb-4">
      <details className="group" open={true}>
        {/* El atributo "open={true}" asegura que la sección esté abierta por defecto */}
        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-black focus:outline-none">
          {title}
          <svg
            className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <ul className="mt-2 pl-4">
          {links.map((link) => (
            <li key={link.name} className="mb-2">
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

export default async function Shop() {
  const session = await auth();
  const products = await api.products.getAllProducts();

  // Define las secciones y enlaces de la barra lateral, sin "Más vendidos"
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

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-white text-gray-900">
        {/* Header */}
        <Header session={session} />

        {/* Contenido de la tienda */}
        {/* Añadimos flex-1 para que esta sección ocupe el espacio disponible */}
        <section className="flex-1 mt-6 px-6 lg:px-6 xl:px-6">
  <div className="mx-auto max-w-[2000px] flex flex-col md:flex-row">
    {/* Botones desplegables para filtros en pantallas pequeñas */}
    <div className="block md:hidden mb-4 relative">
      <div className="flex flex-wrap gap-2">
        {Object.entries(sidebarData).map(([title, links]) => (
          <details key={title} className="group flex-1 relative">
            <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-black bg-gray-100 px-4 py-2 rounded focus:outline-none">
              {title}
              <svg
                className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <ul className="absolute left-0 z-10 mt-2 w-full bg-white border rounded shadow-lg">
              {links.map((link) => (
                <li key={link.name} className="mb-2 px-4 py-2 hover:bg-gray-100">
                  <Link href={link.href} className="text-black hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>

    {/* Barra Lateral para pantallas grandes */}
    <aside className="hidden md:block lg:w-1/4 lg:pr-6 mb-6 lg:mb-0">
      {Object.entries(sidebarData).map(([title, links]) => (
        <SidebarSection key={title} title={title} links={links} />
      ))}
    </aside>

    {/* Lista de Productos */}
    <div className="w-full lg:w-3/4 px-2">
      <p className="text-sm font-medium mb-2 px-2">{products.length} PRODUCTOS</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link href={`/product/${product.id}`} className="text-black hover:underline">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



        {/* Footer */}
        <Footer />
      </main>
    </HydrateClient>
  );
}
