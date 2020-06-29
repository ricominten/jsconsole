/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Type.styles';

const SymbolType = React.memo(props => (
  <div css={styles.symbolType}>{props.value.toString()}</div>
));

export default SymbolType;
