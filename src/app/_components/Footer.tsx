// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-16 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h4 className="mb-4 font-bold text-base lg:text-lg xl:text-xl">
            Contacta con nosotros
          </h4>
          <p className="text-sm lg:text-base">Email: support@logo.com</p>
          <p className="text-sm lg:text-base">Teléfono: +123 456 7890</p>
        </div>

        {/* Customer Service Section */}
        <div className="text-center sm:text-left">
          <h4 className="mb-4 font-bold text-base lg:text-lg xl:text-xl">
            Atención al cliente
          </h4>
          <ul className="space-y-2">
            <li className="text-sm lg:text-base hover:text-gray-600">
              <Link href="/envios-devoluciones">Envíos y Devoluciones</Link>
            </li>
            <li className="text-sm lg:text-base hover:text-gray-600">
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-center sm:text-left">
          <h4 className="mb-4 font-bold text-base lg:text-lg xl:text-xl">
            Consigue lo último
          </h4>
          <form className="flex flex-col sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Introduce tu email"
              className="mb-2 sm:mb-0 sm:mr-2 w-full border border-gray-300 p-2 text-sm lg:text-base"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-black px-4 py-2 text-white hover:bg-gray-800 text-sm lg:text-base"
            >
              Suscríbete
            </button>
          </form>
        </div>
      </div>
      <div className="mt-16 text-center text-gray-600 text-sm lg:text-base">
        &copy; {new Date().getFullYear()} LOGO. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
