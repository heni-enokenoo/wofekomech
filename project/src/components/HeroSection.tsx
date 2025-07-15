import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../hooks/useLanguage';
import { 
  RocketIcon, 
  HeartIcon, 
  UsersIcon, 
  TrendingUpIcon,
  SparklesIcon,
  ArrowRightIcon
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div
  className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden"
  style={{
    backgroundImage: `url('https://raw.githubusercontent.com/henokg573/wofekomech/main/background.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
  }}
>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/85 to-green-50/80"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-6">
              <SparklesIcon className="w-4 h-4" />
              {t({
                en: "Your Startup Journey Starts Here",
                am: "የስታርት አፕ ጉዞዎ እዚህ ይጀምራል",
              })}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                {t({ en: "Transform", am: "ይለውጡ" })}
              </span>
              <br />
              {t({ en: "Your Dreams Into", am: "ህልሞችዎን ወደ" })}
              <br />
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {t({ en: "Reality", am: "እውነታ" })}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t({
                en: "Join a community that understands your struggles, celebrates your wins, and provides the support you need to build something extraordinary.",
                am: "ትግሎችዎን የሚረዳ፣ ድሎችዎን የሚያከብር እና ልዩ ነገር ለመገንባት የሚያስፈልግዎን ድጋፍ የሚሰጥ ማህበረሰብ ይቀላቀሉ።",
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <RocketIcon className="w-5 h-5 mr-2" />
                {t({ en: "Start Your Journey", am: "ጉዞዎን ይጀምሩ" })}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                {t({ en: "Explore Resources", am: "ሀብቶችን ያስሱ" })}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <UsersIcon className="w-4 h-4 text-blue-600" />
                <span>
                  {t({ en: "10,000+ Entrepreneurs", am: "10,000+ ስራ ፈጣሪዎች" })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUpIcon className="w-4 h-4 text-green-600" />
                <span>
                  {t({ en: "500+ Success Stories", am: "500+ የስኬት ታሪኮች" })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <HeartIcon className="w-4 h-4 text-red-500" />
                <span>
                  {t({ en: "24/7 Community Support", am: "24/7 የማህበረሰብ ድጋፍ" })}
                </span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t({ en: "Emotional Support", am: "ስሜታዊ ድጋፍ" })}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t({
                  en: "A safe space to share your struggles, fears, and victories with people who truly understand the entrepreneurial journey.",
                  am: "የስራ ፈጣሪነት ጉዞን በእውነት የሚረዱ ሰዎች ጋር ትግሎችዎን፣ ፍራቻዎችዎን እና ድሎችዎን የሚያካፍሉበት ደህንነቱ የተጠበቀ ቦታ።",
                })}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <RocketIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t({ en: "Free Learning", am: "ነፃ ትምህርት" })}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t({
                  en: "Access comprehensive resources, templates, and tools while learning through our gamified screening process.",
                  am: "በእኛ ጨዋታ የተደረገ የምርመራ ሂደት በመማር ሁሉን አቀፍ ሀብቶችን፣ ቴምፕሌቶችን እና መሳሪያዎችን ይድረሱ።",
                })}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-yellow-100">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t({ en: "Community First", am: "ማህበረሰብ መጀመሪያ" })}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t({
                  en: "Connect with like-minded entrepreneurs, find co-founders, and build lasting relationships that go beyond business.",
                  am: "ተመሳሳይ አስተሳሰብ ያላቸው ስራ ፈጣሪዎች ጋር ይገናኙ፣ የንግድ አጋሮችን ያግኙ እና ከንግድ በላይ የሚሄዱ ዘላቂ ግንኙነቶችን ይገንቡ።",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};