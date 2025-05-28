import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Brain, Target, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultoriaEstrategica = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: "Evaluación completa de la madurez digital",
      description: "Analizamos tu estado actual y definimos el punto de partida ideal"
    },
    {
      icon: <Brain size={24} />,
      title: "Identificación de casos de uso prioritarios", 
      description: "Priorizamos las oportunidades con mayor impacto y ROI"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Diseño de roadmap de implementación",
      description: "Creamos un plan detallado y realizable paso a paso"
    },
    {
      icon: <Users size={24} />,
      title: "Gestión del cambio organizacional",
      description: "Acompañamos a tu equipo en la transición hacia la IA"
    }
  ];

  const benefits = [
    "Hasta 40% de reducción en costos operativos",
    "60% de mejora en eficiencia de procesos",
    "Identificación clara de oportunidades de IA",
    "Roadmap personalizado para tu empresa",
    "Acompañamiento continuo en la implementación"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Consultoría estratégica en IA
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Desarrollamos estrategias personalizadas para la implementación exitosa de inteligencia artificial en tu organización.
              </p>
              <Link to="/contacto">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Solicitar consulta gratuita
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Consultoría estratégica en IA"
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              ¿Qué incluye nuestro servicio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque integral que abarca desde la evaluación inicial hasta la implementación exitosa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-blue-900">
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
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Equipo trabajando en estrategia de IA"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Beneficios que obtendrás
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
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Empezar ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu empresa con IA?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda una consulta gratuita y descubre el potencial de la inteligencia artificial para tu negocio.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Solicitar consulta gratuita
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConsultoriaEstrategica;
