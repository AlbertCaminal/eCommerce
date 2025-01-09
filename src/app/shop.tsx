import Link from "next/link";
import Image from "next/image";
import { type FC } from "react";

type Producto = {
  id: number;
  nombre: string;
  precio: string;
  imagen: string;
};

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Pantalón Jogger",
    precio: "20€",
    imagen: "/pantalon.jpg",
  },
];

const Tienda: FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Tienda Online</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={300}
              height={200}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{producto.nombre}</h3>
              <p className="text-gray-600">{producto.precio}</p>
              <button className="mt-4 w-full rounded bg-black py-2 text-white hover:bg-gray-800">
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          Volver a la página principal
        </Link>
      </div>
    </main>
  );
};

export default Tienda;
