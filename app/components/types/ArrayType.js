/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import zip from 'lodash/zip';
import flatten from 'lodash/flatten';
import { v4 as uuid } from 'uuid';
import which from '../../lib/which-type';

import * as styles from './Type.styles';

const LIMIT_CLOSED = 10;

const ArrayType = props => {
  const [open, setOpen] = useState(props.open || false);
  const {
    value,
    shallow = true,
    filter = null,
    allowOpen,
    header = true
  } = props;
  const { length } = value;

  let types = value.slice(0, open ? value.length : LIMIT_CLOSED).map((_, i) => {
    const Type = which(_);
    return (
      <Type allowOpen={open} key={uuid()} shallow={!open} value={_}>
        {_}
      </Type>
    );
  });

  // expose holes in the collapsed mode
  if (!open) {
    let count = 0;
    const newTypes = [];
    for (let i = 0; i < types.length; i++) {
      const hole = !(i in types);

      if (count !== 0 && !hole) {
        newTypes.push(
          <span key={uuid()} css={styles.arbInfo}>
            &lt;undefined × {count}
            &gt;
          </span>
        );
        count = 0;
      } else if (hole) {
        count++;
      }

      if (!hole) {
        newTypes.push(types[i]);
      }
    }

    // if there are holes at the end
    if (count !== 0) {
      newTypes.push(
        <span key={uuid()} css={styles.arbInfo}>
          &lt;undefined × {count}
          &gt;
        </span>
      );
    }

    types = newTypes;
  }

  // show more values are available
  if (!open && value.length > LIMIT_CLOSED) {
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
        Array.from({ length: types.length - 1 }, (n, i) => (
          <span key={uuid()}>,&nbsp;</span>
        ))
      )
    );
  }

  return (
    <div css={styles.wrapperType(open)}>
      <div css={styles.groupHead} onClick={() => allowOpen && setOpen(!open)}>
        <em css={styles.arrayType(allowOpen)}>Array</em>
        <span css={styles.arbInfo}>&nbsp;({length})</span>
        {!shallow && <span css={styles.arbStatic}>&nbsp;[</span>}
      </div>
      {!shallow && !open && (
        <div css={styles.groupLine}>
          &nbsp;
          {types}
          &nbsp;
        </div>
      )}
      {open && (
        <div css={styles.groupBody}>
          {types.map((type, i) => {
            if (
              filter === null ||
              filter === undefined ||
              filter === '' ||
              `${value[i]}`.toLowerCase().includes(filter)
            ) {
              return (
                <div css={styles.keyValue} key={uuid()}>
                  <span>
                    {i}
                    :&nbsp;
                  </span>
                  {type}
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
      {!shallow && <span css={styles.arbStatic}>]</span>}
    </div>
  );
};

export default ArrayType;
