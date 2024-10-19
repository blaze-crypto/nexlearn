import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { createWorker } from 'tesseract.js';
import { Upload, FileText, Copy } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

const ImageToText: React.FC = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setIsProcessing(true);

    try {
      const worker = await createWorker('eng');
      const { data: { text } } = await worker.recognize(file);
      await worker.terminate();

      setText(text);
    } catch (error) {
      console.error('Error processing image:', error);
      setText(t('errorProcessingImage'));
    } finally {
      setIsProcessing(false);
    }
  }, [t]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert(t('textCopied'));
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 gradient-text">{t('imageToText')}</h1>
      <div className="mb-8">
        <div {...getRootProps()} className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-500 transition-colors">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-indigo-500">{t('dropImageHere')}</p>
          ) : (
            <div>
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>{t('dragDropImage')}</p>
            </div>
          )}
        </div>
      </div>
      {isProcessing && (
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-2 text-indigo-500">{t('processingImage')}</p>
        </div>
      )}
      {text && (
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <FileText className="w-6 h-6 mr-2 text-indigo-500" />
              {t('extractedText')}
            </h2>
            <button
              onClick={copyToClipboard}
              className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Copy className="w-4 h-4 mr-1" />
              {t('copy')}
            </button>
          </div>
          <p className="whitespace-pre-wrap">{text}</p>
        </div>
      )}
    </div>
  );
};

export default ImageToText;