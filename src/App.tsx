import MultiChoice from "./components/MultiChoice";

import { animalCell as Question } from "./data";

export default function App() {
  Question.option.forEach((x) => {
    x.sort(() => Math.random() - 0.5);
  });

  return (
    <div className="container">
      <MultiChoice question={Question.question} option={Question.option} />
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
