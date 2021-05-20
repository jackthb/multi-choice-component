import React, { useState } from "react";
import "./Slider.css";

type SliderProps = {
  options: {
    label: string;
    isCorrect: boolean;
  }[];
  id: number;
  questionId: number;
  setNumberOfCorrect: Function;
  disabled: boolean;
};

export default function Slider({
  options,
  id,
  questionId,
  setNumberOfCorrect,
  disabled,
}: SliderProps) {

  const [interacted, setInteracted] = useState<boolean>(false);
  const [counted, setCounted] = useState<boolean>(false);

  const handleChange = (correct: boolean) => {
      if (counted === false && correct) {
        setNumberOfCorrect((noCorrect: number) => noCorrect + 1);
        setCounted(true);
      }
      if (counted && correct === false) {
        setNumberOfCorrect((noCorrect: number) => noCorrect - 1);
        setCounted(false);
      }
      setInteracted(true);
  }

  return (
    <div className="slider">
      {options.map((s, index) => {
        return (
          <React.Fragment key={`${index}`}>
            <input
              type="radio"
              name={`${questionId}-answer-${id}`}
              id={`${questionId}-answer-${id}-${index}`}
              value={s.label}
              disabled={disabled}
              onChange={() => handleChange(s.isCorrect)}
            ></input>
            <label htmlFor={`${questionId}-answer-${id}-${index}`} key={index}>
              {s.label}
            </label>
          </React.Fragment>
        );
      })}
      {interacted && <div className="slide"></div>}
    </div>
  );
}
