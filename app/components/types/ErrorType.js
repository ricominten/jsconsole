/** @jsx jsx */

import React  from 'react';
import { jsx } from '@emotion/core';
import ObjectType from './ObjectType';

const ErrorType = (props) => {
  const { value, shallow = true, filter, open, allowOpen } = props;
  const sig = value.name || value.constructor.name;

  return (
    <ObjectType
      filter={filter}
      allowOpen={allowOpen}
      type="error"
      shallow={shallow}
      open={open}
      value={value}
      displayName={sig}
    />
  );
};

export default ErrorType;
