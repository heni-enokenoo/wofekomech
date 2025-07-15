import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../hooks/useLanguage';
import { 
  XIcon, 
  EyeIcon, 
  EyeOffIcon, 
  MailIcon, 
  LockIcon, 
  UserIcon,
  BuildingIcon,
  GraduationCapIcon
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'startup' | 'mentor';
  onLogin: (userData: any) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, userType, onLogin }) => {
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    expertise: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name || 'User',
      email: formData.email,
      type: userType,
      company: formData.company,
      expertise: formData.expertise
    };
    onLogin(userData);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            {userType === 'startup' ? (
              <BuildingIcon className="w-8 h-8 text-blue-600" />
            ) : (
              <GraduationCapIcon className="w-8 h-8 text-purple-600" />
            )}
            <div>
              <CardTitle className="text-xl">
                {isLogin 
                  ? t({ en: 'Welcome Back', am: 'እንኳን ደህና መጡ' })
                  : t({ en: 'Join Us', am: 'ይቀላቀሉን' })
                }
              </CardTitle>
              <p className="text-sm text-gray-600">
                {userType === 'startup' 
                  ? t({ en: 'Startup Dashboard Access', am: 'የስታርት አፕ ዳሽቦርድ መዳረሻ' })
                  : t({ en: 'Mentor Dashboard Access', am: 'የአማካሪ ዳሽቦርድ መዳረሻ' })
                }
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder={t({ en: 'Full Name', am: 'ሙሉ ስም' })}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            )}

            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="email"
                placeholder={t({ en: 'Email Address', am: 'ኢሜይል አድራሻ' })}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={t({ en: 'Password', am: 'የይለፍ ቃል' })}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
              </button>
            </div>

            {!isLogin && userType === 'startup' && (
              <div className="relative">
                <BuildingIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder={t({ en: 'Company/Startup Name', am: 'ኩባንያ/ስታርት አፕ ስም' })}
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            )}

            {!isLogin && userType === 'mentor' && (
              <div className="relative">
                <GraduationCapIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder={t({ en: 'Area of Expertise', am: 'የእውቀት ዘርፍ' })}
                  value={formData.expertise}
                  onChange={(e) => handleInputChange('expertise', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            )}

            <Button 
              type="submit" 
              className={`w-full ${userType === 'startup' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} text-white`}
            >
              {isLogin 
                ? t({ en: 'Sign In', am: 'ግባ' })
                : t({ en: 'Create Account', am: 'መለያ ፍጠር' })
              }
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                {isLogin 
                  ? t({ en: "Don't have an account? Sign up", am: 'መለያ የለዎትም? ይመዝገቡ' })
                  : t({ en: 'Already have an account? Sign in', am: 'መለያ አለዎት? ይግቡ' })
                }
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};