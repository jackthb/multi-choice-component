import { useEffect, useState } from "react";
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
  const [noCorrect, setNoCorrect] = useState<number>(0);

  useEffect(() => {
    if (noCorrect === option.length) {
      setCorrect(true);
    }
  }, [noCorrect]);
  return (
    <div className="Mask">
      <h1 className="text">{question}</h1>
      {option.map((x, index) => (
        <Slider
          key={index}
          options={x}
          id={index}
          noCorrect={noCorrect}
          setNoCorrect={setNoCorrect}
        />
      ))}
      <Answer correct={correct} />
    </div>
  );
}
