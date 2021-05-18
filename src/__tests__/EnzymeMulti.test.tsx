import MultiChoice from "../components/MultiChoice";
import Slider from "../components/Slider";
import { shallow, mount, render } from "enzyme";
import { animalCell } from "../data";

describe("<MultiChoice />", () => {
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

  it("renders a mask div", () => {
    const wrapper = shallow(
      <MultiChoice
        id={animalCell.id}
        option={animalCell.option}
        question={animalCell.question}
      />
    );
    expect(wrapper.find("div.mask")).not.toBeNull();
  });
  it("has 2 <Slider /> components", () => {
    const wrapper = shallow(
      <MultiChoice
        id={animalCell.id}
        option={animalCell.option}
        question={animalCell.question}
      />
    );
    expect(wrapper.find(Slider)).toHaveLength(option.length * 2);
  });
});

describe("<Slider />", () => {
  const option = [
    { label: "there are no trees", isCorrect: true },
    { label: "there are many", isCorrect: false },
  ];
  it("renders a mask div", () => {
    const wrapper = shallow(
      <Slider
        id={0}
        options={option}
        questionId={0}
        noCorrect={0}
        setNoCorrect={() => {}}
      />
    );
    expect(wrapper.find("div.slide").length).toEqual(0);
    wrapper.find("label").first().simulate("click");
    expect(wrapper.find("div.slide").text).toEqual(1);
  });
  it;
});
