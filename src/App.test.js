import React from 'react';
import App from './App';

// Enzyme imports
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('The App component, when initially rendered', () => {
  it('should mount without crashing', () => {
    const enzymeWrapper = shallow(<App />);
    expect(enzymeWrapper.find('App')).not.toBeNull();
  });
});