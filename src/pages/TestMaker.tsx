import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusCircle, Trash2 } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const TestMaker: React.FC = () => {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: Date.now(),
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
  });

  const addQuestion = () => {
    if (currentQuestion.text && currentQuestion.options.every(option => option)) {
      setQuestions([...questions, currentQuestion]);
      setCurrentQuestion({
        id: Date.now(),
        text: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
      });
    }
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentQuestion({ ...currentQuestion, text: e.target.value });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const handleCorrectAnswerChange = (index: number) => {
    setCurrentQuestion({ ...currentQuestion, correctAnswer: index });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 gradient-text">{t('testMaker')}</h1>
      <div className="mb-8">
        <textarea
          className="w-full p-2 bg-gray-800 rounded-md text-white"
          rows={3}
          placeholder={t('enterQuestionText')}
          value={currentQuestion.text}
          onChange={handleQuestionChange}
        />
        <div className="mt-4 space-y-2">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-grow p-2 bg-gray-800 rounded-md text-white"
                placeholder={`${t('option')} ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              <input
                type="radio"
                name="correctAnswer"
                checked={currentQuestion.correctAnswer === index}
                onChange={() => handleCorrectAnswerChange(index)}
              />
              <label>{t('correct')}</label>
            </div>
          ))}
        </div>
        <button
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center"
          onClick={addQuestion}
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          {t('addQuestion')}
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{t('addedQuestions')}</h2>
        {questions.map((q, index) => (
          <div key={q.id} className="mb-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{t('question')} {index + 1}</h3>
              <button
                className="text-red-500 hover:text-red-600 transition-colors"
                onClick={() => removeQuestion(q.id)}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <p className="mb-2">{q.text}</p>
            <ul className="list-disc list-inside">
              {q.options.map((option, optionIndex) => (
                <li key={optionIndex} className={optionIndex === q.correctAnswer ? 'text-green-500' : ''}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestMaker;