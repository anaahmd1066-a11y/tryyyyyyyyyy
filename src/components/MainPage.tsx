import React from 'react';
import { BookOpen, Calendar, Trophy, Users, Star, Sparkles, ArrowLeft, Clock } from 'lucide-react';

interface MainPageProps {
  onNavigate: (page: 'results' | 'schedule') => void;
}

export const MainPage: React.FC<MainPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Quran shapes */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <BookOpen className="w-24 h-24 text-yellow-300" />
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <BookOpen className="w-32 h-32 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <BookOpen className="w-20 h-20 text-green-300" />
        </div>
        <div className="absolute bottom-20 right-1/3 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <BookOpen className="w-28 h-28 text-blue-300" />
        </div>

        {/* Sparkles */}
        <div className="absolute top-16 left-1/3 animate-pulse">
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-70" />
        </div>
        <div className="absolute top-32 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-6 h-6 text-white opacity-60" />
        </div>
        <div className="absolute bottom-40 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-10 h-10 text-purple-300 opacity-80" />
        </div>

        {/* Radial light beams */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent rounded-full animate-pulse-soft"></div>
        </div>
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-gradient-radial from-blue-400/15 via-transparent to-transparent rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <div className="w-80 h-80 bg-gradient-radial from-purple-400/15 via-transparent to-transparent rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header section */}
        <div className="text-center mb-16 animate-slideInDown">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="relative">
              <BookOpen className="w-16 h-16 text-yellow-400 animate-bounce-slow" />
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-yellow-300 animate-spin-slow" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white glowing-text text-center">
              ترقبوا
            </h1>
            <div className="relative">
              <BookOpen className="w-16 h-16 text-yellow-400 animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -top-2 -left-2">
                <Star className="w-6 h-6 text-yellow-300 animate-spin-slow" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent text-4xl md:text-6xl font-bold mb-6 animate-slideInUp">
            بدء مسابقة المولد النبوي الشريف
          </div>
          
          <div className="text-2xl md:text-3xl text-blue-100 mb-8 animate-fadeInScale">
            بالجامع الشرقي - دمليج - منوف - المنوفية
          </div>

          <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-12 animate-fadeInScale" style={{ animationDelay: '0.8s' }}>
            <p className="mb-4">
              🌟 نتشرف بدعوتكم للمشاركة في مسابقة القرآن الكريم السنوية احتفالاً بالمولد النبوي الشريف
            </p>
            <p className="mb-4">
              📖 مسابقة شاملة لجميع الأعمار والمستويات من حفظة كتاب الله الكريم
            </p>
            <p>
              🏆 جوائز قيمة ومميزة للفائزين في جميع الفئات
            </p>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slideInRight">
            <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">فئات متنوعة</h3>
            <p className="text-gray-200">
              من 3 أجزاء إلى القرآن الكريم كاملاً
              <br />
              لجميع الأعمار والمستويات
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slideInRight" style={{ animationDelay: '0.2s' }}>
            <div className="bg-yellow-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">جوائز قيمة</h3>
            <p className="text-gray-200">
              جوائز مالية ومعنوية مميزة
              <br />
              للمراكز الأولى في كل فئة
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slideInRight" style={{ animationDelay: '0.4s' }}>
            <div className="bg-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">مشاركة واسعة</h3>
            <p className="text-gray-200">
              مشاركة من جميع أنحاء المنطقة
              <br />
              في أجواء إيمانية رائعة
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 animate-fadeInScale">
            اختر ما تريد الوصول إليه
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button
              onClick={() => onNavigate('results')}
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-bold text-xl animate-fadeInScale"
            >
              <div className="flex items-center justify-center gap-4">
                <Trophy className="w-8 h-8 group-hover:animate-bounce" />
                <span>عرض النتائج</span>
                <ArrowLeft className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <p className="text-green-100 text-sm mt-2">ابحث عن نتيجتك في المسابقة</p>
            </button>

            <button
              onClick={() => onNavigate('schedule')}
              className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-12 py-6 rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-bold text-xl animate-fadeInScale" 
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center justify-center gap-4">
                <Calendar className="w-8 h-8 group-hover:animate-bounce" />
                <span>جدول الاختبارات</span>
                <ArrowLeft className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <p className="text-blue-100 text-sm mt-2">مواعيد الاختبارات القادمة</p>
            </button>
          </div>
        </div>

        {/* Countdown section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-8 text-center mb-16 border border-purple-400/30 animate-fadeInScale" style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-purple-300 animate-tick" />
            <h3 className="text-2xl font-bold text-white">قريباً جداً</h3>
            <Clock className="w-8 h-8 text-purple-300 animate-tick" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-purple-200 text-lg mb-4">
            ترقبوا الإعلان عن موعد بدء التسجيل والمشاركة في المسابقة
          </p>
          <div className="text-yellow-300 font-semibold text-xl animate-pulse">
            ✨ استعدوا لرحلة إيمانية مميزة مع كتاب الله الكريم ✨
          </div>
        </div>

        {/* Contact info */}
        <div className="text-center animate-fadeInScale" style={{ animationDelay: '1.2s' }}>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-white/10">
            <h4 className="text-xl font-bold text-white mb-4">للاستفسار والتواصل</h4>
            <div className="text-gray-200 space-y-2">
              <p>📧 tarekaboya2019@gmail.com</p>
              <p>📱 +0155 918 1558</p>
              <p>📍 الجامع الشرقي، دمليج، منوف، المنوفية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};