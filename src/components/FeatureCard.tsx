import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, link }) => {
  return (
    <Link to={link} className="card light-effect group transition-all duration-300 hover:scale-105">
      <Icon className="w-12 h-12 mb-4 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
};

export default FeatureCard;