import React  from 'react';

export default ({dimension: size = "14"}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path id="Shape" fill="#666" d="M14 8H8v6H6V8H0V6h6V0h2v6h6z" />
        <path d="M0 0h14v14H0z" />
      </g>
    </svg>
  )
}
