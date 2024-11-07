import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface EducationInfo {
  school: string;
  faculty: string;
  major: string;
  graduationYear: string;
  adminClass: string;
}

const CVGenerator = () => {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');
  const { register, handleSubmit } = useForm<EducationInfo>();
  const [selectedTheme, setSelectedTheme] = useState('modern');

  const themes = [
    {
      id: 'modern',
      name: 'Modern Professional',
      preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
    },
    {
      id: 'creative',
      name: 'Creative Design',
      preview: 'https://images.unsplash.com/photo-1626785774625-0c96f21c4836?w=400&q=80',
    },
    {
      id: 'minimal',
      name: 'Minimal Clean',
      preview: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?w=400&q=80',
    },
  ];

  const onSubmit = (data: EducationInfo) => {
    console.log('Generated CV with:', { data, language, selectedTheme });
    // Here you would implement the actual CV generation logic
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {language === 'en' ? 'CV Generator' : 'Tạo CV'}
        </h2>
        <button
          onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
          className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
        >
          {language === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Educational Information' : 'Thông tin học vấn'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {language === 'en' ? 'School' : 'Trường'}
              </label>
              <input
                {...register('school')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {language === 'en' ? 'Faculty' : 'Khoa'}
              </label>
              <input
                {...register('faculty')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {language === 'en' ? 'Major' : 'Ngành'}
              </label>
              <input
                {...register('major')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {language === 'en' ? 'Graduation Year' : 'Năm tốt nghiệp'}
              </label>
              <input
                {...register('graduationYear')}
                type="number"
                min="2024"
                max="2030"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                {language === 'en' ? 'Administrative Class' : 'Lớp hành chính'}
              </label>
              <input
                {...register('adminClass')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Choose CV Theme' : 'Chọn giao diện CV'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                  selectedTheme === theme.id ? 'ring-2 ring-cyan-500' : ''
                }`}
                onClick={() => setSelectedTheme(theme.id)}
              >
                <img
                  src={theme.preview}
                  alt={theme.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-medium">{theme.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors font-medium text-lg"
        >
          {language === 'en' ? 'Generate CV' : 'Tạo CV'}
        </button>
      </form>
    </div>
  );
};

export default CVGenerator;