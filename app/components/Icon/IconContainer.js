/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

import * as styles from './IconContainer.styles';

export default ({ position, children }) => {
  return <span css={styles.position(position)}>{children}</span>;
};
