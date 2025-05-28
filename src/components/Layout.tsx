
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/contacto', label: 'Contacto' }
  ];

  const serviceItems = [
    { path: '/servicios/consultoria-estrategica', label: 'Consultoría estratégica en IA' },
    { path: '/servicios/automatizacion-procesos', label: 'Automatización de procesos' },
    { path: '/servicios/machine-learning', label: 'Machine learning' },
    { path: '/servicios/analisis-predictivo', label: 'Análisis predictivo' },
    { path: '/servicios/chatbots-asistentes', label: 'Chatbots y asistentes' },
    { path: '/servicios/formacion-capacitacion', label: 'Formación y capacitación' }
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return location.pathname === '/servicios' || location.pathname.startsWith('/servicios/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-900">
                Agentes de IA
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    isActiveRoute(item.path)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center text-lg font-medium transition-colors duration-300 ${
                      isServicesActive()
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Servicios
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuItem asChild>
                    <Link to="/servicios" className="w-full">
                      Ver todos los servicios
                    </Link>
                  </DropdownMenuItem>
                  <div className="border-t my-1"></div>
                  {serviceItems.map(service => (
                    <DropdownMenuItem key={service.path} asChild>
                      <Link to={service.path} className="w-full">
                        {service.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium transition-colors duration-300 ${
                      isActiveRoute(item.path)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/servicios"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    isServicesActive()
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Servicios
                </Link>
                <div className="pl-4 space-y-2">
                  {serviceItems.map(service => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Agentes de IA</h3>
              <p className="text-blue-200">
                Expertos en inteligencia artificial transformando negocios a través de soluciones innovadoras.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                {navItems.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-blue-200 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/servicios" className="text-blue-200 hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="text-blue-200">
                Email: info@agentesdeia.com<br />
                Teléfono: +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">© 2025 Agentes de IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
