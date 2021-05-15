type SliderProps = {
  options: {
    label: string;
    isCorrect: boolean;
  }[];
  id: number;
};

export default function Slider({ options, id }: SliderProps) {
  return (
    <div>
      {options
        .sort(() => Math.random() - 0.5)
        .map((s) => {
          return (
            <label key={id}>
              <input type="radio" name={`answer-${id}`} value={s.label}></input>
              <span>{s.label}</span>
            </label>
          );
        })}
    </div>
  );
}
