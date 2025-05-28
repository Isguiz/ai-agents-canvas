
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormacionCapacitacion = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Cursos desde nivel básico hasta avanzado",
      description: "Programas adaptados a todos los niveles de conocimiento en IA"
    },
    {
      icon: <Users size={24} />,
      title: "Talleres prácticos con casos reales", 
      description: "Aprendizaje hands-on con proyectos reales de la industria"
    },
    {
      icon: <Award size={24} />,
      title: "Certificaciones reconocidas internacionalmente",
      description: "Certificados que avalan tus competencias en IA a nivel global"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Mentoring personalizado",
      description: "Acompañamiento individual para maximizar tu aprendizaje"
    }
  ];

  const benefits = [
    "Equipos formados con 95% de tasa de finalización",
    "Certificación garantizada al completar el programa",
    "Acceso permanente a plataforma de aprendizaje online",
    "Red de contactos profesionales en IA",
    "Actualización continua de contenidos"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Formación y capacitación en IA
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Programas de formación especializados para equipos y profesionales que quieren dominar las tecnologías de IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
                    Formar mi equipo
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 bg-transparent">
                  Ver programa completo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Formación en inteligencia artificial"
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
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Nuestros programas de formación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología práctica y actualizada para formar verdaderos expertos en IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-indigo-900">
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
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
                Invierte en el futuro de tu equipo
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
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Solicitar programa
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Equipo aprendiendo IA"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Capacita a tu equipo para la era de la IA
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Dale a tu equipo las herramientas y conocimientos necesarios para liderar en IA.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-3">
              Empezar formación
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FormacionCapacitacion;
