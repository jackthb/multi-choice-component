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
  const [colour, setColour] = useState<string>(
    "linear-gradient(to bottom, rgba(250, 145, 97, 0.7), rgba(247, 59, 28, 0.69))"
  );
  useEffect(() => {
    if (noCorrect === option.length) {
      setCorrect(true);
    }
    switch (noCorrect) {
      case 1:
        setColour("linear-gradient(to bottom, #FDD819, #E80505)");
        break;
      case 2:
        setColour("linear-gradient(to bottom, #FEC163, #DE4313)");
        break;
      case 3:
        setColour("linear-gradient(to bottom, #ffd392, #DE4313)");
        break;
      case 4:
        setColour("linear-gradient(to bottom, #47e4c1, #07cddd)");
        break;
    }
  }, [noCorrect, option.length]);
  return (
    <div
      className="Mask"
      style={{
        backgroundImage: colour,
      }}
    >
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
