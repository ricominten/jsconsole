import { css } from '@emotion/core';

import expandImg from '../../static/icons/expand.svg';
import copyImg from '../../static/icons/copy.svg';
import linkImg from '../../static/icons/link.svg';
import searchImg from '../../static/icons/search.svg';

export const iconExpand = css`
  background-image: url(${expandImg});
  padding: 0;
  background-color: transparent;
  margin: 0;
  margin-left: -0.5rem;
  margin-top: 0.4rem;
  background-size: contain;
  height: 8px;
  width: 8px;
  
  :hover {
    background-color: transparent;
    box-shadow: none;
  }
`;

export const iconCopy = css`
   
  background-image: url(${copyImg});
`;

export const iconLink = css`
   
  background-image: url(${linkImg});
`;

export const iconSearch = css`
   
  background-image: url(${searchImg});
`;
