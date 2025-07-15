import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../hooks/useLanguage";
import { generations } from "../data/generations";
import {
  LightbulbIcon,
  SearchIcon,
  CodeIcon,
  RocketIcon,
  TrendingUpIcon,
  CrownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
} from "lucide-react";

export const GenerationShowcase: React.FC = () => {
  const { t } = useLanguage();

  const getGenerationIcon = (id: number) => {
    switch (id) {
      case 0:
        return <LightbulbIcon className="w-8 h-8" />;
      case 1:
        return <SearchIcon className="w-8 h-8" />;
      case 2:
        return <CodeIcon className="w-8 h-8" />;
      case 3:
        return <RocketIcon className="w-8 h-8" />;
      case 4:
        return <TrendingUpIcon className="w-8 h-8" />;
      case 5:
        return <CrownIcon className="w-8 h-8" />;
      default:
        return <LightbulbIcon className="w-8 h-8" />;
    }
  };

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://github.com/henokg573/wofekomech/blob/main/background1.png?raw=true')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed",
      }}
    >
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Color overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/80 to-green-50/70"></div>

      <div className="container mx-auto px-6">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t({
                en: "Your Startup Journey",
                am: "የስታርት አፕ ጉዞዎ",
              })}
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              {t({
                en: "We guide startups through 6 generations of growth, from initial idea to market leadership. Each generation provides targeted support, resources, and mentorship.",
                am: "ከመጀመሪያ ሀሳብ እስከ የገበያ አመራር ድረስ ስታርት አፖችን በ6 የእድገት ትውልዶች እንመራለን። እያንዳንዱ ትውልድ ዒላማ ድጋፍ፣ ሀብቶች እና አማካሪነት ይሰጣል።",
              })}
            </p>

            <div className="inline-flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full text-blue-800 font-medium border border-blue-100 shadow-sm">
              <ClockIcon className="w-5 h-5" />
              {t({
                en: "Average Journey: entire life access",
                am: "አማካይ ጉዞ: entire life access",
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {generations.map((generation, index) => (
              <Card
                key={generation.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden relative bg-white/95 ${
                  index % 2 === 0 ? "md:translate-y-0" : "md:translate-y-8"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${generation.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${generation.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {getGenerationIcon(generation.id)}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {t(generation.name)}
                      </CardTitle>
                      <p className="text-sm text-gray-600 font-medium">
                        {t(generation.stage)}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {t(generation.description)}
                  </p>
                </CardHeader>

                <CardContent className="relative">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-green-600" />
                        {t({ en: "Requirements", am: "መስፈርቶች" })}
                      </h4>
                      <ul className="space-y-1">
                        {generation.requirements[
                          t === ((text: any) => text.en) ? "en" : "am"
                        ]
                          .slice(0, 2)
                          .map((req, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-700 flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <ArrowRightIcon className="w-4 h-4 text-blue-600" />
                        {t({ en: "Benefits", am: "ጥቅሞች" })}
                      </h4>
                      <ul className="space-y-1">
                        {generation.benefits[
                          t === ((text: any) => text.en) ? "en" : "am"
                        ]
                          .slice(0, 2)
                          .map((benefit, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-700 flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-600">
                          {t({ en: "Duration", am: "ጊዜ" })}:{" "}
                          {generation.duration}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                        >
                          {t({ en: "Learn More", am: "ተጨማሪ ይመልከቱ" })}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <RocketIcon className="w-5 h-5 mr-2" />
              {t({ en: "Start Your Journey Today", am: "ጉዞዎን ዛሬ ይጀምሩ" })}
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
