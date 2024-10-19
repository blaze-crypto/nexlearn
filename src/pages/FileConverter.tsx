import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { FileUp, FileDown } from 'lucide-react';

const FileConverter: React.FC = () => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [] } });

  const convertFile = () => {
    // This is a mock implementation. In a real-world scenario, you would integrate with a file conversion service.
    if (file) {
      // Simulating file conversion
      setTimeout(() => {
        setConvertedFile(`converted_${file.name.split('.')[0]}.pdf`);
      }, 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 gradient-text">{t('fileConverter')}</h1>
      <div className="mb-8">
        <div {...getRootProps()} className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-500 transition-colors">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-indigo-500">{t('dropFileHere')}</p>
          ) : (
            <div>
              <FileUp className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>{t('dragDropFile')}</p>
            </div>
          )}
        </div>
      </div>
      {file && (
        <div className="mb-4">
          <p>{t('selectedFile')}: {file.name}</p>
          <button
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            onClick={convertFile}
          >
            {t('convertToPDF')}
          </button>
        </div>
      )}
      {convertedFile && (
        <div className="p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FileDown className="w-6 h-6 mr-2 text-green-500" />
            {t('conversionComplete')}
          </h2>
          <p>{t('downloadConverted')}: <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">{convertedFile}</a></p>
        </div>
      )}
    </div>
  );
};

export default FileConverter;