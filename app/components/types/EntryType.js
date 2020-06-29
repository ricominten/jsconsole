/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import which from '../../lib/which-type';

import * as styles from './Type.styles';

const EntryType = props => {
  const [open, setOpen] = useState(props.open || false);
  const { value: entry, allowOpen } = props;

  const [key, value] = entry;

  const Key = which(key);
  const Value = which(value);

  return (
    <div css={styles.wrapperType(open)}>
      <div onClick={() => allowOpen && setOpen(!open)}>
        <Key allowOpen={allowOpen} value={key} />
      </div>
      {open && allowOpen && (
        <div css={styles.groupBody(open)}>
          <span css={styles.arbInfo}>value:&nbsp;</span>
          <span css={!open && styles.objectValue}>
            <Value allowOpen={open} value={value} shallow={!open} />
          </span>
        </div>
      )}
    </div>
  );
};

export default EntryType;
