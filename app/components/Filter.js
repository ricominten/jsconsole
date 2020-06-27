/** @jsx jsx */

import React  from 'react';
import { jsx } from '@emotion/core';
import debounce from 'lodash/debounce';

import * as styles from './Filter.styles';


class Filter extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.enabled !== prevProps.enabled) {
      if (this.props.enabled) {
        this.input.focus();
      } else {
        this.input.value = '';
        this.props.onFilter(null);
      }
    }
  }

  render() {
    const { children, enabled, onFilter = () => {} } = this.props;

    const filter = debounce(onFilter, 100);

    return (
      <span css={styles.filter}>
        <span css={styles.inner(enabled)}>
          <input
            css={styles.input}
            ref={e => (this.input = e)}
            onChange={e => {
              filter(e.target.value.trim().toLowerCase());
            }}
            onKeyDown={e => e.stopPropagation()}
            type="text"
          />
        </span>
        {children}
      </span>
    );
  }
}

export default Filter;
