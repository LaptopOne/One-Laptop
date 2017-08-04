import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from '../../components/common/Footer.jsx';

/**
 * set up component rendering
 * returns {object}
 */
function setup() {
  return shallow(<Footer />);
}

describe('Footer component', () => {
  const wrapper = setup();

  it('should have a <div /> elements', () => {
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should have a <p /> elements', () => {
    expect(wrapper.find('p').length).toBe(1);
  });
});
