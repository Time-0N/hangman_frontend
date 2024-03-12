export type HangmanGameProps = {
    changeHangmanGame: (key: string, value: string | number | string[] | boolean) => void;
}

export type HangmanGame = {
    gameIsRunning: boolean,
    gameResult?: boolean,
    correctLetters: string[],
    errors: number,
}