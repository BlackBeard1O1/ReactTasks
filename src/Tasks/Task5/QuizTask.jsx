import React, { useState } from 'react';

const QuizApp = () => {
    const questions = [
        {
            id: 1,
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctAnswer: 'Paris',
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 'Mars',
        },
        {
            id: 3,
            question: 'What is the largest mammal in the world?',
            options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
            correctAnswer: 'Blue Whale',
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        setSelectedOption('');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="quiz-container">
            {currentQuestionIndex < questions.length ? (
                <div>
                    <h2>Question {currentQuestionIndex + 1}</h2>
                    <p>{questions[currentQuestionIndex].question}</p>
                    <div className="options">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => handleOptionSelect(option)}
                                />
                                {option}
                                <br />
                            </label>
                        ))}
                    </div>
                    <button onClick={handleNextQuestion} disabled={!selectedOption}>
                        Next
                    </button>
                </div>
            ) : (
                <div className="quiz-results">
                    <h2>Quiz Results</h2>
                    <p>Your score: {score} out of {questions.length}</p>
                </div>
            )}
        </div>
    );
};

export default QuizApp;
