  import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('aboutNexLearn')}</h3>
            <p className="text-gray-400">{t('nexLearnDescription')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/image-to-text" className="text-gray-400 hover:text-white transition-colors">{t('imageToText')}</a></li>
              <li><a href="/test-maker" className="text-gray-400 hover:text-white transition-colors">{t('testMaker')}</a></li>
              <li><a href="/essay-checker" className="text-gray-400 hover:text-white transition-colors">{t('essayChecker')}</a></li>
              <li><a href="/file-converter" className="text-gray-400 hover:text-white transition-colors">{t('fileConverter')}</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">{t('contactUs')}</h3>
            <p className="text-gray-400">{t('contactEmail')}: support@nexlearn.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 NexLearn. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;