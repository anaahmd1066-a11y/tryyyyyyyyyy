import React, { useState } from 'react';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { ExamSchedule } from './components/ExamSchedule';
import { SearchSection } from './components/SearchSection';
import { ResultCard } from './components/ResultCard';
import { StatsSection } from './components/StatsSection';
import { AllResultsSection } from './components/AllResultsSection';
import { Footer } from './components/Footer';
import { rankedStudents } from './data/students';
import { calculateStats } from './utils/contestStats';
import { Student } from './types';

function App() {
  const [searchResult, setSearchResult] = useState<Student | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [currentPage, setCurrentPage] = useState<'main' | 'results' | 'schedule'>('main');
  
  const stats = calculateStats(rankedStudents);

  const handleSearchResult = (student: Student | null) => {
    setSearchResult(student);
    setSearchAttempted(true);
  };

  const handleNavigation = (page: 'results' | 'schedule') => {
    setCurrentPage(page);
    setSearchResult(null);
    setSearchAttempted(false);
  };

  return (
    <div className="min-h-screen" dir="rtl">
      {currentPage === 'main' ? (
        <MainPage onNavigate={handleNavigation} />
      ) : (
        <>
          <Header />
          
          {/* Navigation */}
          <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setCurrentPage('main')}
                  className="px-6 py-3 rounded-xl font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  الصفحة الرئيسية
                </button>
                <button
                  onClick={() => setCurrentPage('results')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentPage === 'results'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  النتائج
                </button>
                <button
                  onClick={() => setCurrentPage('schedule')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentPage === 'schedule'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  جدول الاختبارات
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
      
      {currentPage === 'results' && (
        <div className="bg-gray-50 min-h-screen">
          <SearchSection 
            students={rankedStudents} 
            onResult={handleSearchResult}
          />
          
          {/* Search Results */}
          {searchAttempted && (
            <section className="py-12 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                  <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-2 border-orange-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <div className="text-6xl mb-4 animate-bounce-slow">⏳</div>
                        <div className="absolute -top-1 -right-1 text-2xl animate-spin-slow">✨</div>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text mb-4 animate-pulse">
                      المسابقة لم تبدأ بعد
                    </h3>
                    
                    <div className="text-lg text-gray-700 mb-6 space-y-2">
                      <p>🔍 البحث عن النتائج غير متاح حالياً</p>
                      <p>📅 سيتم تفعيل البحث فور انتهاء المسابقة</p>
                      <p>⭐ ترقبوا الإعلان عن النتائج قريباً</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4">
                      <p className="text-blue-800 font-semibold">💡 نصيحة: استعد جيداً للمسابقة وراجع الأجزاء المطلوبة</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
          <StatsSection stats={stats} />
          <AllResultsSection students={rankedStudents} />
          <Footer />
        </div>
      )}
      
      {currentPage === 'schedule' && (
        <div className="bg-gray-50 min-h-screen">
        <ExamSchedule />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;