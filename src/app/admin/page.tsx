/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AdminPage() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: any) => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/trpc/products.addProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message || "Producto añadido exitosamente");
        reset(); // Limpia el formulario
      } else {
        setMessage(result.error || "Error al añadir producto");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">
        Panel de Administración - Añadir Producto
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Nombre del Producto</label>
          <input
            {...register("name")}
            placeholder="Nombre"
            className="w-full border p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Precio</label>
          <input
            type="number"
            {...register("price")}
            placeholder="Precio"
            className="w-full border p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Categoría</label>
          <input
            {...register("category")}
            placeholder="Categoría"
            className="w-full border p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Descripción</label>
          <textarea
            {...register("description")}
            placeholder="Descripción"
            className="w-full border p-2"
          />
        </div>
        <div>
          <label className="block font-medium">URL de Imagen</label>
          <input
            type="url"
            {...register("imageUrl")}
            placeholder="URL de Imagen"
            className="w-full border p-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
          disabled={loading}
        >
          {loading ? "Añadiendo..." : "Añadir Producto"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
}
