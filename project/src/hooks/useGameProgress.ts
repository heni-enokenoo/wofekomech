import { useState, useEffect } from 'react';
import { UserProgress } from '../types';
import { allQuestions } from '../data/questions';

export const useGameProgress = () => {
  const [progress, setProgress] = useState<UserProgress>({
    questionsAnswered: 0,
    totalQuestions: allQuestions.length,
    score: 0,
    completedCategories: [],
    unlockedResources: [],
    level: 1
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    const savedProgress = localStorage.getItem('game-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem('game-progress', JSON.stringify(newProgress));
  };

  const answerQuestion = (answerIndex: number) => {
    const currentQuestion = allQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const newProgress = {
      ...progress,
      questionsAnswered: progress.questionsAnswered + 1,
      score: isCorrect ? progress.score + currentQuestion.points : progress.score,
      level: Math.floor((progress.score + (isCorrect ? currentQuestion.points : 0)) / 100) + 1
    };

    // Unlock resources based on progress
    if (newProgress.questionsAnswered % 5 === 0) {
      newProgress.unlockedResources.push(`resource-${newProgress.questionsAnswered / 5}`);
    }

    saveProgress(newProgress);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const resetGame = () => {
    const resetProgress: UserProgress = {
      questionsAnswered: 0,
      totalQuestions: allQuestions.length,
      score: 0,
      completedCategories: [],
      unlockedResources: [],
      level: 1
    };
    saveProgress(resetProgress);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return {
    progress,
    currentQuestion: allQuestions[currentQuestionIndex],
    currentQuestionIndex,
    showExplanation,
    selectedAnswer,
    answerQuestion,
    nextQuestion,
    resetGame,
    isGameComplete: currentQuestionIndex >= allQuestions.length
  };
};