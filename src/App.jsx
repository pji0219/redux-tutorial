import React from 'react';
import CounterContainer from './containers/counter-container-hooks';
import TodosContainer from './containers/todos-container-hooks';

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
}

export default App;
