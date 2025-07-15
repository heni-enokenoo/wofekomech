import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useGameProgress } from '../hooks/useGameProgress';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircleIcon, XCircleIcon, TrophyIcon, BookOpenIcon } from 'lucide-react';

export const GameifiedQuiz: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const {
    progress,
    currentQuestion,
    currentQuestionIndex,
    showExplanation,
    selectedAnswer,
    answerQuestion,
    nextQuestion,
    isGameComplete
  } = useGameProgress();

  if (isGameComplete) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
        <CardContent className="p-8 text-center">
          <TrophyIcon className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t({ en: 'Congratulations! 🎉', am: 'እንኳን ደስ አለዎት! 🎉' })}
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            {t({ 
              en: `You've completed the screening with a score of ${progress.score} points!`,
              am: `${progress.score} ነጥብ በማግኘት ምርመራውን አጠናቀዋል!`
            })}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            {t({ 
              en: 'You\'ve unlocked all resources and are ready to join our community!',
              am: 'ሁሉንም ሀብቶች ክፍተዋል እና ማህበረሰባችንን ለመቀላቀል ዝግጁ ነዎት!'
            })}
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            {t({ en: 'Join Our Community', am: 'ማህበረሰባችንን ይቀላቀሉ' })}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!currentQuestion) return null;

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">
            {t({ en: 'Learning Journey', am: 'የመማሪያ ጉዞ' })}
          </CardTitle>
          <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
            {currentQuestionIndex + 1} / {progress.totalQuestions}
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 mt-4">
          <div 
            className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestionIndex + 1) / progress.totalQuestions) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpenIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              {currentQuestion.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t(currentQuestion.question)}
          </h3>
        </div>

        <div className="space-y-3 mb-6">
          {currentQuestion.options[currentLanguage.code].map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`w-full p-4 h-auto text-left justify-start transition-all duration-200 ${
                selectedAnswer === index
                  ? index === currentQuestion.correctAnswer
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'bg-red-50 border-red-500 text-red-700'
                  : showExplanation && index === currentQuestion.correctAnswer
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'hover:bg-blue-50 hover:border-blue-300'
              }`}
              onClick={() => !showExplanation && answerQuestion(index)}
              disabled={showExplanation}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  selectedAnswer === index
                    ? index === currentQuestion.correctAnswer
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'bg-red-500 border-red-500 text-white'
                    : showExplanation && index === currentQuestion.correctAnswer
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300'
                }`}>
                  {showExplanation && (
                    selectedAnswer === index
                      ? index === currentQuestion.correctAnswer
                        ? <CheckCircleIcon className="w-4 h-4" />
                        : <XCircleIcon className="w-4 h-4" />
                      : index === currentQuestion.correctAnswer
                        ? <CheckCircleIcon className="w-4 h-4" />
                        : String.fromCharCode(65 + index)
                  )}
                  {!showExplanation && String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </Button>
          ))}
        </div>

        {showExplanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-900 mb-2">
              {t({ en: 'Explanation:', am: 'ማብራሪያ:' })}
            </h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              {t(currentQuestion.explanation)}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs font-medium text-blue-600">
                {t({ en: 'Points earned:', am: 'የተገኙ ነጥቦች:' })}
              </span>
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                +{selectedAnswer === currentQuestion.correctAnswer ? currentQuestion.points : 0}
              </span>
            </div>
          </div>
        )}

        {showExplanation && (
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {t({ en: 'Score:', am: 'ነጥብ:' })} <span className="font-bold text-blue-600">{progress.score}</span> | 
              {t({ en: ' Level:', am: ' ደረጃ:' })} <span className="font-bold text-purple-600">{progress.level}</span>
            </div>
            <Button 
              onClick={nextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              {t({ en: 'Next Question', am: 'ቀጣይ ጥያቄ' })} →
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};