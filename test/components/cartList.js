import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react';

import CartList from '../../app/scripts/components/cartList.js';

describe('CartList component', () => {
  let cartList, test;

  test = {
    items: [1,2,3],
    total: 100
  };

  beforeEach(() => {
    cartList = shallow(<CartList cart={test}/>);
  });

  it('should be a div', () => {
    expect(cartList.is('div')).to.equal.true;
  });

});
