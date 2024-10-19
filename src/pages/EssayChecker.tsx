import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const EssayChecker: React.FC = () => {
  const { t } = useTranslation();
  const [essay, setEssay] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const checkEssay = () => {
    // This is a mock implementation. In a real-world scenario, you would integrate with an AI service.
    const wordCount = essay.split(/\s+/).filter(word => word.length > 0).length;
    const sentenceCount = essay.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const avgWordsPerSentence = wordCount / sentenceCount;

    let feedbackText = '';

    if (wordCount < 100) {
      feedbackText += t('essayTooShort') + ' ';
    }

    if (avgWordsPerSentence > 20) {
      feedbackText += t('sentencesTooLong') + ' ';
    }

    if (!feedbackText) {
      feedbackText = t('essayLooksGood');
    }

    setFeedback(feedbackText);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 gradient-text">{t('essayChecker')}</h1>
      <div className="mb-4">
        <textarea
          className="w-full p-4 bg-gray-800 rounded-lg text-white"
          rows={10}
          placeholder={t('enterYourEssay')}
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
        />
      </div>
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        onClick={checkEssay}
      >
        {t('checkEssay')}
      </button>
      {feedback && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            {feedback.includes(t('essayLooksGood')) ? (
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
            ) : (
              <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
            )}
            {t('feedback')}
          </h2>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default EssayChecker;