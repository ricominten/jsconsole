/** @jsx jsx */

import React, { Component } from 'react';
import { jsx, Global } from '@emotion/core';

import * as styles from './Line.styles';
import LineNav from './LineNav';
import which from '../lib/which-type';
import Icon, { IconContainer } from './Icon';

class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.filter !== nextState.filter) {
      return true;
    }

    return false; // this prevents bananas amount of rendering
  }

  getIcon = (icon) => {
    return (
      <IconContainer position="absolute">
        <Icon size={12} type={icon} />
      </IconContainer>
    )
  }

  render() {
    const {
      type = 'response',
      value,
      command = null,
      error = false,
      open = false,
      html = false,
      onFocus = () => { },
    } = this.props;

    let line = null;

    const { filter } = this.state;

    if (type === 'command') {
      line = (
        <div css={styles.prompt}>
          {this.getIcon('in')}
          <LineNav value={value} />
          {value}
        </div>
      );
    }

    if (type === 'log' || type === 'response') {
      if (type === 'log' && Array.isArray(value) && value.length === 0) {
        return null;
      }

      // for LineNav I do a bit of a giggle so if it's a log, we copy the single
      // value, which is nicer for the user
      line = (
        <div css={[styles.prompt, error && styles.error]}>

          {type !== 'log' && this.getIcon(error ? 'error' : 'out')}
          <LineNav
            onFilter={filter => {
              this.setState({ filter });
            }}
            value={
              type === 'log' && Array.isArray(value) && value.length === 1
                ? value[0]
                : value
            }
            command={command}
          />

          {(type === 'log' && Array.isArray(value) ? value : [value]).map(
            (value, i) => {
              const Type = which(value);
              return (
                <Type
                  filter={filter}
                  html={html}
                  value={value}
                  open={open}
                  allowOpen={true}
                  bare={type === 'log'}
                  key={`type-${i}`}
                  shallow={false}
                >
                  {value}
                </Type>
              );
            }
          )}
        </div>
      );
    }

    return (
      <div css={styles.line} onClick={onFocus}>
        {line}
      </div>
    );
  }
}

export default Line;
