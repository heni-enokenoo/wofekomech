export interface Language {
  code: 'en' | 'am';
  name: string;
  flag: string;
}

export interface Question {
  id: number;
  category: 'vision' | 'market' | 'team' | 'product' | 'finance' | 'growth';
  question: {
    en: string;
    am: string;
  };
  options: {
    en: string[];
    am: string[];
  };
  correctAnswer: number;
  explanation: {
    en: string;
    am: string;
  };
  points: number;
}

export interface Resource {
  id: string;
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  type: 'guide' | 'template' | 'video' | 'tool' | 'course' | 'webinar';
  category: string;
  downloadUrl?: string;
  readTime?: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  generation: number; // 0-5
}

export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  content: {
    en: string;
    am: string;
  };
  timestamp: string;
  likes: number;
  replies: number;
  category: 'success' | 'challenge' | 'question' | 'vent' | 'milestone' | 'funding';
  isAnonymous?: boolean;
  generation?: number;
}

export interface UserProgress {
  questionsAnswered: number;
  totalQuestions: number;
  score: number;
  completedCategories: string[];
  unlockedResources: string[];
  level: number;
  generation: number; // 0-5
}

export interface Startup {
  id: string;
  name: string;
  founder: string;
  email: string;
  description: {
    en: string;
    am: string;
  };
  generation: number; // 0-5
  stage: string;
  mentor?: string;
  progress: number;
  lastActivity: string;
  industry: string;
  fundingRaised: number;
  teamSize: number;
  avatar: string;
}

export interface Mentor {
  id: string;
  name: string;
  email: string;
  expertise: string[];
  experience: number;
  startups: string[];
  rating: number;
  avatar: string;
  bio: {
    en: string;
    am: string;
  };
  availability: 'available' | 'busy' | 'unavailable';
}

export interface Event {
  id: string;
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  date: string;
  time: string;
  type: 'workshop' | 'webinar' | 'networking' | 'pitch' | 'mentorship';
  speaker: string;
  capacity: number;
  registered: number;
  generation?: number;
}

export interface Generation {
  id: number;
  name: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  stage: {
    en: string;
    am: string;
  };
  color: string;
  requirements: {
    en: string[];
    am: string[];
  };
  benefits: {
    en: string[];
    am: string[];
  };
  duration: string;
}