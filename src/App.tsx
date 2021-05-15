import * as React from "react";
import * as ReactDOM from "react-dom";

import { ReactElement, ReactNode } from "react";

import MultiChoice from "./components/MultiChoice";

function Header({ title }: { title?: string }) {
  return <h1>{title}</h1>;
}

function HeaderWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement | null {
  return <h1>{children}</h1>;
}

const defaultContProps = {
  heading: <strong>Heading</strong>,
};

type ContainerProps = { children: ReactNode } & typeof defaultContProps;

function Container({ heading, children }: ContainerProps): ReactElement | null {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

Container.defaultProps = defaultContProps;
// defaultProps

// functionalProps

function TextWithNum({
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

function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

// class component
class MyHeader extends React.Component<{
  title: ReactNode;
}> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

function App() {
  return (
    <div className="container">
      {/* <Header title='Welcome'/>
      <HeaderWithContent>
        <strong>hello</strong>
      </HeaderWithContent>
      <Container>Hi</Container>
      <TextWithNum header={(num: number) => <span>Header is {num}</span>}>{(num: number) => <div>number is {num}</div>}</TextWithNum>
      <List items={['jack', 'oso', 'king', 'hooligan']} render={(item: string) => <div>{item.toLowerCase()}</div>}></List> */}

      <MultiChoice />
    </div>
  );
}

export default App;
