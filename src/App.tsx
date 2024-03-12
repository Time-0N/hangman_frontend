import './App.css'
import {HangmanGame} from "./HangmanGame.ts";
import {useState} from "react";
import HangmanStartGame from "./HangmanStartGame.tsx";
import HangmanGameLoop from "./HangmanGameLoop.tsx";

function App() {

    const [gameState, setGameState] = useState<HangmanGame>({
        gameIsRunning: false,
        gameResult: undefined,
        correctLetters: [],
        errors: 0
    })

    const changeGamestate = (key: string, value: string | number | string[] | boolean) => {
        const newValues: HangmanGame = {
            ...gameState,
            [key]: value,
        }

        setGameState(newValues);
    }

  return (
    <>
        {gameState.gameIsRunning ? <HangmanGameLoop/> : <HangmanStartGame changeHangmanGame={changeGamestate} />}
    </>
  )
}

export default App
