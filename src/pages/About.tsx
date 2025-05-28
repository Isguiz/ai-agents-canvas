
import React from 'react';

const About = () => {
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
                Nuestra misión
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Democratizar el acceso a la inteligencia artificial, ayudando a empresas de todos los tamaños a aprovechar el poder de la IA para innovar, optimizar y crecer de manera sostenible.
              </p>
              <p className="text-lg text-gray-700">
                Creemos que la IA no es solo una tecnología, sino una herramienta transformadora que puede revolucionar la forma en que las empresas operan y crean valor para sus clientes.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" alt="AI Technology" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nuestros valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Innovación
              </h3>
              <p className="text-gray-600 text-base">
                Buscamos constantemente nuevas formas de aplicar la IA para resolver problemas complejos.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Colaboración
              </h3>
              <p className="text-gray-600 text-base">
                Trabajamos estrechamente con nuestros clientes como socios estratégicos.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Resultados
              </h3>
              <p className="text-gray-600 text-base">
                Nos enfocamos en entregar soluciones que generen valor medible y sostenible.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Excelencia
              </h3>
              <p className="text-gray-600 text-base">
                Mantenemos los más altos estándares en cada proyecto que emprendemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros logros
            </h2>
            <p className="text-xl text-blue-100">
              Números que reflejan nuestro compromiso con la excelencia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">57+</div>
              <div className="text-lg text-blue-100">
                Proyectos completados
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">21+</div>
              <div className="text-lg text-blue-100">
                Clientes satisfechos
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">100%</div>
              <div className="text-lg text-blue-100">
                Tasa de éxito
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                5 años
              </div>
              <div className="text-lg text-blue-100">
                de experiencia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nuestro equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un grupo diverso de expertos en IA, datos y tecnología, unidos por la pasión de transformar negocios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
              <img alt="David Merinas" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://www.agentesdeia.com/wp-content/uploads/2024/02/1616666609862.jpeg" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">David Merinas</h3>
              <p className="text-blue-600 font-semibold mb-3">Director tecnológico</p>
              <p className="text-gray-600">Físico de formación, programador por vocación y emprendedor por naturaleza.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
              <img alt="Alfredo Romeo" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://www.agentesdeia.com/wp-content/uploads/2024/02/1516263379978-2.jpeg" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Alfredo Romeo</h3>
              <p className="text-blue-600 font-semibold mb-3">Artista de negocio</p>
              <p className="text-gray-600">Con más de 25 años de trayectoria en el mundo empresarial y tecnológico, mi pasión por la innovación y el emprendimiento en el ámbito local es el motor de mi carrera.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
              <img alt="Marcos Rivera" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://www.agentesdeia.com/wp-content/uploads/2024/02/1704188465548.jpeg" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Marcos Rivera</h3>
              <p className="text-blue-600 font-semibold mb-3">Experto en desarrollo</p>
              <p className="text-gray-600">Ya sea programando, participando en hackatones o trabajando en proyectos personales, siempre estoy explorando lo último en tecnología.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
              <img alt="Héctor Romero" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://www.agentesdeia.com/wp-content/uploads/2024/02/1692300587942.jpeg" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Héctor Romero</h3>
              <p className="text-blue-600 font-semibold mb-3">Director de proyectos</p>
              <p className="text-gray-600">Desarrollador de aplicaciones web y móviles. Experiencia en administración de sistemas. Monta-odoo.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
              <img alt="Israel G. Izquiano" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://www.agentesdeia.com/wp-content/uploads/2024/11/1695409642703.jpeg" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Israel G. Izquiano</h3>
              <p className="text-blue-600 font-semibold mb-3">Experto en procesos y automatización</p>
              <p className="text-gray-600">Se poner las cosas en su sitio, pero no se escribir bien una línea de código.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
              <img alt="Alejandro Picó" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="https://www.agentesdeia.com/wp-content/uploads/2024/12/1730634059651.jpeg" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Alejandro Picó</h3>
              <p className="text-blue-600 font-semibold mb-3">Experto en ciencia de datos</p>
              <p className="text-gray-600">He adquirido habilidades invaluables en análisis de datos, aprendizaje automático, inteligencia artificial y análisis avanzado. Todo para prepararme para este mundo de hoy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
