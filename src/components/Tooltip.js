import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <h1>React Tooltip Example</h1>
      <p>
        Hover over the following text to see the tooltip:
      </p>
      {/* Example usage of Tooltip component */}
      <Tooltip text="This is a tooltip!">
        <span style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>
          Hover me
        </span>
      </Tooltip>
      <Tooltip text="Another tooltip example!">
        <button>Hover over me!</button>
      </Tooltip>
    </div>
  );
};

export default App;
