"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Imágenes
import Camiseta from "../assets/images/camiseta.jpg";
import Cinturon from "../assets/images/cinturon.jpg";
import Gorra from "../assets/images/gorra.jpg";
import Jersey from "../assets/images/jersey.jpg";
import Pantalon from "../assets/images/pantalon.jpg";
import Posando from "../assets/images/Posando.png";
import Zapatos from "../assets/images/zapatos.jpg";

const originalItems = [
  { src: Camiseta, label: "CAMISETA", href: "/productos/camiseta" },
  { src: Cinturon, label: "CINTURÓN", href: "/productos/cinturon" },
  { src: Gorra, label: "GORRA", href: "/productos/gorra" },
  { src: Jersey, label: "JERSEY", href: "/productos/jersey" },
  { src: Pantalon, label: "PANTALÓN", href: "/productos/pantalon" },
  { src: Posando, label: "POSANDO", href: "/productos/posando" },
  { src: Zapatos, label: "ZAPATOS", href: "/productos/zapatos" },
];

// Duplicamos para scroll infinito
const extendedItems = [...originalItems, ...originalItems];
const originalLength = originalItems.length;

export default function CarouselClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  
  // Aquí guardamos cuántos items se deben mostrar según el tamaño de pantalla
  const [itemsToShow, setItemsToShow] = useState(5);

  // Detectar tamaño de pantalla para setItemsToShow (5, 4 o 3)
  useEffect(() => {
    function handleResize() {
      // Ejemplo de breakpoints:
      // < 640px (sm) => 3
      // < 1024px (md) => 4
      // >= 1024px => 5
      if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth < 1660) {
        setItemsToShow(4);
      } else {
        setItemsToShow(5);
      }
    }

    // Ejecutar al montar y cada vez que cambie el size
    window.addEventListener("resize", handleResize);
    handleResize(); // Para que se ejecute al cargar

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Avanza 1 item cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Al terminar la animación, revisa si toca resetear el índice
  const handleTransitionEnd = () => {
    if (currentIndex >= originalLength) {
      setTransitionEnabled(false);
      setCurrentIndex((prev) => prev - originalLength);
    }
  };

  // Reencender la transición tras el salto
  useEffect(() => {
    if (!transitionEnabled) {
      // Forzamos un frame sin transición y después la encendemos de nuevo
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  }, [transitionEnabled]);

  // Porcentaje a desplazar en cada "click" (o paso en el interval).
  // Si mostramos 5 items => cada item es 20%, si 4 => 25%, si 3 => ~33.333%.
  const translatePercentage = 100 / itemsToShow;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex ${
          transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * translatePercentage}%)`,
          transition: transitionEnabled ? undefined : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedItems.map((item, i) => (
          <div
            key={i}
            // Ajustamos el ancho dinámicamente para que quepan 'itemsToShow' por vista
            style={{
              width: `${100 / itemsToShow}%`,
              aspectRatio: "497 / 650", // Mantiene la proporción de la imagen
            }}
            className="relative flex-shrink-0 overflow-hidden"
          >
            <div className="w-full h-full p-1 border border-white box-border">
              <Link href={item.href}>
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white drop-shadow">
                  {item.label}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
