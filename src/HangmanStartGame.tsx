import {HangmanGameProps} from "./HangmanGame.ts";
import {useState} from "react";
import axios from "axios";

export default function HangmanStartGame(props: HangmanGameProps) {

    const [input, setInput] = useState<string>("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        axios.post("/example", input)
            .then(() => {
                props.changeHangmanGame("gameIsRunning", true);
            })
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type={"text"} placeholder={"Enter a word..."} onChange={(event) => {
                        setInput(event.target.value);
                    }}/>
                    <input type={"submit"} value={"submit"}/>
                </form>
            </div>
        </>
    )

}