/** @jsx jsx */

import React  from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Type.styles';

const NumberType = React.memo((props) =>
  <div css={styles.numberType}>{props.value}</div>
)

export default NumberType;
