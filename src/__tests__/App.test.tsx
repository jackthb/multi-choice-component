import { ReactElement } from "react";
import ReactDOM, { Container } from "react-dom";
import App from "../App";

let container: Container;
const render = (component: ReactElement) =>
  ReactDOM.render(component, container);

describe("App", () => {
  beforeEach(() => {
    container = document.createElement("div");
    render(<App />);
  });
  it("renders a container div", () => {
    expect(container.querySelector("div.container")).not.toBeNull();
  });
  it("renders a choose question divider", () => {
    expect(container.querySelector("div.chooseQuestion")).not.toBeNull();
  });
  it("renders a MultiChoice component", () => {
    expect(container.querySelector("div.container > div.mask")).not.toBeNull();
  });
});
