import { css } from '@emotion/core';

/* ** TYPE STYLES ** */

export const type = css`
  display: inline-block;

  & + & {
    margin-left: 0.75rem;
  }
`;

export const stringType = (expanded, bare) => {
  const str = css`
    position: relative;
    color: #4caf50;
    white-space: nowrap;
  `;

  let toggleString = ``;
  if (expanded) {
    toggleString = css`
      white-space: normal;
      white-space: pre-wrap;
    `;
  }

  let bareString;
  if (bare) {
    bareString = css`
      color: #111;
    `;
  } else {
    bareString = css`
      :before,
      :after {
        content: '"';
        color: #111;
      }
    `;
  }

  return css`${type}${str}${toggleString}${bareString}`;
};

export const symbolType = css`
  color: #f44336;
`;

export const numberType = css`
  color: #0000c0;
`;

const openable = (canOpen = false) => {
  if (!canOpen) {
    return css`
      color: #1976d2;
    `;
  }
  return css`
    color: #2196f3;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `;
};

export const arrayType = openable;

export const objectType = openable;

export const functionType = openable;

export const promiseType = openable;

export const setType = openable;

export const boolType = css`
  color: #e91e63;
`;

export const nullType = css`
  color: #9c27b0;
`;

export const undefinedType = css`
  color: #aaa;
`;

/* SECTIONS STYLES */

export const wrapperType = (open, error = false) => {
  const background = error ? '#ffefef' : 'transparent';
  if (!open) {
    return css`
      display: flex;
      overflow-x: auto;
      background: ${background};

      * {
        display: flex;
      }
    `;
  }
  return css`
    overflow-x: auto;
    background: ${background};
  `;
};

export const groupHead = css`
  user-select: none;
  color: #2196f3;
`;

export const groupLine = css`
  display: flex;
`;

export const groupBody = (open = true) => {
  if (open) {
    return css`
      margin-left: 0.5rem;
    `;
  }
  return css`
    margin-left: 0.5rem;
    display: flex;
  `;
};

export const objectKey = css`
  color: #979797;
  margin-right: 0.5rem;
`;

export const objectValue = css`
  > * {
    display: flex;
  }
`;

export const valueReset = css`
  > div {
    display: block;
  }
`;

export const arbInfo = css`
  color: #999;
`;

export const arbStatic = css`
  color: #111;
`;

export const sep = css`
  padding-right: 1ch;
`;

export const keyValue = css`
  line-height: 1.2rem;
  white-space: nowrap;
  display: flex;

  .closed & {
    display: inline;
  }
`;

export const expandButton = css`
  position: absolute;
  display: flex;
  top: 0.4rem;
  left: -1rem;
  width: 12px;
  height: 12px;
  border: none;
  padding: 0;
`;
