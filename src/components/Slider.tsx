type AppProps = {
  correct: string;
  wrong: string;
};

export default function Slider() {}

export default function Slider({
  header,
  children,
}: {
  header: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, setState] = React.useState<number>(1);

  return (
    <div>
      <h2>{header?.(state)}</h2>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  );
}
