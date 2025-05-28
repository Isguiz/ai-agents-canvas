
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BarChart3, TrendingUp, AlertTriangle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnalisisPredictivo = () => {
  const features = [
    {
      icon: <TrendingUp size={24} />,
      title: "Forecasting de demanda",
      description: "Predecimos la demanda futura para optimizar tu inventario y producción"
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Análisis de riesgo crediticio", 
      description: "Evaluamos el riesgo de impago para tomar decisiones informadas"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Predicción de churn de clientes",
      description: "Identificamos clientes en riesgo de abandono para actuar proactivamente"
    },
    {
      icon: <Eye size={24} />,
      title: "Dashboards interactivos en tiempo real",
      description: "Visualizamos predicciones y tendencias de forma clara y actionable"
    }
  ];

  const benefits = [
    "Mejora del 50% en la precisión de pronósticos",
    "Decisiones basadas en datos predictivos",
    "Reducción del riesgo en inversiones",
    "Optimización proactiva de recursos",
    "Identificación temprana de oportunidades"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Análisis predictivo avanzado
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Utilizamos algoritmos de última generación para predecir tendencias y comportamientos futuros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
                    Predecir mi futuro
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-900 bg-transparent">
                  Ver predicciones demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Análisis predictivo con gráficos"
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
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
              Tipos de análisis predictivo que ofrecemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones predictivas específicas para cada área de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-orange-900">
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
              <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-6">
                El poder de predecir el futuro
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
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Empezar a predecir
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard de análisis predictivo"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Anticipa el futuro de tu negocio
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Deja de reaccionar y empieza a actuar con anticipación gracias al análisis predictivo.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-3">
              Solicitar análisis predictivo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AnalisisPredictivo;
