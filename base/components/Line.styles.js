import { css } from '@emotion/core';

export const line = css`
  // min-height: 42px;
  line-height: 1.4rem;
  border-bottom: 1px solid #eee;
  position: relative;
`;

export const output = css`
  display: flex;
  max-width: 100%;
  position: relative;
  padding: 0.6rem;
  padding-left: 1.4rem;
`;

export const prompt = css`
  ${output}
  white-space: pre-wrap;
  overflow-x: auto;
`;

export const error = css`
  background: #ffefef;
`;

export const global = css`
  .Line .input,
  .Line .output {
    display: flex;
    max-width: 100%;
    position: relative;
    padding: 0.6rem;
    padding-left: 1.4rem;
  }

  .Line .input {
    white-space: pre;
  }

  .Line .input.prompt {
    white-space: pre-wrap;
    overflow-x: auto;
  }

  .Line .prompt:before {
    position: absolute;
    content: '';
    background-size: contain;
    top: 0.8rem;
    left: 0.4rem;
    width: 12px;
    height: 12px;
    /*scale: 0.75 0.75;*/
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .Line .input:before {
    // background-image: url(/in.svg);
    top: 0.9rem;
  }

  .Line:hover .LineNav,
  .Line:focus .LineNav {
    display: block;
  }

  .Line.out:before {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: calc(100% - 2rem);
    background: blue;
    left: 0.5rem;
  }

  .Line em {
    user-select: none;
    padding-right: 5px;
    cursor: pointer;
    color: #2196f3;
  }

  .Line .type em:hover {
    text-decoration: underline;
  }

  .Line .type.closed * em:hover {
    text-decoration: none;
  }

  .ArrayType.closed > div {
    display: inline-block;
  }

  .index {
    user-select: none;
    vertical-align: text-bottom;
  }

  .key,
  .index {
    line-height: 1.2rem;
    color: #979797;
    margin-right: 0.5rem;
  }

  .Line > .output > .type {
    overflow-x: auto;
  }
`;
