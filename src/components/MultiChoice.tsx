import { useEffect, useState } from "react";
import Slider from "./Slider";
import type {Question} from '../data'


type MultiChoiceProps = {
  question: Question;
};

export default function MultiChoice({
  question
}: MultiChoiceProps) {
  
  const [correctPositions, setCorrectPositions] = useState<Array<number>>([0, 0, 0, 0]);
  const [colour, setColour] = useState<string[]>(["#FFAD4D", "#FF5500"]);

  // to get sum of array
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

  useEffect(() => {
    const numberOfCorrect = correctPositions.reduce(reducer)
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
  }, [correctPositions, question.options.length]);

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
          setCorrectPositions={setCorrectPositions}
          disabled={correctPositions.reduce(reducer) === question.options.length}
        />
      ))}
      <p>The answer is {correctPositions.reduce(reducer) === question.options.length ? "correct" : "incorrect"}</p>
    </div>
  );
}
