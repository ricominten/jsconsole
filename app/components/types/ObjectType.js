/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import which from '../../lib/which-type';
import StringType from './StringType';
import zip from 'lodash/zip';
import flatten from 'lodash/flatten';
import { v4 as uuid } from 'uuid';

import * as styles from './Type.styles';

const LIMIT_CLOSED = 5;

function* enumerate(obj) {
  let visited = new Set();
  while (obj) {
    for (let key of Reflect.ownKeys(obj)) {
      if (typeof key === 'string') {
        let desc = Reflect.getOwnPropertyDescriptor(obj, key);
        if (desc && !visited.has(key)) {
          visited.add(key);
          if (desc.enumerable) {
            yield key;
          }
        }
      }
    }
    obj = Reflect.getPrototypeOf(obj);
  }
}

const ObjectType = React.memo((props) => {
  const [open, setOpen] = useState(props.open);
  const {
      filter = null,
      value,
      shallow = true,
      type = {}.toString.call(value),
      allowOpen,
    } = props;

  const error = type === 'error';

  let { displayName } = props;
  if (!displayName) {
    displayName = value.constructor ? value.constructor.name : 'Object';
  }

  let newProps = open ? [...enumerate(value)] : Object.keys(value);

  Object.getOwnPropertyNames(value).forEach(prop => {
    if (!newProps.includes(prop)) {
      newProps.push(prop);
    }
  });

  if (filter !== null) {
    newProps = newProps.filter(prop => {
      if ((prop + '').toLowerCase().includes(filter)) {
        return true;
      }

      if ((value[prop] + '').toLowerCase().includes(filter)) {
        return true;
      }

      return false;
    });
  }

  if (!open) {
    newProps.splice(LIMIT_CLOSED);
  }

  let types = newProps.sort().map((key, i) => {
    const Type = which(value[key]);
    return {
      key,
      value: (
        <Type
          allowOpen={open}
          key={uuid()}
          shallow={!open}
          value={value[key]}
        />
      ),
    };
  });

  if (!open && Object.keys(value).length > LIMIT_CLOSED) {
    types.push(
      <span key={uuid()}>
        …
      </span>
    );
  }

  if (!open) {
    // intersperce with commas
    types = flatten(
      zip(
        types,
        Array.from({ length: types.length - 1 },(n, i) => (
          <span key={uuid()}>,&nbsp;</span>
        ))
      )
    );
  }

  if (!open && shallow) {
    return (
      <div css={styles.wrapperType(open, error)}>
        <em css={styles.objectType(error)}>{displayName}</em>
      </div>
    );
  }

  return (
    <div css={styles.wrapperType(open, error)}>
      <div css={styles.groupHead} onClick={() => allowOpen && setOpen(!open)}>
        <em css={styles.objectType(allowOpen, error)}>{displayName}</em>
        <span css={styles.arbInfo}>&nbsp;{'{'}&nbsp;</span>
      </div>
      {!open && error && (
        <div css={styles.groupLine}>
          <StringType value={value.message} />
        </div>
      )}
      {!open && displayName !== 'Object' && !error && (
        <div css={styles.groupLine}> … </div>
      )}
      {!open && !error && (
        <div css={styles.groupLine}>
          {types.map((obj) => {
            if (obj && obj.key && obj.value) {
              return (
                <span css={styles.keyValue} key={uuid()}>
                  <span css={styles.objectKey} >{obj.key}:</span>
                  <span css={styles.objectValue}>{obj.value}</span>
                </span>
              );
            }
            return obj;
          })}
        </div>
      )}
      {open && (
        <div css={styles.groupBody} >
          {types.map((obj) => (
            <div css={styles.keyValue} key={uuid()}>
              <span css={styles.objectKey} >{obj.key}:</span>
              <span>{obj.value}</span>
            </div>
          ))}
        </div>
      )}
      {!open && (<span>&nbsp;</span>)}
      <span css={styles.arbInfo}>{'}'}</span>
    </div>
  );
});

export default ObjectType;
