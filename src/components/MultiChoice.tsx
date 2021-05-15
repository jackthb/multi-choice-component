import { useState } from "react";
import Slider from "./Slider";

type MultiChoiceProps = {
  question: string;
  option: {
    label: string;
    isCorrect: boolean;
  }[][];
};

type AnswerProps = {
  correct: boolean;
};

function Answer({ correct }: AnswerProps) {
  return <p>The answer is {correct ? "correct" : "incorrect"}</p>;
}

export default function MultiChoice({ question, option }: MultiChoiceProps) {
  const [correct, setCorrect] = useState<boolean>(false);

  return (
    <div className="Mask">
      <h1 className="text">{question}</h1>
      {option.map((x, index) => (
        <Slider key={index} options={x} id={index} />
      ))}
      <Answer correct={correct} />
    </div>
  );
}
