/** @jsx jsx */

import React, { useState }  from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Type.styles';
import which from '../../lib/which-type';

const PromiseType = (props) => {
  const [open, setOpen] = useState(props.open);
  const [promiseValue, setPromiseValue] = useState(undefined);
  const [status, setStatus] = useState('pending');
  const { filter, allowOpen } = props;

  const onInit = () => {
    setTimeout(async() => {
      const { promiseValue, status } = await updatePromiseState();
      setPromiseValue(promiseValue);
      setStatus(status);
      if(!promiseValue) {
        onInit();
      }
    }, 500);
  };
  useState(onInit());

  const updatePromiseState = async() => {
    let promiseValue = undefined;
    let status = 'pending';

    const flag = Math.random();
    try {
      promiseValue = await Promise.race([
        props.value,
        new Promise(resolve => setTimeout(() => resolve(flag), 0)),
      ]);

      if (promiseValue !== flag) {
        status = 'resolved';
      } else {
        promiseValue = undefined;
      }
    } catch (e) {
      promiseValue = e;
      status = 'rejected';
    }

    return {
      promiseValue,
      status
    }
  };

  const Value = which(promiseValue);

  return (
    <div css={styles.wrapperType(open)}>
      <div onClick={() => allowOpen && setOpen(!open)} >
        <em css={styles.groupHead}>Promise</em>
        <span>{' {'}</span>
      </div>
      <div css={styles.groupBody}>
        <div className="object-item key-value">
          <span css={styles.objectKey}>[[PromiseStatus]]:</span>
          <span css={styles.objectValue}>{status}</span>
        </div>
        {!open && <span css={styles.arbInfo}>, </span>}
        <div className="object-item key-value">
          <span css={styles.objectKey}>[[PromiseValue]]:</span>
          <span css={styles.objectValue}>
            <Value
              filter={filter}
              shallow={true}
              allowOpen={open}
              value={promiseValue}
            />
          </span>
        </div>
      </div>
      <span>{open ? '}' : ' }'}</span>
    </div>
  );
};

export default PromiseType;
