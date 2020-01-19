import React from 'react';

const PrepScore = ({ score, text }) => {
  return (
    <div>
      {score}
      <p>{text}</p>
    </div>
  );
};

export default PrepScore;
