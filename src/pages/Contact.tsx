
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      info: "info@agentesdeia.com",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: <Phone size={24} />,
      title: "Teléfono",
      info: "+1 (555) 123-4567",
      description: "Lunes a Viernes, 9:00 - 18:00"
    },
    {
      icon: <MapPin size={24} />,
      title: "Oficina",
      info: "Madrid, España",
      description: "Reuniones presenciales con cita previa"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactanos
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              ¿Listo para transformar tu negocio con IA? Hablemos sobre tu proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription className="text-lg">
                  Completa el formulario y nos pondremos en contacto contigo pronto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de estos canales.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-blue-600 font-medium mb-1">
                            {item.info}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Section */}
              <Card className="border-0 shadow-lg bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    ¿Tienes Preguntas Frecuentes?
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• ¿Cuánto tiempo toma implementar una solución de IA?</li>
                    <li>• ¿Qué datos necesito para empezar un proyecto?</li>
                    <li>• ¿Ofrecen soporte post-implementación?</li>
                    <li>• ¿Cómo garantizan la seguridad de los datos?</li>
                  </ul>
                  <p className="mt-4 text-blue-600 font-medium">
                    Contactanos para obtener respuestas detalladas a estas y otras preguntas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
