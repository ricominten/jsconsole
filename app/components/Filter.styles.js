import { css } from '@emotion/core';

export const filter = css`
  // height: 1rem;
  // display: inline-block;
`;

export const inner = (enabled) => {
  if (enabled) {
    return css`
      border-radius: 20px;
      display: inline-block;
      border: 1px solid #2196F3;
      background: white;
      padding-right: 1rem;
      position: relative;
      left: 1.75rem;
      z-index: 0;
      line-height: 1rem;
    `;
  } else {
    return css`
      display: none;
    `;
  }
}

export const input = css`
  font-family: "Menlo", consolas, monospace;
  color: #333;
  width: 8rem;
  outline: 0;
  border: 0;
  background: transparent;
  padding: .25rem .5rem;
  font-size: .75rem;
`;

export const global = css`
.Filter.is-visible .icon {
  opacity: .99;
  background-color: #2196F3;
}
`;
