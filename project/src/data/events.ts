import { Event } from '../types';

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: {
      en: 'Startup Pitch Night',
      am: 'የስታርት አፕ ፒች ሌሊት'
    },
    description: {
      en: 'Monthly pitch competition for Gen 3-5 startups to present to investors',
      am: 'ለትውልድ 3-5 ስታርት አፖች ለባለሀብቶች የሚያቀርቡበት ወርሃዊ ፒች ውድድር'
    },
    date: '2025-02-15',
    time: '18:00',
    type: 'pitch',
    speaker: 'Panel of Investors',
    capacity: 100,
    registered: 75,
    generation: 3
  },
  {
    id: '2',
    title: {
      en: 'AI in Agriculture Workshop',
      am: 'በግብርና ውስጥ AI ወርክሾፕ'
    },
    description: {
      en: 'Learn how to integrate AI solutions into agricultural businesses',
      am: 'AI መፍትሄዎችን በግብርና ንግዶች ውስጥ እንዴት እንደሚያዋህዱ ይማሩ'
    },
    date: '2025-02-20',
    time: '14:00',
    type: 'workshop',
    speaker: 'Dr. Sarah Johnson',
    capacity: 50,
    registered: 32,
    generation: 2
  },
  {
    id: '3',
    title: {
      en: 'Funding Strategies Webinar',
      am: 'የገንዘብ ማሰባሰቢያ ስትራቴጂዎች ዌቢናር'
    },
    description: {
      en: 'Comprehensive guide to raising capital for your startup',
      am: 'ለስታርት አፕዎ ካፒታል ለማሰባሰብ አጠቃላይ መመሪያ'
    },
    date: '2025-02-25',
    time: '16:00',
    type: 'webinar',
    speaker: 'Dr. Emma Rodriguez',
    capacity: 200,
    registered: 156,
    generation: 4
  },
  {
    id: '4',
    title: {
      en: 'Networking Mixer',
      am: 'የአውታረ መረብ ማቀላቀያ'
    },
    description: {
      en: 'Connect with fellow entrepreneurs, mentors, and investors',
      am: 'ከሌሎች ስራ ፈጣሪዎች፣ አማካሪዎች እና ባለሀብቶች ጋር ይገናኙ'
    },
    date: '2025-03-01',
    time: '17:30',
    type: 'networking',
    speaker: 'Community',
    capacity: 150,
    registered: 89
  },
  {
    id: '5',
    title: {
      en: 'Product Development Masterclass',
      am: 'የምርት ልማት ማስተር ክላስ'
    },
    description: {
      en: 'Advanced techniques for building scalable products',
      am: 'ሊስፋፉ የሚችሉ ምርቶችን ለመገንባት የላቀ ቴክኒኮች'
    },
    date: '2025-03-05',
    time: '13:00',
    type: 'workshop',
    speaker: 'Prof. Lisa Park',
    capacity: 40,
    registered: 28,
    generation: 2
  }
];