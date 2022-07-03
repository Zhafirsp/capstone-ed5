import { Container } from "@chakra-ui/react";
import { useState } from "react";
import './berhitung.css';

const Berhitung = () => {
  const questions = [
    {
      questionText: "Berapa hasil 5 × 5?",
      answerOptions: [
        { answerText: "10", isCorrect: false },
        { answerText: "15", isCorrect: false },
        { answerText: "20", isCorrect: false },
        { answerText: "25", isCorrect: true },
      ],
    },
    {
      questionText: "Berapa hasil 9 ÷ 3?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "6", isCorrect: false },
        { answerText: "9", isCorrect: false },
      ],
    },
    {
      questionText: "Berapa hasil 12 × 3 ?",
      answerOptions: [
        { answerText: "12", isCorrect: false },
        { answerText: "24", isCorrect: false },
        { answerText: "36", isCorrect: true },
        { answerText: "48", isCorrect: false },
      ],
    },
    {
      questionText: "Berapa hasil 73 + 23?",
      answerOptions: [
        { answerText: "100", isCorrect: false },
        { answerText: "63", isCorrect: false },
        { answerText: "84", isCorrect: false },
        { answerText: "96", isCorrect: true },
      ],
    },
    {
      questionText: "Berapa hasil 41 − 28?",
      answerOptions: [
        { answerText: "13", isCorrect: true },
        { answerText: "12", isCorrect: false },
        { answerText: "11", isCorrect: false },
        { answerText: "10", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


  const resetStateClick = () => {
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
    setRecordedScore(score)
  }

  const [recordedScore, setRecordedScore] = useState(0);


  return (
    <Container minH='85vh' maxW='100vh' mt={24} centerContent>
      <div className='berhitung'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button className="button-berhitung" key={""} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
        <div>
          <p className='score-output'>Your Last Score: {recordedScore}</p>
          <button onClick={resetStateClick} className='retry-button button-berhitung'>Retry</button>
        </div>
      </div>


      <div className="matematika">
        <img src="images/angka.jpg" className="matematika-img" />
        <img src="images/penjumlahan.jpg" className="matematika-img" />
        <img src="images/pengurangan.jpg" className="matematika-img" />
        <img src="images/perkalian.jpg" className="matematika-img" />
        <img src="images/pembagian.jpg" className="matematika-img" />
      </div>
    </Container>
  );
}

export default Berhitung;