import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import DonationBanner from '../DonationBanner/DonationBanner.jsx';

/**
 * 
 * returns {object}
 */
function setup() {
  return shallow(<DonationBanner />);
}

describe('DonationBanner component', () => {
  const wrapper = setup();

  it('should have 3 <div /> elements', () => {
    expect(wrapper.find('div').length).toBe(3);
  });

  it('should have a <p /> elements', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should have <button /> elements', () => {
    expect(wrapper.find('button').length).toBe(1);
  });
});
