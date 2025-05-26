
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  keyPoints: string[];
  link: string;
}

const ServiceCard = ({ icon, title, description, keyPoints, link }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 transform">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center text-blue-600 animate-bounce">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-blue-900 mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3 mb-6">
          {keyPoints.map((point, index) => (
            <li 
              key={index} 
              className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2"
            >
              <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0 animate-pulse" style={{ animationDelay: `${index * 100}ms` }} />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        <Link to={link} className="block">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Más información
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
