// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-16 px-16 shadow-inner-lg">
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-3">
        {/* Contact Section */}
        <div>
          <h4 className="mb-4 font-bold">Contacta con nosotros</h4>
          <p>Email: support@logo.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>

        {/* Customer Service Section */}
        <div>
          <h4 className="mb-4 font-bold">Atención al cliente</h4>
          <p>Envíos y Devoluciones</p>
          <p>FAQs</p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="mb-4 font-bold">Consigue lo último</h4>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-2 w-full border border-gray-300 p-2"
              required
            />
            <button
              type="submit"
              className="w-full bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              Suscríbete
            </button>
          </form>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} LOGO. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
