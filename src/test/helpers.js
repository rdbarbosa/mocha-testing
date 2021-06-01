import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { expect } from "chai";
import { configure, mount, render, shallow } from "enzyme";
import sinon from "sinon";

configure({ adapter: new Adapter() });

global.expect = expect;

global.sinon = sinon;

global.mount = mount;
global.render = render;
global.shallow = shallow;
