/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import Entry from './EntryType';
import zip from 'lodash/zip';
import flatten from 'lodash/flatten';
import { v4 as uuid } from 'uuid';

import * as styles from './Type.styles';

const SetType = (props) => {
  const [open, setOpen] = useState(props.open || false);
  const { value, shallow = true, allowOpen } = props;
  let { displayName } = props;

  if (!displayName) {
    displayName = value.constructor ? value.constructor.name : 'Object';
  }

  let length = value.size;
  let types = [];
  let i = 0;

  for (let entry of value.entries()) {
    types.push(
      <Entry
        key={uuid()}
        shallow={true}
        value={entry}
        allowOpen={open}
      />
    );

    i++;

    if (!open && i === 10) {
      break;
    }
  }

  // show more values are available
  if (!open && length > 10) {
    types.push(
      <span key={uuid()} css={styles.arbInfo}>
        …
      </span>
    );
  }

  if (!open) {
    // intersperce with commas
    types = flatten(
      zip(
        types,
        Array.from({ length: length - 1 }, (n, i) => (
          <span key={uuid()} css={styles.sep}>
            ,
          </span>
        ))
      )
    );
  }

  return (
    <div css={styles.wrapperType(open)}>
      <div css={styles.groupHead} onClick={() => allowOpen && setOpen(!open)} >
        <em css={styles.setType}>{displayName}</em>
        <span css={styles.arbInfo}>&nbsp;({length})&nbsp;</span>
      </div>
      {!shallow && !open && (
        <div css={styles.groupLine}>
          <div>{'{ '}</div>
          {types.map((type) => (
            <div css={styles.keyValue} key={uuid()}>
              {type}
            </div>
          ))}
          <div>{' }'}</div>
        </div>
      )}
      {open && (
        <div >
          <div>{'{'}</div>
          <div css={styles.groupBody}>
            <span css={styles.arbInfo} key={uuid()}>[[Entries]]:</span>
            {types.map((type, i) => (
              <div css={styles.keyValue} key={uuid()}>
                <span css={styles.arbInfo}>{i}:&nbsp;</span>
                {type}
              </div>
            ))}
          </div>
          <div>{'}'}</div>
        </div>
      )}
    </div>
  );
}

export default SetType;
