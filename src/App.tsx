import { useState, useEffect } from "react";
import MultiChoice from "./components/MultiChoice";

import { animalCell, defaultOptions, altOptions, Question } from "./data";

export default function App() {
  const [question, setQuestion] = useState(animalCell);
  const [sorted, setSorted] = useState<boolean>(false);

  useEffect(() => {
    if (sorted) return;
    question.options.forEach((x) => {
      x.sort(() => Math.random() - 0.5);
    });
    setSorted(true);
  }, [question, sorted]);

  const handleChange = (question: Question) => {
    setQuestion(question);
    setSorted(false);
  };

  return (
    <div className="container">
      <MultiChoice
        key={question.id}
        question={question}
      />
      <div className="chooseQuestion">
        <span>Choose Question:</span>
        <ul>
          <li onClick={() => handleChange(animalCell)}>Animal Cell question</li>
          <li onClick={() => handleChange(defaultOptions)}>
            Office Life question
          </li>
          <li onClick={() => handleChange(altOptions)}>Calendar question</li>
        </ul>
      </div>
    </div>
  );
}
