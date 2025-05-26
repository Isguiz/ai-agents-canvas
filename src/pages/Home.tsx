
import React from 'react';
import { Brain, Zap, Target, BarChart3, Cpu, Users } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Brain size={32} />,
      title: "Consultoría en IA",
      description: "Estrategias personalizadas para implementar inteligencia artificial en tu negocio.",
      keyPoints: [
        "Análisis completo de necesidades",
        "Roadmap de implementación",
        "ROI garantizado"
      ],
      link: "/servicios"
    },
    {
      icon: <Zap size={32} />,
      title: "Automatización de Procesos",
      description: "Optimiza tus operaciones con soluciones de automatización inteligente.",
      keyPoints: [
        "Reducción de costos operativos",
        "Mejora en la eficiencia",
        "Integración sin interrupciones"
      ],
      link: "/servicios"
    },
    {
      icon: <Target size={32} />,
      title: "Machine Learning Personalizado",
      description: "Modelos de ML adaptados específicamente a tus datos y objetivos.",
      keyPoints: [
        "Algoritmos a medida",
        "Entrenamiento con tus datos",
        "Métricas de rendimiento claras"
      ],
      link: "/servicios"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Análisis Predictivo",
      description: "Anticipa tendencias y toma decisiones basadas en datos inteligentes.",
      keyPoints: [
        "Predicciones precisas",
        "Dashboards interactivos",
        "Alertas automáticas"
      ],
      link: "/servicios"
    },
    {
      icon: <Cpu size={32} />,
      title: "Desarrollo de Chatbots",
      description: "Asistentes virtuales inteligentes para mejorar la experiencia del cliente.",
      keyPoints: [
        "Disponibilidad 24/7",
        "Integración multicanal",
        "Aprendizaje continuo"
      ],
      link: "/servicios"
    },
    {
      icon: <Users size={32} />,
      title: "Capacitación en IA",
      description: "Forma a tu equipo en las últimas tecnologías de inteligencia artificial.",
      keyPoints: [
        "Programas personalizados",
        "Instructores expertos",
        "Certificaciones reconocidas"
      ],
      link: "/servicios"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformamos tu Negocio con
              <span className="text-blue-300 block mt-2">Inteligencia Artificial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Somos expertos en IA que ayudamos a las empresas a aprovechar el poder de la inteligencia artificial para optimizar procesos, aumentar la eficiencia y generar ventajas competitivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/servicios">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
                  Explora Nuestros Servicios
                </Button>
              </Link>
              <Link to="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3">
                  Contactanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas de inteligencia artificial adaptadas a las necesidades específicas de tu empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactanos hoy mismo y descubre cómo la inteligencia artificial puede revolucionar tu empresa.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Comienza Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
