import { Menu, X, Database } from "lucide-react";
import { useState } from "react";
import logo from "../public/static/logo4data1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <span className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-gray-100">4data</span>
            </span> */}

            <img src={logo} className="h-8 w-30" alt="4data logo" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400"
            >
              Inicio
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400"
            >
              Servicios
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400"
            >
              Nosotros
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
