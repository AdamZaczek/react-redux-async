import React from 'react';

const InteractionsButton = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);