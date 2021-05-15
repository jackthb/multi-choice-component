import MultiChoice from "./components/MultiChoice";

import { defaultOptions as Question } from "./data";

export default function App() {
  return (
    <div className="container">
      <MultiChoice question={Question.question} option={Question.option} />
    </div>
  );
}
