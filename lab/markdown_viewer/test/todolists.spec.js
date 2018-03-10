import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import TodoLists from '../src/components/TodoLists';

describe('<TodoLists/>', function () {
  it('should have a title for each list', function () {
    const wrapper = shallow(<TodoLists/>);
    expect(wrapper.find('h2')).to.have.length(3);
  });

  it('should have props for todos and onclick', function () {
    const wrapper = shallow(<TodoLists/>);
    expect(wrapper.props().todos).to.be.defined;
    expect(wrapper.props().onTodoClick).to.be.defined;
  });
});
