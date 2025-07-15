import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '../hooks/useLanguage';
import { upcomingEvents } from '../data/events';
import { CalendarIcon, ClockIcon, UsersIcon, MapPinIcon, VideoIcon, MicIcon, PresentationIcon as PresentationChartLineIcon, NetworkIcon, ArrowRightIcon } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState('all');

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'workshop': return <PresentationChartLineIcon className="w-5 h-5" />;
      case 'webinar': return <VideoIcon className="w-5 h-5" />;
      case 'networking': return <NetworkIcon className="w-5 h-5" />;
      case 'pitch': return <MicIcon className="w-5 h-5" />;
      case 'mentorship': return <UsersIcon className="w-5 h-5" />;
      default: return <CalendarIcon className="w-5 h-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'webinar': return 'bg-green-100 text-green-800 border-green-200';
      case 'networking': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'pitch': return 'bg-red-100 text-red-800 border-red-200';
      case 'mentorship': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredEvents = selectedType === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedType);

  const eventTypes = [
    { id: 'all', label: { en: 'All Events', am: 'ሁሉም ዝግጅቶች' } },
    { id: 'workshop', label: { en: 'Workshops', am: 'ወርክሾፖች' } },
    { id: 'webinar', label: { en: 'Webinars', am: 'ዌቢናሮች' } },
    { id: 'networking', label: { en: 'Networking', am: 'አውታረ መረብ' } },
    { id: 'pitch', label: { en: 'Pitch Events', am: 'ፒች ዝግጅቶች' } },
    { id: 'mentorship', label: { en: 'Mentorship', am: 'አማካሪነት' } }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative"
             style={{
               backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundAttachment: 'fixed'
             }}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/95 to-blue-50/95"></div>
      <div className="container mx-auto px-6">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t({ en: 'Upcoming Events', am: 'የሚመጡ ዝግጅቶች' })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t({ 
                en: 'Join our community events, workshops, and networking sessions designed to accelerate your startup journey.',
                am: 'የስታርት አፕ ጉዞዎን ለማፋጠን የተነደፉ የማህበረሰብ ዝግጅቶች፣ ወርክሾፖች እና የአውታረ መረብ ክፍለ ጊዜዎች ይቀላቀሉ።'
              })}
            </p>
          </div>

          {/* Event Type Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {eventTypes.map(type => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type.id)}
                className={`transition-all duration-200 ${
                  selectedType === type.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {t(type.label)}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getEventColor(event.type)} group-hover:scale-110 transition-transform duration-300`}>
                        {getEventIcon(event.type)}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {t(event.title)}
                        </CardTitle>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 capitalize ${getEventColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {t(event.description)}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4 text-blue-500" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ClockIcon className="w-4 h-4 text-green-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <UsersIcon className="w-4 h-4 text-purple-500" />
                      {event.registered}/{event.capacity} {t({ en: 'registered', am: 'ተመዝግበዋል' })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MicIcon className="w-4 h-4 text-yellow-500" />
                      {event.speaker}
                    </div>
                  </div>

                  {/* Registration Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">
                        {t({ en: 'Registration', am: 'ምዝገባ' })}
                      </span>
                      <span className="text-xs text-gray-500">
                        {Math.round((event.registered / event.capacity) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:shadow-lg transition-all duration-300"
                    disabled={event.registered >= event.capacity}
                  >
                    {event.registered >= event.capacity ? (
                      t({ en: 'Event Full', am: 'ዝግጅቱ ተሞልቷል' })
                    ) : (
                      <>
                        {t({ en: 'Register Now', am: 'አሁን ይመዝገቡ' })}
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  {event.generation && (
                    <div className="mt-2 text-center">
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {t({ en: 'Recommended for', am: 'የሚመከረው' })} Gen {event.generation}+
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <CalendarIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t({ en: 'No events found', am: 'ምንም ዝግጅት አልተገኘም' })}
              </h3>
              <p className="text-gray-600">
                {t({ en: 'Check back soon for new events!', am: 'ለአዳዲስ ዝግጅቶች በቅርቡ ይመለሱ!' })}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};