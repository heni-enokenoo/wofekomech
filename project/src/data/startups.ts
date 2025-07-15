import { Startup } from '../types';

export const mockStartups: Startup[] = [
  {
    id: '1',
    name: 'EthioTech Solutions',
    founder: 'Abebe Kebede',
    email: 'abebe@ethiotech.com',
    description: {
      en: 'AI-powered agricultural solutions for Ethiopian farmers',
      am: 'ለኢትዮጵያ ገበሬዎች AI የተጎላበተ የግብርና መፍትሄዎች'
    },
    generation: 3,
    stage: 'Product Launch',
    mentor: 'Dr. Sarah Johnson',
    progress: 75,
    lastActivity: '2 hours ago',
    industry: 'AgriTech',
    fundingRaised: 50000,
    teamSize: 8,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'HealthBridge',
    founder: 'Meron Tadesse',
    email: 'meron@healthbridge.et',
    description: {
      en: 'Telemedicine platform connecting rural patients with doctors',
      am: 'የገጠር ታካሚዎችን ከዶክተሮች ጋር የሚያገናኝ የቴሌሜዲሲን መድረክ'
    },
    generation: 4,
    stage: 'Scaling & Growth',
    mentor: 'Dr. Michael Chen',
    progress: 85,
    lastActivity: '1 day ago',
    industry: 'HealthTech',
    fundingRaised: 120000,
    teamSize: 15,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'EduConnect',
    founder: 'Dawit Alemayehu',
    email: 'dawit@educonnect.et',
    description: {
      en: 'Digital learning platform for Ethiopian students',
      am: 'ለኢትዮጵያ ተማሪዎች ዲጂታል የመማሪያ መድረክ'
    },
    generation: 2,
    stage: 'MVP Development',
    mentor: 'Prof. Lisa Park',
    progress: 60,
    lastActivity: '3 hours ago',
    industry: 'EdTech',
    fundingRaised: 25000,
    teamSize: 5,
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '4',
    name: 'GreenEnergy Ethiopia',
    founder: 'Hanan Mohammed',
    email: 'hanan@greenenergy.et',
    description: {
      en: 'Solar energy solutions for off-grid communities',
      am: 'ከመረብ ውጭ ላሉ ማህበረሰቦች የፀሐይ ኃይል መፍትሄዎች'
    },
    generation: 1,
    stage: 'Market Validation',
    mentor: 'Dr. James Wilson',
    progress: 40,
    lastActivity: '5 hours ago',
    industry: 'CleanTech',
    fundingRaised: 15000,
    teamSize: 3,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '5',
    name: 'FinanceFlow',
    founder: 'Yonas Bekele',
    email: 'yonas@financeflow.et',
    description: {
      en: 'Mobile payment solutions for small businesses',
      am: 'ለትናንሽ ንግዶች የሞባይል ክፍያ መፍትሄዎች'
    },
    generation: 5,
    stage: 'Market Leadership',
    mentor: 'Dr. Emma Rodriguez',
    progress: 95,
    lastActivity: '30 minutes ago',
    industry: 'FinTech',
    fundingRaised: 500000,
    teamSize: 25,
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];