import MultiChoice from "./components/MultiChoice";

import { animalCell as Question } from "./data";

export default function App() {
  Question.option.map((x) => {
    x.sort(() => Math.random() - 0.5);
  });

  return (
    <div className="container">
      <MultiChoice question={Question.question} option={Question.option} />
    </div>
  );
}
