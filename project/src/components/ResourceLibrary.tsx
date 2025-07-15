import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../hooks/useLanguage';
import { freeResources } from '../data/resources';
import { DownloadIcon, SearchIcon, BookOpenIcon, VideoIcon, FileTextIcon, PenToolIcon as ToolIcon, ClockIcon, StarIcon, XIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

export const ResourceLibrary: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState<typeof freeResources[0] | null>(null);
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [showRegistrationPrompt, setShowRegistrationPrompt] = useState(false);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpenIcon className="w-5 h-5" />;
      case 'template': return <FileTextIcon className="w-5 h-5" />;
      case 'video': return <VideoIcon className="w-5 h-5" />;
      case 'tool': return <ToolIcon className="w-5 h-5" />;
      default: return <FileTextIcon className="w-5 h-5" />;
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

  const handleAccessResource = (resource: typeof freeResources[0]) => {
    setSelectedResource(resource);
    setShowResourceModal(true);
  };

  const handleStartAccessing = () => {
    setShowRegistrationPrompt(true);
  };

  const closeModals = () => {
    setShowResourceModal(false);
    setShowRegistrationPrompt(false);
    setSelectedResource(null);
  };

  const filteredResources = freeResources.filter(resource => {
    const matchesSearch = resource.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.en.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(freeResources.map(r => r.category)))];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t({ en: 'Free Resources for Startups', am: 'ለስታርት አፖች ነፃ ሀብቶች' })}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t({ 
            en: 'Access our comprehensive library of templates, guides, and tools to accelerate your startup journey.',
            am: 'የስታርት አፕ ጉዞዎን ለማፋጠን የእኛን አጠቃላይ የቴምፕሌቶች፣ መመሪያዎች እና መሳሪያዎች ቤተ-መጽሐፍት ይድረሱ።'
          })}
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder={t({ en: 'Search resources...', am: 'ሀብቶችን ይፈልጉ...' })}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === 'all' ? t({ en: 'All', am: 'ሁሉም' }) : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {getResourceIcon(resource.type)}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {t(resource.title)}
                    </CardTitle>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {t(resource.description)}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {resource.readTime && (
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {resource.readTime} min
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    4.8
                  </div>
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {resource.category}
                </span>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:shadow-lg transition-all duration-300"
                onClick={() => handleAccessResource(resource)}
              >
                <DownloadIcon className="w-4 h-4 mr-2" />
                {t({ en: 'Access Resource', am: 'ሀብት ይድረሱ' })}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resource Modal */}
      <Dialog open={showResourceModal} onOpenChange={setShowResourceModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                {selectedResource && getResourceIcon(selectedResource.type)}
              </div>
              {selectedResource && t(selectedResource.title)}
            </DialogTitle>
            <DialogDescription className="pt-2">
              {selectedResource && t(selectedResource.description)}
            </DialogDescription>
          </DialogHeader>

          {selectedResource && (
            <div className="space-y-6">
              {/* Preview Content */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-3">
                  {t({ en: 'Preview', am: 'ቅድመ �ርእስት' })}
                </h3>
                
                {selectedResource.type === 'video' && (
                  <div className="aspect-video bg-black rounded-md flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <VideoIcon className="w-12 h-12 mx-auto mb-3" />
                      <p>{t({ 
                        en: 'Full video available after registration', 
                        am: 'ሙሉ ቪዲዮ �ይለጽ ካደረጉ በኋላ ይገኛል' 
                      })}</p>
                    </div>
                  </div>
                )}
                
                {selectedResource.type === 'guide' && (
                  <div className="prose max-w-none">
                    <p className="text-gray-600 italic">
                      {t({
                        en: 'The first few sections of this guide are available for preview. Register to access the full content.',
                        am: 'የዚህ መመሪያ የመጀመሪያ ጥቂት ክፍሎች �ለማየት ይገኛሉ። ሙሉውን ይዘት ለመድረስ ይመዝገቡ።'
                      })}
                    </p>
                  </div>
                )}
                
                {selectedResource.type === 'template' && (
                  <div className="border rounded-md p-4 bg-white">
                    <FileTextIcon className="w-8 h-8 text-blue-500 mb-2" />
                    <p className="text-gray-600">
                      {t({
                        en: 'A preview of this template is available. Register to download the full version.',
                        am: 'የዚህ አብነት ቅድመ እይታ ይገኛል። ሙሉ ስሪቱን ለማውረድ ይመዝገቡ።'
                      })}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Resource Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium">{t({ en: 'Details', am: 'ዝርዝሮች' })}</h4>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{t({ en: 'Type', am: 'ዓይነት' })}</span>
                    <span className="capitalize">{selectedResource.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{t({ en: 'Category', am: 'ምድብ' })}</span>
                    <span className="capitalize">{selectedResource.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{t({ en: 'Difficulty', am: 'አስቸጋሪነት' })}</span>
                    <span className="capitalize">{selectedResource.difficulty}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">{t({ en: 'Requirements', am: 'ምንዛሪዎች' })}</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedResource.requirements?.map((req, i) => (
                      <li key={i}>{t(req)}</li>
                    )) || (
                      <li>{t({ en: 'None', am: 'የለም' })}</li>
                    )}
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">{t({ en: 'What You Get', am: 'የሚያገኙት' })}</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedResource.benefits?.map((benefit, i) => (
                      <li key={i}>{t(benefit)}</li>
                    )) || (
                      <li>{t({ en: 'Valuable resource for your startup', am: 'ለስታርት አፕዎ ጠቃሚ ሀብት' })}</li>
                    )}
                  </ul>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={handleStartAccessing}
              >
                {t({ en: 'Start Accessing', am: 'መድረስ ይጀምሩ' })}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Registration Prompt Modal */}
      <Dialog open={showRegistrationPrompt} onOpenChange={setShowRegistrationPrompt}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {t({ en: 'Register to Access Full Content', am: 'ሙሉ ይዘት ለመድረስ ይመዝገቡ' })}
            </DialogTitle>
            <DialogDescription className="pt-2">
              {t({
                en: 'Create a free account to access all our premium resources and track your progress.',
                am: 'ሁሉንም ፕሪሚየም ሀብቶቻችንን ለመድረስ እና እድገትዎን ለመከታተል ነፃ መለያ ይፍጠሩ።'
              })}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">
                {t({ en: 'By registering you will get:', am: 'በመመዝገብ የሚያገኙት፡-' })}
              </h4>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <StarIcon className="w-4 h-4 mt-0.5 flex-shrink-0 fill-blue-500 text-blue-500" />
                  <span>{t({ en: 'Full access to all resources', am: 'ለሁሉም ሀብቶች ሙሉ መዳረሻ' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <StarIcon className="w-4 h-4 mt-0.5 flex-shrink-0 fill-blue-500 text-blue-500" />
                  <span>{t({ en: 'Ability to save favorites', am: 'የሚወዱትን ማስቀመጥ የሚችሉ' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <StarIcon className="w-4 h-4 mt-0.5 flex-shrink-0 fill-blue-500 text-blue-500" />
                  <span>{t({ en: 'Track your learning progress', am: 'የትምህርት እድገትዎን ይከታተሉ' })}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={closeModals}
              >
                {t({ en: 'Continue Browsing', am: 'መሰረዝ ይቀጥሉ' })}
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => {
                  // Redirect to registration page
                  window.location.href = '/register';
                }}
              >
                {t({ en: 'Register Now', am: 'አሁን ይመዝገቡ' })}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <BookOpenIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t({ en: 'No resources found', am: 'ምንም ሀብት አልተገኘም' })}
          </h3>
          <p className="text-gray-600">
            {t({ en: 'Try adjusting your search or filter criteria', am: 'የፍለጋ ወይም የማጣሪያ መስፈርቶችዎን ማስተካከል ይሞክሩ' })}
          </p>
        </div>
      )}
    </div>
  );
};