
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Database, Brain, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const MachineLearning = () => {
  const features = [
    {
      icon: <Database size={24} />,
      title: "Análisis y preparación de datos",
      description: "Limpiamos y estructuramos tus datos para obtener los mejores resultados"
    },
    {
      icon: <Brain size={24} />,
      title: "Selección de algoritmos óptimos", 
      description: "Elegimos los algoritmos más adecuados para tu problema específico"
    },
    {
      icon: <Target size={24} />,
      title: "Entrenamiento y validación de modelos",
      description: "Desarrollamos modelos precisos y validamos su rendimiento"
    },
    {
      icon: <Gauge size={24} />,
      title: "Monitoreo de rendimiento continuo",
      description: "Supervisamos y optimizamos el modelo en producción"
    }
  ];

  const benefits = [
    "Modelos con 95%+ de precisión garantizada",
    "Adaptación específica a tus datos y sector",
    "Implementación escalable en producción",
    "Mejora continua del rendimiento",
    "Integración completa con tus sistemas"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Desarrollo de modelos de machine learning
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Creamos modelos de ML personalizados que resuelven problemas específicos de tu negocio con precisión excepcional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                    Desarrollar mi modelo
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 bg-transparent">
                  Ver casos de éxito
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="Desarrollo de machine learning"
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
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              Nuestro proceso de desarrollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología rigurosa para crear modelos de ML que realmente funcionen en tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-purple-900">
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
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Modelo de machine learning funcionando"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
                Lo que obtienes con nuestros modelos
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
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Solicitar propuesta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu modelo de ML personalizado te espera
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Cuéntanos tu desafío y desarrollaremos el modelo perfecto para resolverlo.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3">
              Empezar mi proyecto
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MachineLearning;
