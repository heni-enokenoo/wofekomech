import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    category: 'vision',
    question: {
      en: "What's the most important quality for a startup founder?",
      am: "ለስታርት አፕ መስራች በጣም አስፈላጊው ባህሪ ምንድን ነው?"
    },
    options: {
      en: ["Having lots of money", "Persistence and resilience", "Technical skills", "Network connections"],
      am: ["ብዙ ገንዘብ መኖር", "ጽናት እና መቋቋም", "ቴክኒካል ክህሎት", "የአውታረ መረብ ግንኙነቶች"]
    },
    correctAnswer: 1,
    explanation: {
      en: "Persistence and resilience are crucial because startups face many challenges and failures. The ability to bounce back and keep going is what separates successful founders from others.",
      am: "ጽናት እና መቋቋም በጣም አስፈላጊ ናቸው ምክንያቱም ስታርት አፖች ብዙ ፈተናዎች እና ውድቀቶች ስላጋጥማቸው። መመለስ እና መቀጠል መቻል ስኬታማ መስራቾችን ከሌሎች የሚለየው ነው።"
    },
    points: 10
  },
  {
    id: 2,
    category: 'market',
    question: {
      en: "Before building your product, what should you do first?",
      am: "ምርትዎን ከመገንባትዎ በፊት መጀመሪያ ምን ማድረግ አለብዎት?"
    },
    options: {
      en: ["Write code immediately", "Validate the problem exists", "Raise funding", "Hire a team"],
      am: ["ወዲያውኑ ኮድ መጻፍ", "ችግሩ እንዳለ ማረጋገጥ", "ገንዘብ ማሰባሰብ", "ቡድን መቅጠር"]
    },
    correctAnswer: 1,
    explanation: {
      en: "Problem validation is crucial. You need to ensure there's a real problem that people are willing to pay to solve before investing time and resources in building a solution.",
      am: "የችግር ማረጋገጥ በጣም አስፈላጊ ነው። መፍትሄ ለመገንባት ጊዜ እና ሀብት ከማፍሰስዎ በፊት ሰዎች ለመፍታት ፈቃደኞች የሆኑበት እውነተኛ ችግር እንዳለ ማረጋገጥ አለብዎት።"
    },
    points: 15
  },
  {
    id: 3,
    category: 'team',
    question: {
      en: "What's the biggest mistake when building a startup team?",
      am: "የስታርት አፕ ቡድን በሚገነቡበት ጊዜ ትልቁ ስህተት ምንድን ነው?"
    },
    options: {
      en: ["Hiring too quickly", "Not defining roles clearly", "Choosing friends over skills", "All of the above"],
      am: ["በጣም በፍጥነት መቅጠር", "ሚናዎችን በግልጽ አለመወሰን", "ከክህሎት ይልቅ ጓደኞችን መምረጥ", "ሁሉም ከላይ የተጠቀሱት"]
    },
    correctAnswer: 3,
    explanation: {
      en: "All these mistakes can be fatal for startups. Building the right team with clear roles and complementary skills is essential for success.",
      am: "እነዚህ ሁሉ ስህተቶች ለስታርት አፖች ገዳይ ሊሆኑ ይችላሉ። ግልጽ ሚናዎች እና ተጨማሪ ክህሎቶች ያላቸው ትክክለኛ ቡድን መገንባት ለስኬት አስፈላጊ ነው።"
    },
    points: 20
  },
  {
    id: 4,
    category: 'product',
    question: {
      en: "What is an MVP (Minimum Viable Product)?",
      am: "MVP (ዝቅተኛ የሚሰራ ምርት) ምንድን ነው?"
    },
    options: {
      en: ["A cheap version of your product", "The simplest version that provides value", "A prototype that doesn't work", "The final product"],
      am: ["የምርትዎ ርካሽ ስሪት", "ዋጋ የሚሰጠው ቀላሉ ስሪት", "የማይሰራ ፕሮቶታይፕ", "የመጨረሻው ምርት"]
    },
    correctAnswer: 1,
    explanation: {
      en: "An MVP is the simplest version of your product that still provides value to users and allows you to learn from their feedback.",
      am: "MVP አሁንም ለተጠቃሚዎች ዋጋ የሚሰጥ እና ከእነሱ አስተያየት እንዲማሩ የሚያስችል የምርትዎ ቀላሉ ስሪት ነው።"
    },
    points: 15
  },
  {
    id: 5,
    category: 'finance',
    question: {
      en: "What's the most important financial metric for early-stage startups?",
      am: "ለመጀመሪያ ደረጃ ስታርት አፖች በጣም አስፈላጊው የፋይናንስ መለኪያ ምንድን ነው?"
    },
    options: {
      en: ["Revenue", "Profit", "Cash runway", "Valuation"],
      am: ["ገቢ", "ትርፍ", "የገንዘብ መሮጫ", "ግምት"]
    },
    correctAnswer: 2,
    explanation: {
      en: "Cash runway (how long your money will last) is crucial for early-stage startups because it determines how much time you have to achieve milestones.",
      am: "የገንዘብ መሮጫ (ገንዘብዎ ለምን ያህል ጊዜ እንደሚቆይ) ለመጀመሪያ ደረጃ ስታርት አፖች በጣም አስፈላጊ ነው ምክንያቱም ምዕራፎችን ለማሳካት ምን ያህል ጊዜ እንዳለዎት ስለሚወስን።"
    },
    points: 20
  }
];

// Add more questions to reach 30+
export const additionalQuestions: Question[] = [
  // Add 25+ more questions covering all categories
  // This is a sample - you can expand this array
];

export const allQuestions = [...questions, ...additionalQuestions];