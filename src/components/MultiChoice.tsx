import { useEffect, useState } from "react";
import Slider from "./Slider";

type MultiChoiceProps = {
  id: number;
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

export default function MultiChoice({
  id,
  question,
  option,
}: MultiChoiceProps) {
  const [correct, setCorrect] = useState<boolean>(false);
  const [noCorrect, setNoCorrect] = useState<number>(0);
  const [colour, setColour] = useState<string[]>(["#FFAD4D", "#FF5500"]);

  useEffect(() => {
    if (noCorrect === option.length) {
      setColour(["#47e4c1", "#07cddd"]);
      setCorrect(true);
      return;
    }
    switch (noCorrect) {
      case 1:
        setColour(["#FFCA4C", "#FF8400"]);
        break;
      case 2:
        setColour(["#FEC163", "#DE4313"]);
        break;
      case 3:
        setColour(["#FDE44C", "#FFAA00"]);
        break;
    }
  }, [noCorrect, option.length]);

  return (
    <div
      className="mask"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${colour[0]}, ${colour[1]})`,
      }}
    >
      <h1 className="text">{question}</h1>
      {option.map((x, index) => (
        <Slider
          key={`${index}-${id}`}
          options={x}
          id={index}
          questionId={id}
          noCorrect={noCorrect}
          setNoCorrect={setNoCorrect}
        />
      ))}
      <Answer correct={correct} />
    </div>
  );
}
