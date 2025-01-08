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

// Array con links independientes
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
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  }, [transitionEnabled]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex gap-4 ${
          transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          // Si sigues con porcentaje, 4 imágenes “visibles” => 25% cada una:
          transform: `translateX(-${currentIndex * 25}%)`,
          transition: transitionEnabled ? undefined : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedItems.map((item, i) => (
          // Usamos tamaño fijo en px: 250 ancho, 300 alto
          <div
            key={i}
            className="relative w-[153.5px] h-[300px] flex-shrink-0 overflow-hidden"
          >
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
              <h2 className="text-lg font-bold text-white drop-shadow">
                {item.label}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
