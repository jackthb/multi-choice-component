import React, { useEffect, useState } from "react";
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
};

export default function Slider({
  options,
  id,
  questionId,
  noCorrect,
  setNoCorrect,
}: SliderProps) {
  const [selected, setSelected] = useState<boolean>(false);
  const [interacted, setInteracted] = useState<boolean>(false);
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
                setInteracted(true);
                if (s.isCorrect) {
                  setSelected(true);
                  setNoCorrect(noCorrect + 1);
                }
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
