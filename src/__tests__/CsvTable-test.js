import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import CsvTable from '../components/CsvDisplayer/CsvTable/CsvTable';

configure({ adapter: new Adapter() });

test('CsvTable shows the caption', () => {
  const component = mount(
    <CsvTable caption="TEST"></CsvTable>
  );

  let caption = component.find('caption');

  expect(caption.text()).toEqual('TEST');
});

test('CsvTable shows the headers', () => {
    const component = mount(
      <CsvTable noHeader={false}></CsvTable>
    );

    expect(component.find('thead').exists()).toBeTruthy();
});

test('CsvTable shows the correct headers', () => {
    var headers = ['Colonna 1', 'Colonna 2', 'Colonna 3'];
    const component = mount(
      <CsvTable headers={headers}></CsvTable>
    );
  
    let thead = component.find('thead').first();
    let trs = thead.find('tr');
    let ths = trs.first().find('th');

    expect(trs.length).toBe(1);
    expect(trs.first().find('th').length).toBe(3);
    expect(ths.at(0).text()).toBe('Colonna 1');
    expect(ths.at(1).text()).toBe('Colonna 2');
});

test('CsvTable doesn\'t show the headers', () => {
    const component = mount(
      <CsvTable noHeader={true}></CsvTable>
    );
  
    expect(component.find('thead').exists()).toBeFalsy();
});

test('CsvTable show tbody', () => {
    const component = mount(
        <CsvTable></CsvTable>
      );
      component.instance();
    
      expect(component.find('tbody').exists()).toBeTruthy();
});

test('CsvTable shows rows', () => {
    let rows = [
        {
            'Column 1': 'Value 1'
        },
        {
            'Column 2': 'Value 2'
        }
    ];
    const component = mount(
      <CsvTable rows={rows}></CsvTable>
    );
  
    expect(component.find('tbody').find('tr').length).toBe(2);
});

test('CsvTable shows cells', () => {
    let rows = [
        {
            'Column 1': 'Value 1',
            'Column 2': 'Value 2',
        },
        {
            'Column 3': 'Value 3'
        }
    ];
    const component = mount(
      <CsvTable rows={rows}></CsvTable>
    );

    let firstTr = component.find('tbody').find('tr').first();
    let secondTr = component.find('tbody').find('tr').at(1);
  
    expect(firstTr.find('td').first().text()).toBe('Value 1');
    expect(firstTr.find('td').at(1).text()).toBe('Value 2');
    expect(secondTr.find('td').first().text()).toBe('Value 3');
});

test('CsvTable doesn\'t show the tfoot', () => {
    const component = mount(
      <CsvTable></CsvTable>
    );
  
    expect(component.find('tfoot').length).toBe(0);
});

test('CsvTable shows the tfoot', () => {
    const component = mount(
      <CsvTable showFoot={true}></CsvTable>
    );
  
    expect(component.find('tfoot').length).toBe(1);
});

test('CsvTable shows the correct tfoot', () => {
    var headers = ['Colonna 1', 'Colonna 2', 'Colonna 3'];
    const component = mount(
      <CsvTable headers={headers} showFoot={true}></CsvTable>
    );
  
    let tfoot = component.find('tfoot').first();
    let trs = tfoot.find('tr');
    let ths = trs.first().find('th');

    expect(trs.length).toBe(1);
    expect(trs.first().find('th').length).toBe(3);
    expect(ths.at(0).text()).toBe('Colonna 1');
    expect(ths.at(1).text()).toBe('Colonna 2');
});