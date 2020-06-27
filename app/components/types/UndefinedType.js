/** @jsx jsx */

import React  from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Type.styles';

const UndefinedType = React.memo(() =>
  <div css={styles.undefinedType}>undefined</div>
);

export default UndefinedType;
