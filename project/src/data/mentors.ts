import { Mentor } from '../types';

export const mockMentors: Mentor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah@mentorgarage.com',
    expertise: ['AgriTech', 'AI/ML', 'Product Development'],
    experience: 15,
    startups: ['1', '3'],
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: {
      en: 'Former CTO at major AgriTech company with 15+ years experience in AI and agricultural technology.',
      am: 'በዋና AgriTech ኩባንያ የቀድሞ CTO ከ15+ ዓመት በAI እና በግብርና ቴክኖሎጂ ልምድ ያላት።'
    },
    availability: 'available'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    email: 'michael@mentorgarage.com',
    expertise: ['HealthTech', 'Telemedicine', 'Scaling'],
    experience: 12,
    startups: ['2'],
    rating: 4.8,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: {
      en: 'Healthcare entrepreneur and investor with expertise in telemedicine and digital health solutions.',
      am: 'በቴሌሜዲሲን እና በዲጂታል ጤና መፍትሄዎች ላይ ልዩ እውቀት ያለው የጤና አጠባበቅ ስራ ፈጣሪ እና ባለሀብት።'
    },
    availability: 'busy'
  },
  {
    id: '3',
    name: 'Prof. Lisa Park',
    email: 'lisa@mentorgarage.com',
    expertise: ['EdTech', 'User Experience', 'Research'],
    experience: 20,
    startups: ['3'],
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: {
      en: 'Education technology researcher and former startup founder with deep expertise in learning platforms.',
      am: 'የትምህርት ቴክኖሎጂ ተመራማሪ እና የቀድሞ ስታርት አፕ መስራች በመማሪያ መድረኮች ላይ ጥልቅ እውቀት ያላት።'
    },
    availability: 'available'
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    email: 'james@mentorgarage.com',
    expertise: ['CleanTech', 'Sustainability', 'Market Validation'],
    experience: 18,
    startups: ['4'],
    rating: 4.7,
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: {
      en: 'Clean energy expert and environmental scientist with extensive experience in sustainable technology startups.',
      am: 'በዘላቂ ቴክኖሎጂ ስታርት አፖች ላይ ሰፊ ልምድ ያለው የንጹህ ኃይል ባለሙያ እና የአካባቢ ሳይንቲስት።'
    },
    availability: 'available'
  },
  {
    id: '5',
    name: 'Dr. Emma Rodriguez',
    email: 'emma@mentorgarage.com',
    expertise: ['FinTech', 'Scaling', 'Investment'],
    experience: 22,
    startups: ['5'],
    rating: 5.0,
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: {
      en: 'Serial entrepreneur and VC partner specializing in FinTech and financial inclusion in emerging markets.',
      am: 'በፋይናንሺያል ቴክኖሎጂ እና በአዳዲስ ገበያዎች ውስጥ በፋይናንሺያል ማካተት ላይ የተካነ ተከታታይ ስራ ፈጣሪ እና VC አጋር።'
    },
    availability: 'available'
  }
];