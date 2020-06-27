import React  from 'react';

export default ({dimension: size = "14"}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path id="Shape" fill="#666" d="M14 8H8v0H6V8H0V6h6V6h2v0h6z" />
      </g>
    </svg>
  )
}
