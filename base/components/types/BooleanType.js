/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Type.styles';

const BooleanType = React.memo(props => (
  <div css={styles.boolType}>{props.value ? 'true' : 'false'}</div>
));

export default BooleanType;
