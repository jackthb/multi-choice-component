import React, { ChangeEvent, useState } from "react";
import "./Slider.css";

type SliderProps = {
  options: {
    label: string;
    isCorrect: boolean;
  }[];
  setNumberOfCorrect: Function;
  disabled: boolean;
  optionId: number;
};

export default function Slider({
  options,
  optionId,
  setNumberOfCorrect,
  disabled,
}: SliderProps) {

  const [interacted, setInteracted] = useState<boolean>(false);
  const [counted, setCounted] = useState<boolean>(false);
  const [checked, setChecked] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>, correct: boolean) => {
    setChecked(e.target.value);
    if (counted === false && correct) {
      setNumberOfCorrect((noCorrect: number) => noCorrect + 1);
      setCounted(true);
    }
    if (counted && correct === false) {
      setNumberOfCorrect((noCorrect: number) => noCorrect - 1);
      setCounted(false);
    }
    setInteracted(true);
  };

  return (
    <div className="slider">
      {options.map((opt, index) => {
        return (
          <React.Fragment>
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
