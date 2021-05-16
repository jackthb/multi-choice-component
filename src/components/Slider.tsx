import React, { useState } from "react";
import "./Slider.css";

type SliderProps = {
  options: {
    label: string;
    isCorrect: boolean;
  }[];
  id: number;
  noCorrect: number;
  setNoCorrect: Function;
};

export default function Slider({
  options,
  id,
  noCorrect,
  setNoCorrect,
}: SliderProps) {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div className="slider">
      {options.map((s, index) => {
        return (
          <React.Fragment key={index}>
            <input
              type="radio"
              name={`answer-${id}`}
              id={`answer-${id}-${index}`}
              value={s.label}
              disabled={selected}
              onClick={() => {
                if (s.isCorrect) {
                  setSelected(true);
                  setNoCorrect(noCorrect + 1);
                }
              }}
            ></input>
            <label htmlFor={`answer-${id}-${index}`} key={index}>
              {s.label}
            </label>
          </React.Fragment>
        );
      })}
      <div className="slide"></div>
    </div>
  );
}
