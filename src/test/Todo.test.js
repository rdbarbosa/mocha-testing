/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { configure, mount } from "enzyme";
import nock from "nock";
import React from "react";
import Todo from "../pages/todo/addTodo";
import { data } from "./data.mock";

configure({
	adapter: new Adapter(),
});

function MySpy() {
	this.calls = 0;
}

MySpy.prototype.fn = function () {
	return () => this.calls++;
};

describe("Testin Todo Component", () => {
	it("input existe", () => {
		const wrapper = mount(<Todo />);
		expect(wrapper.find('input[type="text"]').exists()).to.be.true;
	});

	it("Button existe", () => {
		const wrapper = mount(<Todo />);
		expect(wrapper.find('button[type="button"]').exists()).to.be.true;
	});

	it("Input change", () => {
		const wrapper = mount(<Todo />);
		wrapper
			.find('input[type="text"]')
			.simulate("change", { target: { value: "Hello" } });
		expect(wrapper.find('input[type="text"]').props().value).to.equal("Hello");
	});

	it("Input not change", () => {
		const wrapper = mount(<Todo />);
		wrapper
			.find('input[type="text"]')
			.simulate("change", { target: { value: "Hello" } });
		expect(wrapper.find('input[type="text"]').props().value).not.to.equal(
			"Teste"
		);
	});

	it("button click", () => {
		const wrapper = mount(<Todo />);
		const input = wrapper.find('input[type="text"]');
		const button = wrapper.find('button[type="button"]');
		// cache button element
		// const button = colors.find("button").last();
		// pass mocked event object
		input.simulate("change", { target: { value: "Hello" } });
		button.simulate("click");
		expect(wrapper.find("#Hello")).to.have.lengthOf(1);
	});

	it("button click input empty", () => {
		const wrapper = mount(<Todo />);
		const input = wrapper.find('input[type="text"]');
		const button = wrapper.find('button[type="button"]');
		input.simulate("change", { target: { value: "" } });
		button.simulate("click");
		expect(wrapper.find("#Hello")).to.have.lengthOf(0);
	});

	it("Test Call Endpoint", async () => {
		const scope = nock("https://api.github.com")
			.get("/repos/javascript-tutorial/en.javascript.info/commits")
			.once()
			.reply(200, {
				data: data,
			});
		const wrapper = mount(<Todo />);
		const input = wrapper.find('input[type="text"]');
		const button = wrapper.find('button[type="button"]');
		input.simulate("change", { target: { value: "" } });
		button.simulate("click");
		expect(wrapper.find("#Hello")).to.have.lengthOf(0);
	});

	chai.use(chaiEnzyme());
});
