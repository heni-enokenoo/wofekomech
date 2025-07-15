import { CommunityPost } from '../types';

export const communityPosts: CommunityPost[] = [
  {
    id: '1',
    author: 'Sarah M.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: {
      en: "Just got rejected by my 15th investor. Feeling defeated but not giving up. Sometimes I wonder if I'm crazy for pursuing this dream. Anyone else been through this emotional rollercoaster?",
      am: "በ15ኛው ባለሀብት ተቀባይነት አላገኘሁም። ተሸንፌ ይሰማኛል ግን አልተወውም። አንዳንድ ጊዜ ይህንን ህልም ስከተል እብድ ነኝ ብዬ እጠይቃለሁ። ሌላ ሰው በዚህ ስሜታዊ ሮለር ኮስተር አልፏል?"
    },
    timestamp: '2 hours ago',
    likes: 24,
    replies: 8,
    category: 'vent',
    isAnonymous: false
  },
  {
    id: '2',
    author: 'Anonymous',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: {
      en: "My co-founder just left the company. I feel betrayed and lost. We built this together for 2 years. How do I move forward? The loneliness is crushing.",
      am: "የንግድ አጋሬ ኩባንያውን ለቀቀ። ተከዶ እና ጠፍቼ ይሰማኛል። ይህንን ለ2 ዓመት አብረን ገንብተናል። እንዴት ወደፊት እሄዳለሁ? ብቸኝነቱ እየደቀቀኝ ነው።"
    },
    timestamp: '5 hours ago',
    likes: 31,
    replies: 12,
    category: 'vent',
    isAnonymous: true
  },
  {
    id: '3',
    author: 'Michael K.',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: {
      en: "Finally hit $10K MRR! 🎉 It took 18 months of grinding, countless sleepless nights, and moments where I wanted to quit. To anyone struggling - it gets better. Keep pushing!",
      am: "በመጨረሻ $10K MRR ደረስኩ! 🎉 18 ወር መፍጨርጨር፣ ቁጥር የሌላቸው እንቅልፍ አልባ ሌሊቶች እና ልተው የፈለግኩባቸው ጊዜያት ወስዶብኛል። ለሚታገሉ ሁሉ - ይሻላል። መግፋት ቀጥሉ!"
    },
    timestamp: '1 day ago',
    likes: 89,
    replies: 23,
    category: 'success'
  },
  {
    id: '4',
    author: 'Aisha T.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: {
      en: "Imposter syndrome is real. Sometimes I feel like I don't belong in the startup world. Everyone seems so confident and I'm here questioning every decision. How do you deal with self-doubt?",
      am: "የማስመሰል ሲንድሮም እውነተኛ ነው። አንዳንድ ጊዜ በስታርት አፕ ዓለም ውስጥ እንደማልተገባ ይሰማኛል። ሁሉም ሰው በራስ የመተማመን ስሜት ያለው ይመስላል እና እኔ እዚህ ሁሉንም ውሳኔ እየጠየቅኩ ነው። በራስ መጠራጠርን እንዴት ትቋቋማላችሁ?"
    },
    timestamp: '2 days ago',
    likes: 45,
    replies: 15,
    category: 'challenge'
  }
];