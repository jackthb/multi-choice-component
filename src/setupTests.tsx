import Enzyme from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

// import ReactSixteenAdapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new ReactSixteenAdapter() });
