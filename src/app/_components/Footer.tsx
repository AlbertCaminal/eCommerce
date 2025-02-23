// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección de Contacto */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-xl font-semibold">Contacta con nosotros</h4>
            <p className="flex items-center justify-center md:justify-start text-sm">
              <span className="mr-2">📧</span>
              <a href="mailto:support@logo.com" className="hover:underline">
                support@logo.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start text-sm">
              <span className="mr-2">📞</span>
              <a href="tel:+1234567890" className="hover:underline">
                +123 456 7890
              </a>
            </p>
          </div>

          {/* Sección de Atención al cliente */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-xl font-semibold">Atención al cliente</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/envios-devoluciones">
                  <span className="text-sm hover:text-gray-400 transition-colors">
                    Envíos y Devoluciones
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <span className="text-sm hover:text-gray-400 transition-colors">
                    FAQs
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-xl font-semibold">Consigue lo último</h4>
            <form className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Introduce tu email"
                className="w-full p-2 mb-2 sm:mb-0 sm:mr-2 border border-white bg-white text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                aria-label="Correo electrónico"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 border border-white bg-black text-white hover:bg-gray-800 transition-colors text-sm"
              >
                Suscríbete
              </button>
            </form>
          </div>
        </div>

        {/* Parte inferior del Footer */}
        <div className="mt-12 pt-12 border-t border-white text-center text-sm">
          &copy; {new Date().getFullYear()} LOGO. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
