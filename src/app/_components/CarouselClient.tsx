"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// 1) Importa tus imágenes locales
import Camiseta from "../assets/images/camiseta.jpg";
import Cinturon from "../assets/images/cinturon.jpg";
import Gorra from "../assets/images/gorra.jpg";
import Jersey from "../assets/images/jersey.jpg";
import Pantalon from "../assets/images/pantalon.jpg";
import Posando from "../assets/images/Posando.png";
import Zapatos from "../assets/images/zapatos.jpg";

// 2) Array con todos los elementos que quieras mostrar en el carrusel
//    Cada objeto tiene la ruta de la imagen y el label que quieras mostrar
const allItems = [
  { src: Camiseta, label: "CAMISETA" },
  { src: Cinturon, label: "CINTURÓN" },
  { src: Gorra, label: "GORRA" },
  { src: Jersey, label: "JERSEY" },
  { src: Pantalon, label: "PANTALÓN" },
  { src: Posando, label: "POSANDO" },
  { src: Zapatos, label: "ZAPATOS" },
];

// 3) Función para dividir el array en bloques de 4 (cada bloque es un “slide”)
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function CarouselClient() {
  // Agrupamos los items en “slides” de 4 imágenes
  const slides = chunkArray(allItems, 4);
  const totalSlides = slides.length;

  // Estado para saber en cuál “slide” estamos
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide: cada 3s pasamos al siguiente bloque de 4 imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Navegación manual (si quieres botones de anterior y siguiente)
  const goPrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor que incluye TODOS los slides en FILA */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Cada “slide” es un bloque que contiene 4 imágenes */}
        {slides.map((group, slideIndex) => (
          <div
            key={slideIndex}
            className="flex min-w-full justify-around gap-4 bg-white p-6"
          >
            {group.map((item, i) => (
              <div
                key={i}
                className="relative h-[300px] w-[200px] overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-lg font-bold text-white">{item.label}</h2>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Botones (opcionales) para cambiar manualmente de slide */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow hover:bg-gray-200"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow hover:bg-gray-200"
      >
        ›
      </button>

      {/* Indicadores (puntitos) - También opcionales */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              i === currentSlide ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
