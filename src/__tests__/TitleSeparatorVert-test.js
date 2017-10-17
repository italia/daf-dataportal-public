import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import TitleSeparatorVert from '../components/TitleSeparator/titleSeparatorVert';

configure({ adapter: new Adapter() });

test('TitleSeparatorVert shows the correct text', () => {
  const component = mount(
    <TitleSeparatorVert text="TESTO"></TitleSeparatorVert>
  );

  let content = component.find('div').first().find('div').first();

  expect(content.text()).toEqual('TESTO');
});

test('TitleSeparatorVert shows the correct title', () => {
    const component = mount(
      <TitleSeparatorVert title="TITOLO"></TitleSeparatorVert>
    );
  
    let content = component.find('.title');
  
    expect(content.text()).toEqual('TITOLO');
});