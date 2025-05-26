
import React from 'react';
import { Brain, Zap, Target, BarChart3, Cpu, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const detailedServices = [
    {
      icon: <Brain size={48} />,
      title: "Consultoría Estratégica en IA",
      description: "Desarrollamos estrategias personalizadas para la implementación exitosa de inteligencia artificial en tu organización.",
      features: [
        "Evaluación completa de la madurez digital",
        "Identificación de casos de uso prioritarios",
        "Diseño de roadmap de implementación",
        "Análisis de ROI y métricas de éxito",
        "Gestión del cambio organizacional"
      ],
      benefits: "Hasta 40% de reducción en costos operativos y 60% de mejora en eficiencia."
    },
    {
      icon: <Zap size={48} />,
      title: "Automatización Inteligente de Procesos",
      description: "Transformamos procesos manuales en flujos automatizados utilizando RPA e IA para maximizar la eficiencia.",
      features: [
        "Análisis de procesos actuales",
        "Diseño de soluciones de automatización",
        "Integración con sistemas existentes",
        "Monitoreo y optimización continua",
        "Escalamiento gradual"
      ],
      benefits: "Reducción del 70% en tiempo de procesamiento y eliminación de errores manuales."
    },
    {
      icon: <Target size={48} />,
      title: "Desarrollo de Modelos de Machine Learning",
      description: "Creamos modelos de ML personalizados que resuelven problemas específicos de tu negocio con precisión excepcional.",
      features: [
        "Análisis y preparación de datos",
        "Selección de algoritmos óptimos",
        "Entrenamiento y validación de modelos",
        "Deployment en producción",
        "Monitoreo de rendimiento continuo"
      ],
      benefits: "Modelos con 95%+ de precisión adaptados a tus datos específicos."
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Análisis Predictivo Avanzado",
      description: "Utilizamos algoritmos de última generación para predecir tendencias y comportamientos futuros.",
      features: [
        "Forecasting de demanda",
        "Análisis de riesgo crediticio",
        "Predicción de churn de clientes",
        "Optimización de inventarios",
        "Dashboards interactivos en tiempo real"
      ],
      benefits: "Mejora del 50% en la precisión de pronósticos y decisiones más informadas."
    },
    {
      icon: <Cpu size={48} />,
      title: "Asistentes Virtuales y Chatbots",
      description: "Desarrollamos chatbots inteligentes que mejoran la experiencia del cliente y reducen costos de soporte.",
      features: [
        "Procesamiento de lenguaje natural avanzado",
        "Integración multicanal (web, móvil, redes sociales)",
        "Escalamiento automático de consultas",
        "Análisis de sentimientos",
        "Aprendizaje continuo"
      ],
      benefits: "Reducción del 80% en tiempo de respuesta y disponibilidad 24/7."
    },
    {
      icon: <Users size={48} />,
      title: "Capacitación y Desarrollo en IA",
      description: "Formamos a tu equipo en las competencias necesarias para implementar y mantener soluciones de IA.",
      features: [
        "Programas de capacitación personalizados",
        "Talleres prácticos hands-on",
        "Certificaciones reconocidas",
        "Mentoring especializado",
        "Comunidad de práctica interna"
      ],
      benefits: "Team building en IA con certificación del 100% del equipo participante."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios de IA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Soluciones completas de inteligencia artificial diseñadas para transformar tu negocio y generar resultados medibles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <CardHeader className="bg-gradient-to-br from-blue-50 to-white p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-blue-900">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </CardDescription>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <p className="text-blue-800 font-semibold">
                        <CheckCircle className="inline w-5 h-5 mr-2" />
                        {service.benefits}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 lg:p-12">
                    <h4 className="text-xl font-semibold text-blue-900 mb-6">
                      ¿Qué incluye este servicio?
                    </h4>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres Saber Más Sobre Nuestros Servicios?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a implementar IA en tu empresa.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Contactanos Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
