/** @jsx jsx */

import React, { Component } from 'react';
import { jsx } from '@emotion/core';

import * as styles from './Input.styles';
import Icon, { IconContainer } from './Icon';

import keycodes from '../lib/keycodes';

class Input extends Component {
  constructor(props) {
    super(props);

    // history is set in the componentDidMount
    this.state = {
      value: props.value || '',
      multiline: false,
      rows: 1,
      historyCursor: props.history.length
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange() {
    const { value } = this.input;
    const { length } = value.split('\n');
    this.setState({
      multiline: length > 1,
      rows: length < 20 ? length : 20,
      value
    });
  }

  async onKeyPress(e) {
    const code = keycodes[e.keyCode];
    const { multiline } = this.state;
    const { history } = this.props;
    let { historyCursor } = this.state;

    // FIXME in multiline, cursor up when we're at the top
    // const cursor = getCursor(this.input);

    if (e.ctrlKey && code === 'l') {
      this.props.onClear();
      return;
    }

    if (!multiline) {
      if (code === 'up arrow') {
        historyCursor--;
        if (historyCursor < 0) {
          this.setState({ historyCursor: 0 });
          return;
        }
        this.setState({ historyCursor, value: history[historyCursor] });
        // this.onChange();
        e.preventDefault();
        return;
      }

      if (code === 'down arrow') {
        historyCursor++;
        if (historyCursor >= history.length) {
          this.setState({ historyCursor: history.length, value: '' });
          return;
        }
        this.setState({ historyCursor, value: history[historyCursor] });
        e.preventDefault();
        return;
      }
    }

    const command = this.input.value;

    if (code === 'enter') {
      if (e.shiftKey) {
        return;
      }

      if (!command) {
        e.preventDefault();
        return;
      }

      this.props.addHistory(command);
      this.setState({ historyCursor: history.length + 1, value: '' });
      e.preventDefault();
      await this.props.onRun(command);
      // Don't use `this.input.scrollIntoView();` as it messes with iframes
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  render() {
    const { autoFocus } = this.props;
    return (
      <div css={styles.input}>
        <IconContainer position="absolute">
          <Icon size={12} type="prompt" />
        </IconContainer>
        <textarea
          css={styles.textarea}
          className="cli"
          rows={this.state.rows}
          autoFocus={autoFocus}
          ref={e => {
            this.input = e;
            this.props.inputRef(e);
          }}
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyPress}
        />
      </div>
    );
  }
}

export default Input;
