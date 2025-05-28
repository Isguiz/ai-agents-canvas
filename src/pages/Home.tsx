import React from 'react';
import { Brain, Zap, Target, BarChart3, Cpu, Users, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Brain size={32} />,
      title: "Consultoría en IA",
      description: "Estrategias personalizadas para implementar inteligencia artificial en tu negocio.",
      keyPoints: ["Análisis completo de necesidades", "Roadmap de implementación", "ROI garantizado"],
      link: "/servicios/consultoria-estrategica"
    },
    {
      icon: <Zap size={32} />,
      title: "Automatización de procesos",
      description: "Optimiza tus operaciones con soluciones de automatización inteligente.",
      keyPoints: ["Reducción de costos operativos", "Mejora en la eficiencia", "Integración sin interrupciones"],
      link: "/servicios/automatizacion-procesos"
    },
    {
      icon: <Target size={32} />,
      title: "Machine learning personalizado",
      description: "Modelos de ML adaptados específicamente a tus datos y objetivos.",
      keyPoints: ["Algoritmos a medida", "Entrenamiento con tus datos", "Métricas de rendimiento claras"],
      link: "/servicios/machine-learning"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Análisis predictivo",
      description: "Anticipa tendencias y toma decisiones basadas en datos inteligentes.",
      keyPoints: ["Predicciones precisas", "Dashboards interactivos", "Alertas automáticas"],
      link: "/servicios/analisis-predictivo"
    },
    {
      icon: <Cpu size={32} />,
      title: "Desarrollo de chatbots",
      description: "Asistentes virtuales inteligentes para mejorar la experiencia del cliente.",
      keyPoints: ["Disponibilidad 24/7", "Integración multicanal", "Aprendizaje continuo"],
      link: "/servicios/chatbots-asistentes"
    },
    {
      icon: <Users size={32} />,
      title: "Capacitación en IA",
      description: "Forma a tu equipo en las últimas tecnologías de inteligencia artificial.",
      keyPoints: ["Programas personalizados", "Instructores expertos", "Certificaciones reconocidas"],
      link: "/servicios/formacion-capacitacion"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformamos tu negocio con
              <span className="text-blue-300 block mt-2">inteligencia artificial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Somos expertos en IA que ayudamos a las empresas a aprovechar el poder de la inteligencia artificial para optimizar procesos, aumentar la eficiencia y generar ventajas competitivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/servicios">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
                  Explora nuestros servicios
                </Button>
              </Link>
              <Link to="/contacto">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3 bg-transparent">
                  Contáctanos
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
              Nuestros servicios
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

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-lg mb-2">SOBRE NOSOTROS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expertos en inteligencia artificial con un enfoque en resultados tangibles
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                En Agentes de IA, combinamos experiencia técnica avanzada con un profundo conocimiento de negocio para ofrecer soluciones de IA que generan valor real. Nuestro equipo está formado por especialistas apasionados por la tecnología y comprometidos con la excelencia.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">Expertise técnico</span>
                  </div>
                  <p className="text-gray-600 text-sm">PhD y masters en IA y ML</p>
                </div>
                
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">Enfoque estratégico</span>
                  </div>
                  <p className="text-gray-600 text-sm">Alineados con tus objetivos</p>
                </div>
                
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">Innovación continua</span>
                  </div>
                  <p className="text-gray-600 text-sm">Siempre a la vanguardia</p>
                </div>
                
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-blue-600 w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">Escalabilidad</span>
                  </div>
                  <p className="text-gray-600 text-sm">Crecemos con tu negocio</p>
                </div>
              </div>
              
              <Link to="/nosotros">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Conoce al equipo
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">57+</div>
                <p className="text-gray-600">Proyectos completados</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">21+</div>
                <p className="text-gray-600">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos hoy mismo y descubre cómo la inteligencia artificial puede revolucionar tu empresa.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Comienza ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
