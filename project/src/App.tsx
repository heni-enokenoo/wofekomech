import React, { useState } from 'react';
import { AuthModal } from './components/AuthModal';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { HeroSection } from './components/HeroSection';
import { GenerationShowcase } from './components/GenerationShowcase';
import { GameifiedQuiz } from './components/GameifiedQuiz';
import { ResourceLibrary } from './components/ResourceLibrary';
import { CommunitySection } from './components/CommunitySection';
import { EventsSection } from './components/EventsSection';
import { StartupDashboard } from './components/StartupDashboard';
import { MentorDashboard } from './components/MentorDashboard';
import { useLanguage } from './hooks/useLanguage';
import { 
  MenuIcon, 
  XIcon, 
  HomeIcon, 
  BookOpenIcon, 
  UsersIcon, 
  GamepadIcon,
  HeartIcon,
  MailIcon,
  PhoneIcon,
  CalendarIcon,
  LayoutDashboardIcon,
  UserIcon,
  GraduationCapIcon,
  RocketIcon,
  ChevronDownIcon
} from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; userType: 'startup' | 'mentor' | null }>({
    isOpen: false,
    userType: null
  });
  const [user, setUser] = useState<any>(null);

  const navigationItems = [
    { id: 'home', label: { en: 'Home', am: 'ቤት' }, icon: HomeIcon },
    { id: 'generations', label: { en: 'Journey', am: 'ጉዞ' }, icon: RocketIcon },
    { id: 'quiz', label: { en: 'Learning', am: 'መማር' }, icon: GamepadIcon },
    { id: 'resources', label: { en: 'Resources', am: 'ሀብቶች' }, icon: BookOpenIcon },
    { id: 'community', label: { en: 'Community', am: 'ማህበረሰብ' }, icon: UsersIcon },
    { id: 'events', label: { en: 'Events', am: 'ዝግጅቶች' }, icon: CalendarIcon },
  ];

  const dashboardItems = [
    { id: 'startup-dashboard', label: { en: 'Startup Dashboard', am: 'የስታርት አፕ ዳሽቦርድ' }, icon: LayoutDashboardIcon, userType: 'startup' },
    { id: 'mentor-dashboard', label: { en: 'Mentor Dashboard', am: 'የአማካሪ ዳሽቦርድ' }, icon: GraduationCapIcon, userType: 'mentor' },
  ];

  const handleDashboardClick = (userType: 'startup' | 'mentor') => {
    if (!user || user.type !== userType) {
      setAuthModal({ isOpen: true, userType });
    } else {
      setActiveSection(`${userType}-dashboard`);
    }
    setDashboardDropdownOpen(false);
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    setActiveSection(`${userData.type}-dashboard`);
  };

  const handleLogout = () => {
    setUser(null);
    setActiveSection('home');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection />
            <GenerationShowcase />
          </>
        );
      case 'generations':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-20">
            <GenerationShowcase />
          </div>
        );
      case 'quiz':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t({ en: 'Interactive Learning Journey', am: 'በይነተገናኝ የመማሪያ ጉዞ' })}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t({ 
                    en: 'Learn essential startup concepts while unlocking resources and building your entrepreneurial knowledge.',
                    am: 'ሀብቶችን እየከፈቱ እና የስራ ፈጣሪነት እውቀትዎን እየገነቡ አስፈላጊ የስታርት አፕ ፅንሰ-ሀሳቦችን ይማሩ።'
                  })}
                </p>
              </div>
              <GameifiedQuiz />
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20">
            <div className="container mx-auto px-6">
              <ResourceLibrary />
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-20">
            <div className="container mx-auto px-6">
              <CommunitySection />
            </div>
          </div>
        );
      case 'events':
        return <EventsSection />;
      case 'startup-dashboard':
        return user && user.type === 'startup' ? (
          <StartupDashboard user={user} onLogout={handleLogout} />
        ) : (
          <>
            <HeroSection />
            <GenerationShowcase />
          </>
        );
      case 'mentor-dashboard':
        return user && user.type === 'mentor' ? (
          <MentorDashboard user={user} onLogout={handleLogout} />
        ) : (
          <>
            <HeroSection />
            <GenerationShowcase />
          </>
        );
      default:
        return (
          <>
            <HeroSection />
            <GenerationShowcase />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WofeKomech   
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {t(item.label)}
                </button>
              ))}
              
              <div className="h-6 w-px bg-gray-300 mx-2" />
              
              {/* Dashboard Dropdown */}
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDashboardDropdownOpen(!dashboardDropdownOpen)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection.includes('dashboard')
                      ? 'bg-purple-100 text-purple-700 font-medium'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <LayoutDashboardIcon className="w-4 h-4" />
                  {t({ en: 'Dashboards', am: 'ዳሽቦርዶች' })}
                  <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${dashboardDropdownOpen ? 'rotate-180' : ''}`} />
                </Button>
                
                {dashboardDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]">
                    {dashboardItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleDashboardClick(item.userType)}
                        className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center gap-3 hover:bg-purple-50 hover:text-purple-600 first:rounded-t-lg last:rounded-b-lg ${
                          activeSection === item.id
                            ? 'bg-purple-100 text-purple-700 font-medium'
                            : 'text-gray-600'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {t(item.label)}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Backdrop to close dropdown when clicking outside */}
                {dashboardDropdownOpen && (
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setDashboardDropdownOpen(false)}
                  />
                )}
              </div>
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-2">
                {[...navigationItems, ...dashboardItems].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if ('userType' in item) {
                        handleDashboardClick(item.userType);
                      } else {
                        setActiveSection(item.id);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? item.id.includes('dashboard') 
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {t(item.label)}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {renderActiveSection()}
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ isOpen: false, userType: null })}
        userType={authModal.userType!}
        onLogin={handleLogin}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <HeartIcon className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold">MentorGarage</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                {t({ 
                  en: 'Empowering Ethiopian entrepreneurs through structured mentorship, comprehensive resources, and a supportive community across 6 generations of growth.',
                  am: 'በ6 የእድገት ትውልዶች ውስጥ በተዋቀረ አማካሪነት፣ አጠቃላይ ሀብቶች እና ደጋፊ ማህበረሰብ የኢትዮጵያ ስራ ፈጣሪዎችን ማጎልበት።'
                })}
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <MailIcon className="w-4 h-4 mr-2" />
                  {t({ en: 'Contact', am: 'ያግኙን' })}
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  {t({ en: 'Support', am: 'ድጋፍ' })}
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {t({ en: 'Programs', am: 'ፕሮግራሞች' })}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">{t({ en: 'Generation 0-5', am: 'ትውልድ 0-5' })}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">{t({ en: 'Mentorship', am: 'አማካሪነት' })}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">{t({ en: 'Resources', am: 'ሀብቶች' })}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">{t({ en: 'Community', am: 'ማህበረሰብ' })}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {t({ en: 'Support', am: 'ድጋፍ' })}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">{t({ en: 'Help Center', am: 'የእርዳታ ማዕከል' })}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">{t({ en: 'Success Stories', am: 'የስኬት ታሪኮች' })}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">{t({ en: 'Privacy Policy', am: 'የግላዊነት ፖሊሲ' })}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">{t({ en: 'Terms of Service', am: 'የአገልግሎት ውሎች' })}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MentorGarage. {t({ en: 'All rights reserved.', am: 'ሁሉም መብቶች የተጠበቁ ናቸው።' })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}