import { css } from '@emotion/core';

export const line = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: .25rem;
  top: .5rem;
  z-index: 10;
  user-select: none;
`;

export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 0 0.25rem;
  padding: 0;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.3;
  border: 0;
  border-radius: 50%;
  background-color: #ddd;
  z-index: 10;
  transition: all 0.2s ease;
  
  :hover {
  /*
  opacity: 0.99 =
    this is a hack because somehow \`opacity: 1\` sets the
    layer order _below_ a previous element with a lesser
    z-index. No idea why though, suspect specific to chrome.
  */
  opacity: 0.99;
  background-color: #2196F3;
  box-shadow: 0 0 4px 0px #2196F3;
  
  :active {
    box-shadow: 0 0 0 1px #2196F3;
  }
`;
