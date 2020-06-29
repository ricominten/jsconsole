import { css } from '@emotion/core';

export const position = position => {
  switch (position) {
    case 'absolute':
      return css`
        position: absolute;
        display: flex;
        top: 0.9rem;
        left: 0.4rem;
        width: 12px;
        height: 12px;
      `;
    default:
      return css`
        position: relative;
        display: flex;
      `;
  }
};
