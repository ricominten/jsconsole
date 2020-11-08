/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Type.styles';
import Icon from '../Icon';

const StringType = props => {
  const [expanded, setExpanded] = useState(!props.shallow);
  const { value, bare = false, html = false } = props;
  const multiline = props.value.includes('\n');

  return (
    <div css={styles.stringType(expanded, bare)}>
      {multiline && !bare && (
        <button
          onClick={() => setExpanded(!expanded)}
          css={styles.expandButton}
          title={expanded ? 'collapse' : 'expand'}
          aria-label={expanded ? 'collapse text' : 'expand text'}
        >
          <Icon size={10} type={expanded ? 'collapse' : 'expand'} />
        </button>
      )}
      {html ? (
        <span dangerouslySetInnerHTML={{ __html: value }} />
      ) : multiline && !expanded ? (
        value.replace(/\n/g, '↵')
      ) : (
        value
      )}
    </div>
  );
};

export default StringType;
