
import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de aplicar la IA para resolver problemas complejos."
    },
    {
      icon: <Users size={32} />,
      title: "Colaboración",
      description: "Trabajamos estrechamente con nuestros clientes como socios estratégicos."
    },
    {
      icon: <Target size={32} />,
      title: "Resultados",
      description: "Nos enfocamos en entregar soluciones que generen valor medible y sostenible."
    },
    {
      icon: <Award size={32} />,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares en cada proyecto que emprendemos."
    }
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "25+", label: "Clientes Satisfechos" },
    { number: "95%", label: "Tasa de Éxito" },
    { number: "5 años", label: "de Experiencia" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Agentes de IA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Somos un equipo de expertos apasionados por transformar negocios a través de la inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Democratizar el acceso a la inteligencia artificial, ayudando a empresas de todos los tamaños a aprovechar el poder de la IA para innovar, optimizar y crecer de manera sostenible.
              </p>
              <p className="text-lg text-gray-700">
                Creemos que la IA no es solo una tecnología, sino una herramienta transformadora que puede revolucionar la forma en que las empresas operan y crean valor para sus clientes.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="AI Technology"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center text-blue-600">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Logros
            </h2>
            <p className="text-xl text-blue-100">
              Números que reflejan nuestro compromiso con la excelencia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un grupo diverso de expertos en IA, datos y tecnología, unidos por la pasión de transformar negocios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. María González",
                role: "Directora de IA",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                description: "PhD en Machine Learning con 10+ años de experiencia en proyectos de IA empresarial."
              },
              {
                name: "Carlos Mendoza",
                role: "Arquitecto de Soluciones",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                description: "Experto en integración de sistemas y deployment de modelos de ML en producción."
              },
              {
                name: "Ana Ruiz",
                role: "Científica de Datos",
                image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
                description: "Especialista en análisis predictivo y visualización de datos complejos."
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
