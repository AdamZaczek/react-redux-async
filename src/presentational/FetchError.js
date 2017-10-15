import React from 'react';

const FetchError = ({ message, onRetry }) => (
  <div>
    Could not fetch collection. {message}
    <div>
      <button onClick={onRetry}>
        <h2>Refetch collection</h2>
      </button>
    </div>
  </div>
);

export default FetchError;