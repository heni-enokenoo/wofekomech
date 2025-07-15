import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../hooks/useLanguage';
import { communityPosts } from '../data/communityPosts';
import { 
  HeartIcon, 
  MessageCircleIcon, 
  PlusIcon, 
  FilterIcon,
  TrendingUpIcon,
  AlertCircleIcon,
  HelpCircleIcon,
  MegaphoneIcon
} from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newPost, setNewPost] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'success': return <TrendingUpIcon className="w-4 h-4" />;
      case 'challenge': return <AlertCircleIcon className="w-4 h-4" />;
      case 'question': return <HelpCircleIcon className="w-4 h-4" />;
      case 'vent': return <MegaphoneIcon className="w-4 h-4" />;
      default: return <MessageCircleIcon className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'success': return 'bg-green-100 text-green-800 border-green-200';
      case 'challenge': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'question': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'vent': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredPosts = selectedCategory === 'all' 
    ? communityPosts 
    : communityPosts.filter(post => post.category === selectedCategory);

  const categories = [
    { id: 'all', label: { en: 'All Posts', am: 'ሁሉም ልጥፎች' } },
    { id: 'success', label: { en: 'Success Stories', am: 'የስኬት ታሪኮች' } },
    { id: 'challenge', label: { en: 'Challenges', am: 'ፈተናዎች' } },
    { id: 'question', label: { en: 'Questions', am: 'ጥያቄዎች' } },
    { id: 'vent', label: { en: 'Vent Space', am: 'የመናገሪያ ቦታ' } }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t({ en: 'Startup Community', am: 'የስታርት አፕ ማህበረሰብ' })}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          {t({ 
            en: 'Connect with fellow entrepreneurs, share your journey, and find support in our caring community.',
            am: 'ከሌሎች ስራ ፈጣሪዎች ጋር ይገናኙ፣ ጉዞዎን ያካፍሉ እና በእንክብካቤ ማህበረሰባችን ውስጥ ድጋፍ ያግኙ።'
          })}
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800 font-medium">
            {t({ 
              en: '💙 This is a safe space for entrepreneurs to share their real experiences, struggles, and victories.',
              am: '💙 ይህ ስራ ፈጣሪዎች እውነተኛ ልምዶቻቸውን፣ ትግላቸውን እና ድሎቻቸውን የሚያካፍሉበት ደህንነቱ የተጠበቀ ቦታ ነው።'
            })}
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={`transition-all duration-200 ${
              selectedCategory === category.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            {category.id !== 'all' && getCategoryIcon(category.id)}
            <span className={category.id !== 'all' ? 'ml-1' : ''}>
              {t(category.label)}
            </span>
          </Button>
        ))}
      </div>

      {/* New Post Button */}
      <div className="mb-6 text-center">
        <Button
          onClick={() => setShowNewPostForm(!showNewPostForm)}
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 shadow-lg"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          {t({ en: 'Share Your Story', am: 'ታሪክዎን ያካፍሉ' })}
        </Button>
      </div>

      {/* New Post Form */}
      {showNewPostForm && (
        <Card className="mb-6 border-2 border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg text-blue-900">
              {t({ en: 'Share with the Community', am: 'ከማህበረሰቡ ጋር ያካፍሉ' })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder={t({ 
                en: 'What\'s on your mind? Share your struggles, victories, or questions...',
                am: 'በአእምሮዎ ላይ ያለው ምንድን ነው? ትግሎችዎን፣ ድሎችዎን ወይም ጥያቄዎችዎን ያካፍሉ...'
              })}
              className="w-full p-4 border border-gray-300 rounded-lg resize-none h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  {t({ en: 'Anonymous', am: 'ስም አልባ' })}
                </Button>
                <Button variant="outline" size="sm">
                  <FilterIcon className="w-3 h-3 mr-1" />
                  {t({ en: 'Category', am: 'ምድብ' })}
                </Button>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowNewPostForm(false)}
                >
                  {t({ en: 'Cancel', am: 'ሰርዝ' })}
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  {t({ en: 'Post', am: 'ልጥፍ' })}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Community Posts */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {post.isAnonymous ? t({ en: 'Anonymous', am: 'ስም አልባ' }) : post.author}
                    </h4>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {getCategoryIcon(post.category)}
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.timestamp}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t(post.content)}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500 hover:bg-red-50">
                      <HeartIcon className="w-4 h-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500 hover:bg-blue-50">
                      <MessageCircleIcon className="w-4 h-4 mr-1" />
                      {post.replies}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-500 hover:bg-green-50">
                      {t({ en: 'Support', am: 'ድጋፍ' })}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <MessageCircleIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t({ en: 'No posts in this category yet', am: 'በዚህ ምድብ ውስጥ ገና ምንም ልጥፍ የለም' })}
          </h3>
          <p className="text-gray-600">
            {t({ en: 'Be the first to share your story!', am: 'ታሪክዎን የሚያካፍሉ የመጀመሪያው ይሁኑ!' })}
          </p>
        </div>
      )}
    </div>
  );
};