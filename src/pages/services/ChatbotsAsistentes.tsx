import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageSquare, Clock, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatbotsAsistentes = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "Procesamiento de lenguaje natural avanzado",
      description: "Conversaciones naturales que entienden el contexto y las intenciones"
    },
    {
      icon: <Globe size={24} />,
      title: "Integración multicanal", 
      description: "Funciona en web, móvil, redes sociales y plataformas de mensajería"
    },
    {
      icon: <Clock size={24} />,
      title: "Escalamiento automático de consultas",
      description: "Deriva consultas complejas a agentes humanos cuando es necesario"
    },
    {
      icon: <Heart size={24} />,
      title: "Aprendizaje continuo",
      description: "Mejora constantemente con cada interacción y feedback"
    }
  ];

  const benefits = [
    "Reducción del 80% en tiempo de respuesta",
    "Disponibilidad 24/7 para tus clientes",
    "Reducción de costos de soporte hasta 60%",
    "Mejora en satisfacción del cliente",
    "Escalabilidad automática según demanda"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Asistentes virtuales y chatbots
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                Desarrollamos chatbots inteligentes que mejoran la experiencia del cliente y reducen costos de soporte.
              </p>
              <Link to="/contacto">
                <Button size="lg" className="bg-white text-teal-900 hover:bg-teal-50">
                  Crear mi chatbot
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" 
                alt="Chatbot y asistente virtual"
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
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Características de nuestros chatbots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología avanzada para crear asistentes virtuales que realmente ayudan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-100 text-teal-600 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-teal-900">
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Persona usando chatbot"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                Transforma tu atención al cliente
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
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Implementar chatbot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu asistente virtual está listo para trabajar
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Mejora la experiencia de tus clientes con un chatbot inteligente disponible 24/7.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-3">
              Solicitar mi chatbot
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ChatbotsAsistentes;
