import React, { useState } from 'react';
import { Student } from '../types';
import { ChevronDown, ChevronUp, List, Filter } from 'lucide-react';
import { getCategoryColor, getGradeColor } from '../utils/contestStats';

interface AllResultsSectionProps {
  students: Student[];
}

export const AllResultsSection: React.FC<AllResultsSectionProps> = ({ students }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto font-semibold text-lg transform"
          >
            <List className="w-6 h-6" />
            عرض جميع النتائج
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {isExpanded && (
          <div className="animate-fadeIn max-w-4xl mx-auto">
            {/* Contest not started message */}
            <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-2 border-orange-200 rounded-3xl p-12 text-center shadow-2xl">
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="text-8xl mb-4 animate-bounce-slow">📚</div>
                  <div className="absolute -top-2 -right-2 text-3xl animate-spin-slow">✨</div>
                  <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">🌟</div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text mb-6 animate-pulse">
                المسابقة لم تبدأ بعد
              </h2>
              
              <div className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                <p className="mb-4">🕐 نحن نستعد حالياً لإطلاق مسابقة المولد النبوي الشريف</p>
                <p className="mb-4">📋 سيتم الإعلان عن النتائج فور انتهاء المسابقة</p>
                <p>⏰ ترقبوا الإعلان عن موعد بدء المسابقة قريباً</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">ما يمكنك فعله الآن:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                  <div className="bg-white/70 p-4 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl mb-2">📅</div>
                    <p className="font-semibold text-gray-800">تابع جدول الاختبارات</p>
                    <p className="text-sm text-gray-600">للاطلاع على مواعيد الاختبارات القادمة</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl mb-2">📚</div>
                    <p className="font-semibold text-gray-800">استعد للمسابقة</p>
                    <p className="text-sm text-gray-600">راجع الأجزاء المطلوبة واستعد جيداً</p>
                  </div>
                </div>
              </div>
              
              <div className="text-lg text-gray-600">
                <p className="mb-2">للاستفسار والمتابعة:</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/50 px-4 py-2 rounded-full">📧 tarekaboya2019@gmail.com</span>
                  <span className="bg-white/50 px-4 py-2 rounded-full">📱 +0155 918 1558</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};