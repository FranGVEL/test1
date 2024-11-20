import React from "react";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import KPISection from "./components/KPISection";
import BackgroundCarousel from "./components/BackgroundCarousel";
import { Database, BarChart, Server, Mail, Phone, MapPin } from "lucide-react";
import logo from "../src/PUBLIC/static/logo4data1.png";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 relative">
        <BackgroundCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Transformamos datos en decisiones
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expertos en consultoría tecnológica, ofreciendo soluciones
              integrales para potenciar el crecimiento de su empresa
            </p>
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Modelado de Base de Datos"
              description="Diseño e implementación de estructuras de datos eficientes y escalables para optimizar el rendimiento de sus sistemas."
              Icon={Database}
            />
            <ServiceCard
              title="Reportería Avanzada"
              description="Creación de informes personalizados y dashboards interactivos para una mejor toma de decisiones."
              Icon={BarChart}
            />
            <ServiceCard
              title="Soporte de Infraestructura"
              description="Gestión y mantenimiento integral de su infraestructura tecnológica para garantizar la continuidad del negocio."
              Icon={Server}
            />
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <KPISection />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-100">
                Sobre 4data
              </h2>
              <p className="text-gray-300 mb-4">
                Somos una empresa líder en consultoría tecnológica con más de
                una década de experiencia ayudando a empresas a optimizar sus
                procesos y maximizar el valor de sus datos.
              </p>
              <p className="text-gray-300 mb-4">
                Nuestro equipo de expertos combina conocimiento técnico profundo
                con una comprensión única de las necesidades empresariales para
                entregar soluciones que impulsan el crecimiento.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-400">100+</h3>
                  <p className="text-gray-400">Clientes Satisfechos</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-400">10+</h3>
                  <p className="text-gray-400">Años de Experiencia</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-400">500+</h3>
                  <p className="text-gray-400">Proyectos Completados</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Equipo 4data"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
            Contáctanos
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                Información de Contacto
              </h3>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300">contacto@4data.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300">
                  Av. Tecnológica 123, Ciudad Empresarial
                </span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Nombre
                </label>
                <input type="text" id="name" className="mt-1" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input type="email" id="email" className="mt-1" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Mensaje
                </label>
                <textarea id="message" rows={4} className="mt-1"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} className="h-8 w-30" alt="4data logo" />
              </div>
              <p className="text-gray-400">
                Transformando el futuro digital de las empresas
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-blue-400">
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                Síguenos
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 4data. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
