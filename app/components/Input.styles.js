import { css } from '@emotion/core';

export const input = css`
  display: block;
  width: 100%;
  z-index: 10;
  position: relative;
`;

export const textarea = css`
  resize: none;
  background: none;
  font-family: "Menlo", consolas, monospace;
  border: 0;
  padding: 0.6rem;
  padding-left: 1.4rem;
  display: block;
  width: 100%;
  outline: none;
  font-size: inherit;
  line-height: inherit;
`;

// export const test = css`
// .top .Input {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   background: #E6E8F2;
//   /*border-bottom: 1px solid #aaabb8;*/
//   box-shadow: 0px 1px 1px rgba(0,0,0,.4);
// }
//
//
// .Line .input:before {
//   // background-image: url(/in.svg);
// }
//
// `;
