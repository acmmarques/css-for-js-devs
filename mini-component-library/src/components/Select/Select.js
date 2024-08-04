import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectEl value={value} onChange={onChange}>
      {children}
    </SelectEl>
  );
};


const SelectEl = styled.select`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  };

  &:focus {
  }
`

export default Select;
