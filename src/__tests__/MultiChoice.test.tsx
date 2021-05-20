import React, { ReactElement, useState } from "react";
import ReactDOM, { Container } from "react-dom";
import MultiChoice from "../components/MultiChoice";
import Slider from "../components/Slider";
import { animalCell } from "../data";
import ReactTestUtils from "react-dom/test-utils";

let container: Container;
const render = (component: ReactElement) =>
  ReactDOM.render(component, container);

describe("MultiChoice", () => {

  beforeEach(() => {
    container = document.createElement("div");
  });
  it("renders a mask div", () => {
    render(
      <MultiChoice
        question={animalCell}
      />
    );
    expect(container.querySelector("div.mask")).not.toBeNull();
  });
  it("renders the correct number of sliders", () => {
    render(
      <MultiChoice
        question={animalCell}
      />
    );
    expect(container.querySelectorAll(".slider").length).toEqual(
      animalCell.options.length
    );
  });
  it("renders the correct question", () => {
    render(<MultiChoice question={animalCell} />);
    expect(container.querySelectorAll(".slider").length).toEqual(animalCell.options.length);
    expect(container.querySelectorAll("div > h1")[0].textContent).toMatch(
      animalCell.title
    );
  });
});

describe("Slider", () => {
  const option = [
    { label: "there are no trees", isCorrect: true },
    { label: "there are many", isCorrect: false },
  ];
  beforeEach(() => {
    container = document.createElement("div");
  });
  it("renders a slider div", () => {
    render(
      <Slider
        options={option}
        questionId={0}
        disabled={false}
        setNumberOfCorrect={() => {}}
      />
    );
    expect(container.querySelector("div.slider")).not.toBeNull();
  });
  it("renders has two radio", () => {
    render(
      <Slider
        options={option}
        optionId={0}
        disabled={false}
        setNumberOfCorrect={() => {}}
      />
    );
    expect(container.querySelectorAll("input").length).toEqual(option.length);
  });
  it("renders the correct labels", () => {
    render(
      <Slider
        options={option}
        optionId={0}
        disabled={false}
        setNumberOfCorrect={() => {}}
      />
    );
    expect(container.querySelectorAll("input").length).toEqual(option.length);
    expect(container.querySelectorAll("label")[0].textContent).toMatch(
      option[0].label
    );
    expect(container.querySelectorAll("label")[1].textContent).toMatch(
      option[1].label
    );
  });
});
