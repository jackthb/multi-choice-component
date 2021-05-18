import React, { useState } from "react";
import "./Slider.css";

type SliderProps = {
  options: {
    label: string;
    isCorrect: boolean;
  }[];
  id: number;
  questionId: number;
  noCorrect: number;
  setNoCorrect: Function;
  selected: boolean;
};

export default function Slider({
  options,
  id,
  questionId,
  noCorrect,
  setNoCorrect,
  selected,
}: SliderProps) {
  const [interacted, setInteracted] = useState<boolean>(false);
  const [counted, setCounted] = useState<boolean>(false);
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
              disabled={selected}
              onChange={() => {
                if (counted === false && s.isCorrect) {
                  setNoCorrect(noCorrect + 1);
                  setCounted(true);
                }
                setInteracted(true);
              }}
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
