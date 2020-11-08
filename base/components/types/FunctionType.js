/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Type.styles';

const LIMIT_CLOSED = 45;

const FunctionType = React.memo(props => {
  const [open, setOpen] = useState(props.open || false);
  const { value, shallow = true, allowOpen } = props;

  // this gets the source of the function, regadless of whether
  // it has a function called ".toString", like lodash has!
  const code = Function.toString.call(value);

  const object = Object.getOwnPropertyNames(value).reduce((acc, curr) => {
    acc[curr] = value[curr];
    return acc;
  }, {});

  const formattedCode = code.replace(/^function /, '').replace(object.name, '');
  let condensedCode = formattedCode
    .replace(/\s\s+/g, ' ')
    .substring(0, LIMIT_CLOSED);

  console.log(condensedCode);
  console.log(condensedCode.length);

  if (condensedCode.length >= LIMIT_CLOSED) {
    condensedCode = `${condensedCode} … } `;
  }

  console.log(condensedCode);
  console.log(formattedCode);

  return (
    <div css={styles.wrapperType(open)}>
      <em
        css={styles.functionType(allowOpen)}
        onClick={() => allowOpen && setOpen(!open)}
      >
        ƒ 
{' '}
{object.name || 'function'}
      </em>
      {!open && !shallow && <span>{condensedCode}</span>}
      {open && !shallow && <span>{formattedCode}</span>}
    </div>
  );
});

export default FunctionType;
