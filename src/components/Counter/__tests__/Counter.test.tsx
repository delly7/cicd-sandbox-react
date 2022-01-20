import React from "react";
import { shallow } from "enzyme";
import Counter from "..";
import { expect } from "@jest/globals";

describe("Counter Test", () => {
  it("プラスボタンが表示されている", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find("button.plusButton")).toHaveLength(1);
    expect(wrapper.find("button.plusButton").text()).toBe("+");
  });
  it("マイナスボタンが表示されている", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find("button.minusButton")).toHaveLength(1);
    expect(wrapper.find("button.minusButton").text()).toBe("-");
  });
  it("クリアボタンが表示されている", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find("button.clearButton")).toHaveLength(1);
    expect(wrapper.find("button.clearButton").text()).toBe("CLR");
  });
});
