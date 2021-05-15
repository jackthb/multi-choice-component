import { useEffect, useState } from "react";

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
          <label key={index}>
            {s.label}
            <input
              type="radio"
              name={`answer-${id}`}
              value={s.label}
              disabled={selected}
              onClick={() => {
                if (s.isCorrect) {
                  setSelected(true);
                  setNoCorrect(noCorrect + 1);
                }
              }}
            ></input>
          </label>
        );
      })}
      <div className="slide"></div>
    </div>
  );
}
