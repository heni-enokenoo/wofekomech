import { Generation } from '../types';

export const generations: Generation[] = [
  {
    id: 0,
    name: {
      en: 'Gen 0: Ideation',
      am: 'ትውልድ 0: ሀሳብ ማመንጨት'
    },
    description: {
      en: 'Transform your raw ideas into viable business concepts',
      am: 'ጥሬ ሀሳቦችዎን ወደ ተግባራዊ የንግድ ፅንሰ-ሀሳቦች ይለውጡ'
    },
    stage: {
      en: 'Idea Only',
      am: 'ሀሳብ ብቻ'
    },
    color: 'from-gray-400 to-gray-600',
    requirements: {
      en: [
        'Have a business idea or problem to solve',
        'Willingness to learn and adapt',
        'Basic commitment to the program'
      ],
      am: [
        'የንግድ ሀሳብ ወይም ለመፍታት የሚፈልጉት ችግር ይኑርዎት',
        'ለመማር እና ለመላመድ ፍላጎት',
        'ለፕሮግራሙ መሰረታዊ ቁርጠኝነት'
      ]
    },
    benefits: {
      en: [
        'Idea validation workshops',
        'Market research training',
        'Basic business model canvas',
        'Peer networking sessions'
      ],
      am: [
        'የሀሳብ ማረጋገጫ ወርክሾፖች',
        'የገበያ ምርምር ስልጠና',
        'መሰረታዊ የንግድ ሞዴል ካንቫስ',
        'የእኩዮች አውታረ መረብ ክፍለ ጊዜዎች'
      ]
    },
    duration: '2-3 months'
  },
  {
    id: 1,
    name: {
      en: 'Gen 1: Validation',
      am: 'ትውልድ 1: ማረጋገጥ'
    },
    description: {
      en: 'Validate your business idea with real market feedback',
      am: 'የንግድ ሀሳብዎን በእውነተኛ የገበያ አስተያየት ያረጋግጡ'
    },
    stage: {
      en: 'Market Validation',
      am: 'የገበያ ማረጋገጥ'
    },
    color: 'from-blue-400 to-blue-600',
    requirements: {
      en: [
        'Completed Gen 0 program',
        'Defined business idea',
        'Initial market research',
        'Basic business plan draft'
      ],
      am: [
        'የትውልድ 0 ፕሮግራም ያጠናቀቁ',
        'የተወሰነ የንግድ ሀሳብ',
        'የመጀመሪያ የገበያ ምርምር',
        'መሰረታዊ የንግድ እቅድ ረቂቅ'
      ]
    },
    benefits: {
      en: [
        'Customer discovery sessions',
        'MVP planning workshops',
        'Financial modeling basics',
        'Legal structure guidance'
      ],
      am: [
        'የደንበኛ ግኝት ክፍለ ጊዜዎች',
        'የMVP እቅድ ወርክሾፖች',
        'የፋይናንሺያል ሞዴሊንግ መሰረቶች',
        'የህግ መዋቅር መመሪያ'
      ]
    },
    duration: '3-4 months'
  },
  {
    id: 2,
    name: {
      en: 'Gen 2: Development',
      am: 'ትውልድ 2: ልማት'
    },
    description: {
      en: 'Build your minimum viable product and test with users',
      am: 'ዝቅተኛ የሚሰራ ምርትዎን ይገንቡ እና ከተጠቃሚዎች ጋር ይሞክሩ'
    },
    stage: {
      en: 'MVP Development',
      am: 'የMVP ልማት'
    },
    color: 'from-green-400 to-green-600',
    requirements: {
      en: [
        'Validated business idea',
        'Customer feedback collected',
        'Technical team or plan',
        'Initial funding or resources'
      ],
      am: [
        'የተረጋገጠ የንግድ ሀሳብ',
        'የተሰበሰበ የደንበኛ አስተያየት',
        'ቴክኒካል ቡድን ወይም እቅድ',
        'የመጀመሪያ ገንዘብ ወይም ሀብቶች'
      ]
    },
    benefits: {
      en: [
        'Product development mentorship',
        'Technical architecture guidance',
        'User testing frameworks',
        'Agile development training'
      ],
      am: [
        'የምርት ልማት አማካሪነት',
        'የቴክኒካል አርክቴክቸር መመሪያ',
        'የተጠቃሚ ሙከራ ማዕቀፎች',
        'የአጅል ልማት ስልጠና'
      ]
    },
    duration: '4-6 months'
  },
  {
    id: 3,
    name: {
      en: 'Gen 3: Launch',
      am: 'ትውልድ 3: ማስጀመር'
    },
    description: {
      en: 'Launch your product and acquire your first customers',
      am: 'ምርትዎን ያስጀምሩ እና የመጀመሪያ ደንበኞችዎን ያግኙ'
    },
    stage: {
      en: 'Product Launch',
      am: 'የምርት ማስጀመሪያ'
    },
    color: 'from-yellow-400 to-yellow-600',
    requirements: {
      en: [
        'Working MVP',
        'User testing completed',
        'Go-to-market strategy',
        'Initial team in place'
      ],
      am: [
        'የሚሰራ MVP',
        'የተጠቃሚ ሙከራ ተጠናቅቋል',
        'ወደ ገበያ የመሄድ ስትራቴጂ',
        'የመጀመሪያ ቡድን በቦታው'
      ]
    },
    benefits: {
      en: [
        'Marketing and sales training',
        'Customer acquisition strategies',
        'Pricing optimization',
        'Performance analytics setup'
      ],
      am: [
        'የማርኬቲንግ እና የሽያጭ ስልጠና',
        'የደንበኛ ማግኛ ስትራቴጂዎች',
        'የዋጋ ማመቻቸት',
        'የአፈጻጸም ትንታኔ ማዋቀር'
      ]
    },
    duration: '3-4 months'
  },
  {
    id: 4,
    name: {
      en: 'Gen 4: Growth',
      am: 'ትውልድ 4: እድገት'
    },
    description: {
      en: 'Scale your business and optimize operations',
      am: 'ንግድዎን ያስፋፉ እና ስራዎችን ያመቻቹ'
    },
    stage: {
      en: 'Scaling & Growth',
      am: 'መስፋፋት እና እድገት'
    },
    color: 'from-purple-400 to-purple-600',
    requirements: {
      en: [
        'Product in market',
        'Paying customers',
        'Revenue generation',
        'Operational processes'
      ],
      am: [
        'ምርት በገበያ ውስጥ',
        'ክፍያ የሚከፍሉ ደንበኞች',
        'የገቢ ማመንጨት',
        'የስራ ሂደቶች'
      ]
    },
    benefits: {
      en: [
        'Growth hacking strategies',
        'Advanced analytics',
        'Team scaling guidance',
        'Investment readiness prep'
      ],
      am: [
        'የእድገት ሃኪንግ ስትራቴጂዎች',
        'የላቀ ትንታኔ',
        'የቡድን መስፋፋት መመሪያ',
        'የኢንቨስትመንት ዝግጁነት ዝግጅት'
      ]
    },
    duration: '6-12 months'
  },
  {
    id: 5,
    name: {
      en: 'Gen 5: Scale',
      am: 'ትውልድ 5: መስፋፋት'
    },
    description: {
      en: 'Achieve sustainable growth and market leadership',
      am: 'ዘላቂ እድገት እና የገበያ አመራር ያሳኩ'
    },
    stage: {
      en: 'Market Leadership',
      am: 'የገበያ አመራር'
    },
    color: 'from-red-400 to-red-600',
    requirements: {
      en: [
        'Proven business model',
        'Significant revenue',
        'Market traction',
        'Scalable operations'
      ],
      am: [
        'የተረጋገጠ የንግድ ሞዴል',
        'ከፍተኛ ገቢ',
        'የገበያ መሳብ',
        'ሊስፋፉ የሚችሉ ስራዎች'
      ]
    },
    benefits: {
      en: [
        'Strategic partnerships',
        'International expansion',
        'Exit strategy planning',
        'Industry leadership development'
      ],
      am: [
        'ስትራቴጂካዊ አጋርነቶች',
        'ዓለም አቀፍ መስፋፋት',
        'የመውጫ ስትራቴጂ እቅድ',
        'የኢንዱስትሪ አመራር ልማት'
      ]
    },
    duration: '12+ months'
  }
];