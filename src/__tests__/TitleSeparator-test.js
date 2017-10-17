import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import TitleSeparator from '../components/TitleSeparator/titleSeparator';

configure({ adapter: new Adapter() });

test('TitleSeparator shows the correct text', () => {
  const component = mount(
    <TitleSeparator text="TESTO"></TitleSeparator>
  );

  let content = component.find('.content');

  expect(content.text()).toEqual('TESTO');
});

test('TitleSeparator shows the correct title', () => {
    const component = mount(
      <TitleSeparator title="TITOLO"></TitleSeparator>
    );
  
    let content = component.find('.title');
  
    expect(content.text()).toEqual('TITOLO');
});