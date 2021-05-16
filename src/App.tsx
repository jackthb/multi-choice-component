import { useState, useEffect } from "react";
import MultiChoice from "./components/MultiChoice";

import { animalCell, defaultOptions, altOptions } from "./data";

export default function App() {
  const [question, setQuestion] = useState(animalCell);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    if (sorted) return;
    question.option.forEach((x) => {
      x.sort(() => Math.random() - 0.5);
    });
    setSorted(true);
  }, [question]);

  return (
    <div className="container">
      <MultiChoice
        key={question.id}
        id={question.id}
        question={question.question}
        option={question.option}
      />

      <div className="chooseQuestion">
        <span>Choose Question:</span>
        <ul>
          <li onClick={() => setQuestion(animalCell)}>Animal Cell question</li>
          <li onClick={() => setQuestion(defaultOptions)}>
            Office Life question
          </li>
          <li onClick={() => setQuestion(altOptions)}>Calendar question</li>
        </ul>
      </div>

      {/* <MultiChoice
        question="How many trees are there in England"
        option={[
          [
            { label: "there are no trees", isCorrect: true },
            { label: "there are many", isCorrect: false },
          ],
          [
            { label: "tall trees", isCorrect: true },
            { label: "short trees", isCorrect: false },
          ],
        ]}
      /> */}
    </div>
  );
}
