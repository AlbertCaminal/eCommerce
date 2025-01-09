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
        className={`flex ${
          transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          // Mueve 25% por slide
          transform: `translateX(-${currentIndex * 25}%)`,
          transition: transitionEnabled ? undefined : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedItems.map((item, i) => (
          <div
            key={i}
            // OJO: Quitamos max-w para que sea 25% real en cualquier pantalla
            className="relative w-1/4 aspect-[497/600] flex-shrink-0 overflow-hidden"
          >
            {/* Pequeño padding y borde para simular separación interna */}
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
