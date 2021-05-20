import React, { ChangeEvent, useState } from "react";
import "./Slider.css";

type SliderProps = {
  options: {
    label: string;
    isCorrect: boolean;
  }[];
  setCorrectPositions: Function;
  disabled: boolean;
  optionId: number;
};

export default function Slider({
  options,
  optionId,
  setCorrectPositions,
  disabled,
}: SliderProps) {

  const [interacted, setInteracted] = useState<boolean>(false);
  const [checked, setChecked] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>, correct: boolean) => {
    setChecked(e.target.value);
    setCorrectPositions((existingPositions: Array<number>) => {
      let updatedPositions = [...existingPositions]
      updatedPositions[optionId] = correct ? 1 : 0
      return updatedPositions
    })
    setInteracted(true);
  };

  return (
    <div className="slider">
      {options.map((opt, index) => {
        return (
          <React.Fragment key={index}>
            <input
              className={checked === opt.label ? 'active' : ''}
              type="radio"
              name={`${optionId}-answer-${index}`}
              id={`${optionId}-answer-${index}`}
              checked={checked === opt.label}
              value={opt.label}
              disabled={disabled}
              onChange={(e) => {
                handleChange(e, opt.isCorrect);
              }}
            ></input>
            <label htmlFor={`${optionId}-answer-${index}`} key={index}>
              {opt.label}
            </label>
          </React.Fragment>
        );
      })}
      {interacted && <div className="slide"></div>}
    </div>
  );
}
