// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-16 shadow-inner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 font-bold text-lg lg:text-xl">Contacta con nosotros</h4>
            <p className="text-sm lg:text-base flex items-center justify-center md:justify-start">
              <span className="mr-2">📧</span>
              <a href="mailto:support@logo.com" className="hover:underline">
                support@logo.com
              </a>
            </p>
            <p className="text-sm lg:text-base flex items-center justify-center md:justify-start">
              <span className="mr-2">📞</span>
              <a href="tel:+1234567890" className="hover:underline">
                +123 456 7890
              </a>
            </p>
          </div>

          {/* Customer Service Section */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 font-bold text-lg lg:text-xl">Atención al cliente</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/envios-devoluciones"
                  className="text-sm lg:text-base hover:text-gray-600 transition-colors"
                >
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm lg:text-base hover:text-gray-600 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              {/* Puedes agregar más enlaces aquí */}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 font-bold text-lg lg:text-xl">Consigue lo último</h4>
            <form className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Introduce tu email"
                className="mb-2 sm:mb-0 sm:mr-2 w-full border border-gray-300 rounded p-2 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                aria-label="Correo electrónico"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors text-sm lg:text-base rounded"
              >
                Suscríbete
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-12 text-center text-gray-600 text-sm lg:text-base">
          &copy; {new Date().getFullYear()} LOGO. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
