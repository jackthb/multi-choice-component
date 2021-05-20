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

export default function MultiChoice({
  id,
  question,
  option,
}: MultiChoiceProps) {
  
  const [numberOfCorrect, setNumberOfCorrect] = useState<number>(0);
  const [colour, setColour] = useState<string[]>(["#FFAD4D", "#FF5500"]);

  useEffect(() => {
    if (numberOfCorrect === option.length) {
      setColour(["#47e4c1", "#07cddd"]);
      return;
    }
    switch (numberOfCorrect) {
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
  }, [numberOfCorrect, option.length]);

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
          setNumberOfCorrect={setNumberOfCorrect}
          disabled={numberOfCorrect === option.length}
        />
      ))}
      <p>The answer is {numberOfCorrect === option.length ? "correct" : "incorrect"}</p>
    </div>
  );
}
