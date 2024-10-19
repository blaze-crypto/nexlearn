import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileText, CheckSquare, FileSpreadsheet, Image } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Image, title: t('imageToText'), description: t('imageToTextDesc'), link: '/image-to-text' },
    { icon: CheckSquare, title: t('testMaker'), description: t('testMakerDesc'), link: '/test-maker' },
    { icon: FileText, title: t('essayChecker'), description: t('essayCheckerDesc'), link: '/essay-checker' },
    { icon: FileSpreadsheet, title: t('fileConverter'), description: t('fileConverterDesc'), link: '/file-converter' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">{t('welcomeToNexLearn')}</h1>
          <p className="text-xl text-gray-300 mb-8">{t('nexLearnSlogan')}</p>
          <Link to="/image-to-text" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            {t('getStarted')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;olors" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;