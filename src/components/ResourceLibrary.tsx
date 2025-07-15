import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../hooks/useLanguage';
import { freeResources } from '../data/resources';
import { 
  SearchIcon, 
  FilterIcon, 
  DownloadIcon, 
  BookOpenIcon, 
  PlayIcon, 
  FileTextIcon,
  ToolIcon,
  GraduationCapIcon,
  VideoIcon,
  ClockIcon,
  StarIcon,
  TrendingUpIcon
} from 'lucide-react';

export const ResourceLibrary: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpenIcon className="w-5 h-5" />;
      case 'template': return <FileTextIcon className="w-5 h-5" />;
      case 'video': return <VideoIcon className="w-5 h-5" />;
      case 'tool': return <ToolIcon className="w-5 h-5" />;
      case 'course': return <GraduationCapIcon className="w-5 h-5" />;
      case 'webinar': return <PlayIcon className="w-5 h-5" />;
      default: return <BookOpenIcon className="w-5 h-5" />;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'guide': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'template': return 'bg-green-100 text-green-800 border-green-200';
      case 'video': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'tool': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'course': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'webinar': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredResources = freeResources.filter(resource => {
    const matchesSearch = resource.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.en.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const categories = ['all', 'Planning', 'Research', 'Development', 'Finance', 'Legal', 'Marketing'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t({ en: 'Resource Library', am: 'የሀብት ቤተ መጻሕፍት' })}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t({ 
            en: 'Access our comprehensive collection of free resources, templates, and tools to accelerate your startup journey.',
            am: 'የስታርት አፕ ጉዞዎን ለማፋጠን የእኛን አጠቃላይ ነፃ ሀብቶች፣ ቴምፕሌቶች እና መሳሪያዎች ስብስብ ይድረሱ።'
          })}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder={t({ en: 'Search resources...', am: 'ሀብቶችን ፈልግ...' })}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? t({ en: 'All Categories', am: 'ሁሉም ምድቦች' }) : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? t({ en: 'All Levels', am: 'ሁሉም ደረጃዎች' }) : 
                   difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg ${getResourceColor(resource.type)} group-hover:scale-110 transition-transform duration-300`}>
                  {getResourceIcon(resource.type)}
                </div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty}
                </span>
              </div>
              
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {t(resource.title)}
              </CardTitle>
              
              <div className="flex items-center gap-2 mt-2">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getResourceColor(resource.type)}`}>
                  {resource.type}
                </span>
                <span className="text-xs text-gray-500">{resource.category}</span>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {t(resource.description)}
              </p>
              
              {resource.readTime && (
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <ClockIcon className="w-4 h-4" />
                  {resource.readTime} {t({ en: 'min read', am: 'ደቂቃ ንባብ' })}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                  <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                  <StarIcon className="w-4 h-4 text-gray-300" />
                  <span className="text-xs text-gray-500 ml-1">4.0</span>
                </div>
                
                <Button 
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300"
                  onClick={() => {
                    if (resource.downloadUrl) {
                      // Simulate download
                      console.log('Downloading:', resource.downloadUrl);
                    }
                  }}
                >
                  <DownloadIcon className="w-4 h-4 mr-1" />
                  {t({ en: 'Download', am: 'አውርድ' })}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <BookOpenIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t({ en: 'No resources found', am: 'ምንም ሀብት አልተገኘም' })}
          </h3>
          <p className="text-gray-600">
            {t({ en: 'Try adjusting your search or filters', am: 'ፍለጋዎን ወይም ማጣሪያዎችዎን ማስተካከል ይሞክሩ' })}
          </p>
        </div>
      )}

      {/* Featured Resources Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {t({ en: 'Featured Resources', am: 'ተመራጭ ሀብቶች' })}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <TrendingUpIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {t({ en: 'Startup Success Kit', am: 'የስታርት አፕ ስኬት ኪት' })}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t({ en: 'Complete bundle of essential startup resources', am: 'የአስፈላጊ የስታርት አፕ ሀብቶች ሙሉ ጥቅል' })}
                  </p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                {t({ en: 'Get Free Kit', am: 'ነፃ ኪት ያግኙ' })}
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <GraduationCapIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {t({ en: 'Weekly Webinars', am: 'ሳምንታዊ ዌቢናሮች' })}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t({ en: 'Join live sessions with industry experts', am: 'ከኢንዱስትሪ ባለሙያዎች ጋር የቀጥታ ክፍለ ጊዜዎችን ይቀላቀሉ' })}
                  </p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                {t({ en: 'Register Now', am: 'አሁን ይመዝገቡ' })}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};