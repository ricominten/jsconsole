/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Type.styles';

const NullType = React.memo(() => <div css={styles.nullType}>null</div>);

export default NullType;
