/** @jsx jsx */

import React  from 'react';
import { jsx } from '@emotion/core';

import Collapse from './Collapse';
import Copy from './Copy';
import Error from './Error';
import Expand from './Expand';
import In from './in';
import Info from './Info';
import Link from './Link';
import Out from './Out';
import Prompt from './Prompt';
import Search from './Search';
import Share from './Share';

export default ({size, type}) => {
  let Tag;
  switch (type) {
    case ('collapse'):
      Tag = Collapse;
      break;
    case ('copy'):
      Tag = Copy;
      break;
    case ('error'):
      Tag = Error;
      break;
    case ('expand'):
      Tag = Expand;
      break;
    case ('in'):
      Tag = In;
      break;
    case ('info'):
      Tag = Info;
      break;
    case ('link'):
      Tag = Link;
      break;
    case ('out'):
      Tag = Out;
      break;
    case ('prompt'):
      Tag = Prompt;
      break;
    case ('search'):
      Tag = Search;
      break;
    case ('share'):
      Tag = Share;
      break;
  }

  let dimension;

  if (typeof size === 'number') {
    dimension = size;
  } else {
    dimension = size === 'small' ? "14" : "24";
  }

  return (
    <Tag dimension={dimension}/>
  )
}
