/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import zip from 'lodash/zip';
import flatten from 'lodash/flatten';
import { v4 as uuid } from 'uuid';
import Entry from './EntryType';

import * as styles from './Type.styles';

const SetType = props => {
  const [open, setOpen] = useState(props.open || false);
  const { value, shallow = true, allowOpen } = props;
  let { displayName } = props;

  if (!displayName) {
    displayName = value.constructor ? value.constructor.name : 'Object';
  }

  const length = value.size;
  let types = [];
  let i = 0;

  // eslint-disable-next-line no-restricted-syntax,react/prop-types
  for (const entry of value.entries()) {
    types.push(<Entry key={uuid()} shallow value={entry} allowOpen={open} />);

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
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div css={styles.groupHead} onClick={() => allowOpen && setOpen(!open)}>
        <em css={styles.setType(allowOpen)}>{displayName}</em>
        <span css={styles.arbInfo}>
          &nbsp;(
          {length}
          )&nbsp;
        </span>
      </div>
      {!shallow && !open && (
        <div css={styles.groupLine}>
          <div>{'{ '}</div>
          {types.map(type => (
            <div css={styles.keyValue} key={uuid()}>
              {type}
            </div>
          ))}
          <div>{' }'}</div>
        </div>
      )}
      {open && (
        <div>
          <div>{'{'}</div>
          <div css={styles.groupBody}>
            <span css={styles.arbInfo} key={uuid()}>
              [[Entries]]:
            </span>
            {types.map((type, index) => (
              <div css={styles.keyValue} key={uuid()}>
                <span css={styles.arbInfo}>
                  {index}
                  :&nbsp;
                </span>
                {type}
              </div>
            ))}
          </div>
          <div>{'}'}</div>
        </div>
      )}
    </div>
  );
};

export default SetType;
