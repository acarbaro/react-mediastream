import React from 'react';

const ActionButton = ({ buttonText, dynamicFunction }) => {
  return (
    <div>
      <button onClick={dynamicFunction} >
        {buttonText}
      </button>
    </div> 
  );
};

export default ActionButton;