import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Slider from './Slider.component.jsx';

describe('DonationBanner component', () => {
  const wrapper = shallow(<Slider />);

  it('should have 4 <div /> elements', () => {
    expect(wrapper.find('div').length).toBe(4);
  });

  it('should render 3 images', () => {
    expect(wrapper.find('img').length).toBe(3);
  });

  it('should render an unordered list & 3 list items', () => {
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(3);
  });
});
