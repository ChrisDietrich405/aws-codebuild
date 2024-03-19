import { shallow } from "enzyme";
import App from "./App";
import { describe, it, expect } from '@jest/globals';


describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it('renders a heading with the text "Practicing with CodeBuild"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toEqual("Practicing with CodeBuild");
  });

  it('renders a div with the className "card"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".card")).toHaveLength(1);
  });

  it('renders a paragraph inside the card with the text "Learning about CI/CD"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".card").find("p").text()).toEqual(
      "Learning about CI/CD"
    );
  });
});
