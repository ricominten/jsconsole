import { css } from '@emotion/core';

export const global = css`
  * {
    box-sizing: border-box;
  }

  body,
  html,
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .theme-dark,
  .theme-dark .Line,
  .theme-dark .Input {
    background: #282c34;
    color: #abb2bf;
  }

  .theme-dark.top .Input {
    background: black;
    box-shadow: 0px 1px 1px rgba(146, 145, 145, 0.26);
  }

  .theme-dark .string.bareString {
    color: #abb2bf;
  }

  .theme-dark .string.quote:before,
  .theme-dark .string.quote:after {
    color: #abb2bf;
  }

  .theme-dark .Line {
    border-bottom: 1px solid rgb(84, 84, 84);
  }

  .theme-dark .Input,
  .theme-dark .Input textarea,
  .theme-dark .prompt.input {
    color: rgb(222, 222, 222);
  }

  .theme-dark .function.function em,
  .theme-dark .Line em {
    color: #c678dd;
  }

  .theme-dark .number {
    color: #d19a66;
  }

  .theme-dark .string {
    color: #98c379;
  }

  .theme-dark .icon {
    background-color: rgb(99, 104, 115);
  }

  .theme-dark .Line .response.error {
    background: rgb(39, 5, 5);
  }

  .theme-dark a {
    color: #c678dd;
  }
`;

export const app = css`
  html {
    font-size: 16px;
  }

  * {
    font-size: 0.85rem;
    line-height: 1.4rem;
    font-family: 'Menlo', consolas, monospace;
  }
`;

export const top = css`
  padding-top: 2.6rem;
`;

export const vh = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
`;
