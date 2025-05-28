
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Cpu, Settings, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AutomatizacionProcesos = () => {
  const features = [
    {
      icon: <Settings size={24} />,
      title: "Análisis de procesos actuales",
      description: "Identificamos oportunidades de automatización en tus operaciones"
    },
    {
      icon: <Cpu size={24} />,
      title: "Diseño de soluciones de automatización", 
      description: "Creamos flujos automatizados adaptados a tus necesidades"
    },
    {
      icon: <Zap size={24} />,
      title: "Integración con sistemas existentes",
      description: "Conectamos la automatización con tu infraestructura actual"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Monitoreo y optimización continua",
      description: "Supervisamos el rendimiento y mejoramos constantemente"
    }
  ];

  const benefits = [
    "Reducción del 70% en tiempo de procesamiento",
    "Eliminación completa de errores manuales",
    "Disponibilidad 24/7 de procesos automatizados",
    "Escalamiento automático según demanda",
    "Reducción significativa de costos operativos"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Automatización inteligente de procesos
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Transformamos procesos manuales en flujos automatizados utilizando RPA e IA para maximizar la eficiencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                    Analizar mis procesos
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-900 bg-transparent">
                  Ver demo en vivo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" 
                alt="Automatización de procesos con IA"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Nuestro proceso de automatización
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada para automatizar tus procesos de manera eficiente y segura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-green-900">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                Resultados que puedes esperar
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contacto">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Comenzar automatización
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Código de automatización"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automatiza tus procesos hoy mismo
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Solicita una evaluación gratuita de tus procesos y descubre cuánto puedes ahorrar.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3">
              Evaluar mis procesos gratis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AutomatizacionProcesos;
