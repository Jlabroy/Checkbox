import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Checkbox from "./Checkbox";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Checkbox test suite", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Checkbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    const Component = <Checkbox />;
    expect(toJson(shallow(Component))).toMatchSnapshot();
  });
  
  it("matches snapshot - default checked", () => {
    const Component = <Checkbox isChecked />;
    expect(toJson(shallow(Component))).toMatchSnapshot();
  });

  it("matches snapshot - default disabled", () => {
    const Component = <Checkbox isDisabled />;
    expect(toJson(shallow(Component))).toMatchSnapshot();
  });

  it("matches snapshot - additional classes", () => {
    const Component = <Checkbox className="additional" />;
    expect(toJson(shallow(Component))).toMatchSnapshot();
  });

  it("matches snapshot - with label", () => {
    const Component = <Checkbox label="Test label" />;
    expect(toJson(shallow(Component))).toMatchSnapshot();
  });

  it("matches snapshot - before and after click", () => {
    const Component = shallow(<Checkbox label="Test label" />);

    Component.simulate("click");
    expect(toJson(Component)).toMatchSnapshot();
  });

  it("Can handle custom onChange functions", () => {
    const onChange = jest.fn();
    const testValue = "test value";

    const Component = shallow(
      <Checkbox
        onChange={onChange}
        value={testValue}
      />
    );

    Component.simulate("click");
    expect(onChange).toHaveBeenCalledWith(testValue, true);
  });

  it("Doesn't run custom onChange if disabled", () => {
    const onChange = jest.fn();

    const Component = shallow(
      <Checkbox
        isDisabled
        onChange={onChange}
        value="test value"
      />
    );

    Component.simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("Doesn't update if disabled when clicked", () => {
    const Component = shallow(<Checkbox isDisabled />);

    Component.simulate("click");
    expect(toJson(Component)).toMatchSnapshot();
  });
});
