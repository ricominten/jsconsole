/** @jsx jsx */

import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { jsx } from '@emotion/core';

import Icon from './Icon';

import * as styles from './LineNav.styles';
import { vh } from './App.styles';
import Filter from './Filter';

export default props => {
  const [text, setText] = useState(null);
  const [type, setType] = useState({}.toString.call(props.value) || 'string');
  const [filter, setFilter] = useState(false);
  const [copyAsHTML, setCopyAsHTML] = useState(type.includes('Element'));

  const { command, value, onFilter } = props;

  const onPermalink = e => {
    // let this throw if no support
    window.history.pushState(null, document.title, e.target.search);
    e.preventDefault();
  };

  const preCopy = async () => {
    // work out how we should copy this thing
    const original = props.value;
    let { value, type } = props;

    if (copyAsHTML) {
      setText(value.outerHTML);
      return;
    }

    if (typeof value === 'function') {
      setText(value.toString());
      return;
    }

    if (typeof value === 'string') {
      setText(value);
      return;
    }

    if (type === '[object Promise]') {
      const text = await value;
      setText(text);
      return;
    }

    if (value instanceof Error || type === '[object Error]') {
      // get real props and add the stack no matter what (FF excludes it)
      value = Object.getOwnPropertyNames(value).reduce((acc, curr) => {
        acc[curr] = value[curr];
        return acc;
      }, {});

      value.stack = original.stack;
    }

    setText(JSON.stringify(value, '', 2));
  };

  const copyAs =
    typeof value === 'function'
      ? 'Copy function'
      : copyAsHTML
      ? 'Copy as HTML'
      : 'Copy as JSON';

  const url = '';

  return (
    <div css={styles.line}>
      {/* {typeof value === 'object' && */}
      {/*  <Filter */}
      {/*    ref={e => (this.filter = e)} */}
      {/*    onFilter={onFilter} */}
      {/*    enabled={filter} */}
      {/*  > */}
      {/*    <button onClick={() => setFilter(!filter)} css={styles.button}> */}
      {/*      <Icon size="small" type="search" /> */}
      {/*      <span css={vh}>search</span> */}
      {/*    </button> */}
      {/*  </Filter> */}
      {/* } */}
      {command && (
        <CopyToClipboard text={`${url}?${escape(command)}`}>
          <button title="Copy permalink" css={styles.button}>
            <Icon size="small" type="link" />
            <span css={vh}>copy permalink to clipboard</span>
          </button>
        </CopyToClipboard>
      )}
      <CopyToClipboard text={text}>
        <button
          title={copyAs}
          css={styles.button}
          onMouseDown={() => {
            if (text === null || text === undefined) {
              preCopy();
            }
          }}
        >
          <Icon size="small" type="copy" />
          <span css={vh}>{copyAs}
{' '}
to clipboard
</span>
        </button>
      </CopyToClipboard>
    </div>
  );
};
