import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Lightbulb } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Lightbulb className="w-8 h-8 text-indigo-500" />
          <span className="text-2xl font-bold gradient-text">NexLearn</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/image-to-text" className="hover:text-indigo-400 transition-colors">{t('imageToText')}</Link></li>
            <li><Link to="/test-maker" className="hover:text-indigo-400 transition-colors">{t('testMaker')}</Link></li>
            <li><Link to="/essay-checker" className="hover:text-indigo-400 transition-colors">{t('essayChecker')}</Link></li>
            <li><Link to="/file-converter" className="hover:text-indigo-400 transition-colors">{t('fileConverter')}</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <button onClick={() => changeLanguage('en')} className="text-sm hover:text-indigo-400 transition-colors">EN</button>
          <button onClick={() => changeLanguage('ru')} className="text-sm hover:text-indigo-400 transition-colors">RU</button>
          <button onClick={() => changeLanguage('uz')} className="text-sm hover:text-indigo-400 transition-colors">UZ</button>
        </div>
      </div>
    </header>
  );
};

export default Header;