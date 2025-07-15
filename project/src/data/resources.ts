import { Resource } from '../types';

export const freeResources: Resource[] = [
  {
    id: 'business-plan-template',
    title: {
      en: 'Complete Business Plan Template',
      am: 'ሙሉ የንግድ እቅድ ቴምፕሌት'
    },
    description: {
      en: 'A comprehensive template to help you create a professional business plan that investors love.',
      am: 'ባለሀብቶች የሚወዱትን ፕሮፌሽናል የንግድ እቅድ እንዲፈጥሩ የሚረዳዎት አጠቃላይ ቴምፕሌት።'
    },
    type: 'template',
    category: 'Planning',
    downloadUrl: '/templates/business-plan.pdf',
    readTime: 30,
    difficulty: 'beginner'
  },
  {
    id: 'market-research-guide',
    title: {
      en: 'Market Research Masterclass',
      am: 'የገበያ ምርምር ማስተር ክላስ'
    },
    description: {
      en: 'Learn how to validate your startup idea and understand your target market deeply.',
      am: 'የስታርት አፕ ሀሳብዎን እንዴት ማረጋገጥ እና ዒላማ ገበያዎን በጥልቀት እንደሚረዱ ይማሩ።'
    },
    type: 'guide',
    category: 'Research',
    readTime: 45,
    difficulty: 'intermediate'
  },
  {
    id: 'pitch-deck-template',
    title: {
      en: 'Investor Pitch Deck Template',
      am: 'የባለሀብት ፒች ዴክ ቴምፕሌት'
    },
    description: {
      en: 'Create compelling presentations that get investors excited about your startup.',
      am: 'ባለሀብቶች ስለ ስታርት አፕዎ እንዲደሰቱ የሚያደርጉ አሳማኝ አቀራረቦችን ይፍጠሩ።'
    },
    type: 'template',
    category: 'Funding',
    downloadUrl: '/templates/pitch-deck.pptx',
    readTime: 20,
    difficulty: 'intermediate'
  },
  {
    id: 'financial-modeling',
    title: {
      en: 'Financial Modeling for Startups',
      am: 'ለስታርት አፖች የፋይናንሺያል ሞዴሊንግ'
    },
    description: {
      en: 'Master the art of financial projections and understand your startup\'s financial health.',
      am: 'የፋይናንሺያል ትንበያዎችን ጥበብ ይቆጣጠሩ እና የስታርት አፕዎን የፋይናንስ ጤንነት ይረዱ።'
    },
    type: 'tool',
    category: 'Finance',
    downloadUrl: '/tools/financial-model.xlsx',
    readTime: 60,
    difficulty: 'advanced'
  },
  {
    id: 'mvp-development',
    title: {
      en: 'MVP Development Guide',
      am: 'የMVP ልማት መመሪያ'
    },
    description: {
      en: 'Step-by-step guide to building your Minimum Viable Product efficiently.',
      am: 'የዝቅተኛ የሚሰራ ምርትዎን በብቃት ለመገንባት ደረጃ በደረጃ መመሪያ።'
    },
    type: 'guide',
    category: 'Development',
    readTime: 40,
    difficulty: 'intermediate'
  },
  {
    id: 'legal-checklist',
    title: {
      en: 'Startup Legal Checklist',
      am: 'የስታርት አፕ ህጋዊ ቼክሊስት'
    },
    description: {
      en: 'Essential legal considerations every startup founder should know.',
      am: 'እያንዳንዱ የስታርት አፕ መስራች ማወቅ ያለበት አስፈላጊ ህጋዊ ግምቶች።'
    },
    type: 'guide',
    category: 'Legal',
    readTime: 25,
    difficulty: 'beginner'
  }
];