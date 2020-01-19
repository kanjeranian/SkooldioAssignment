import React, { component } from 'react';

const Round = ({ isOpen, number }) => {
  const color = isOpen ? '#2ECC71' : '#d8d8d8';
  const cursor = isOpen ? 'pointer' : 'default';
  return (
    <div>
      <svg height='29' width='29' cursor={cursor}>
        <circle cx='14.5' cy='14.5' r='14.5' fill={color} />
        <text
          font-size='20'
          fill='white'
          text-anchor='middle'
          alignment-baseline='baseline'
          x='14'
          y='12'>
          {number}
        </text>
      </svg>
    </div>
  );
};

export default Round;
