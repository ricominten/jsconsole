/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

export default ({ dimension: size = '8' }) => {
  return (
    <svg
      css={css`
        margin-top: 1px;
      `}
      width={size}
      height={size}
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group" transform="translate(1.000000, 0.000000)">
          <path
            d="M5,4 C5,4.55 5.45,5 6,5 C6.55,5 7,4.55 7,4 C7,3.45 6.55,3 6,3 C5.45,3 5,3.45 5,4"
            id="path3695"
            fill="#BABABA"
          />
          <path
            d="M4.25,0.75 L0.75,4 L4.25,7.25"
            id="path3697"
            stroke="#BABABA"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
};
