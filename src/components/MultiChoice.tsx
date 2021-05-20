import { useEffect, useState } from "react";
import Slider from "./Slider";
import type {Question} from '../data'


type MultiChoiceProps = {
  question: Question;
};

export default function MultiChoice({
  question
}: MultiChoiceProps) {
  
  const [numberOfCorrect, setNumberOfCorrect] = useState<number>(0);
  const [colour, setColour] = useState<string[]>(["#FFAD4D", "#FF5500"]);

  useEffect(() => {
    if (numberOfCorrect === question.options.length) {
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
  }, [numberOfCorrect, question.options.length]);

  return (
    <div
      className="mask"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${colour[0]}, ${colour[1]})`,
      }}
    >
      <h1 className="text">{question.title}</h1>
      {question.options.map((x, index) => (
        <Slider
          key={index}
          options={x}
          optionId={index}
          setNumberOfCorrect={setNumberOfCorrect}
          disabled={numberOfCorrect === question.options.length}
        />
      ))}
      <p>The answer is {numberOfCorrect === question.options.length ? "correct" : "incorrect"}</p>
    </div>
  );
}
