import React, { useState} from 'react';
import './App.css';
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Header from './components/Header';
import RulesButton from './components/rules/RulesButton';
import Rules from './components/rules/Rules';

function App() {
  const [help, setHelp] = useState(false)
  const [choiceP1, setChoiceP1] = useState(0)
  const [choiceP2, setChoiceP2] = useState(0)
  const [step, setStep] = useState(1)
  const [score, setScore] = useState(0)
  const [winner, setWinner] = useState(0)

  const showHelp = (event) => {
    setHelp(!help)
  }

  const player1 = (event) => {
    let P1 = 0
    const P2 = Math.floor(Math.random() * 3 + 1)
    setChoiceP2(P2)
    
    switch(event.target.classList.value) {
      case "rock-icon":
        P1 = 1
        setChoiceP1(1)
        setStep(2)
        break;
      case "paper-icon":
        P1 = 2
        setChoiceP1(2)
        setStep(2)
        break;
      case "scissors-icon":
        P1 = 3
        setChoiceP1(3)
        setStep(2)
        break;
      default:
        break;
    }

    if(P1 === P2) {
      setWinner(3)
    } else {
      switch (P1) {
        case 1:
          if(P2 === 2) {
            setWinner(2)
            setScore(score - 1)
          } else {
            setWinner(1)
            setScore(score + 1)
          }
          break;
        case 2:
          if(P2 === 1) {
            setWinner(1)
            setScore(score + 1)
          } else {
            setWinner(2)
            setScore(score - 1)
          }
          break;
        case 3:
          if(P2 === 1) {
            setWinner(2)
            setScore(score - 1)
          } else {
            setWinner(1)
            setScore(score + 1)
          }
          break;
        default:
          break;
      }
    }
  }

  const playAgain = () => {
    setStep(1)
  }

  return (
    <div className="App">
      <Header score={score}/>
      {step === 1 ? <Step1 handleClick={player1} /> : undefined}
      {step === 2 ? <Step2 choiceP1={choiceP1} choiceP2={choiceP2} handleClick={playAgain} winner={winner} /> : undefined}
      <RulesButton handleClick={showHelp}/>
      {help ? <Rules handleClick={showHelp}/> : undefined}
    </div>
  )
}

export default App;
