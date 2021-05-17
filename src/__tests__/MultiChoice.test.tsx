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
  const question = "How many trees are there?";
  const option = [
    [
      { label: "there are no trees", isCorrect: true },
      { label: "there are many", isCorrect: false },
    ],
    [
      { label: "tall trees", isCorrect: true },
      { label: "short trees", isCorrect: false },
    ],
  ];
  beforeEach(() => {
    container = document.createElement("div");
  });
  it("renders a mask div", () => {
    render(
      <MultiChoice
        id={animalCell.id}
        option={animalCell.option}
        question={animalCell.question}
      />
    );
    expect(container.querySelector("div.mask")).not.toBeNull();
  });
  it("renders the correct number of sliders", () => {
    render(
      <MultiChoice
        id={animalCell.id}
        option={animalCell.option}
        question={animalCell.question}
      />
    );
    expect(container.querySelectorAll(".slider").length).toEqual(
      animalCell.option.length
    );
  });
  it("renders the correct question", () => {
    render(<MultiChoice id={0} option={option} question={question} />);
    expect(container.querySelectorAll(".slider").length).toEqual(option.length);
    expect(container.querySelectorAll("div > h1")[0].textContent).toMatch(
      question
    );
  });
  it("renders the correct question", () => {
    render(<MultiChoice id={0} option={option} question={question} />);
    expect(container.querySelectorAll(".slider").length).toEqual(option.length);
    expect(container.querySelectorAll("div > h1")[0].textContent).toMatch(
      question
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
        id={0}
        options={option}
        questionId={0}
        noCorrect={0}
        setNoCorrect={() => {}}
      />
    );
    expect(container.querySelector("div.slider")).not.toBeNull();
  });
  it("renders has two radio", () => {
    render(
      <Slider
        id={0}
        options={option}
        questionId={0}
        noCorrect={0}
        setNoCorrect={() => {}}
      />
    );
    expect(container.querySelectorAll("input").length).toEqual(option.length);
  });
  it("renders the correct labels", () => {
    render(
      <Slider
        id={0}
        options={option}
        questionId={0}
        noCorrect={0}
        setNoCorrect={() => {}}
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
