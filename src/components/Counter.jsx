import React, { useState } from 'react';

const Counter = () => {
  const [numPizzas, setNumPizzas] = useState(0);

  const handleIncrease = () => {
    setNumPizzas(numPizzas + 1);
  };

  const handleDecrease = () => {
    if (numPizzas > 0) {
      setNumPizzas(numPizzas - 1);
    }
  };

  return (
    <div>
      <h3>Number of pizzas: {numPizzas}</h3>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default Counter;