import React from 'react';

import store from './Store';
import { addTodo, toggleTodo, setVisibilityFilter } from './Action';

export const ReduxExample1 = () => {
  const todoaction = () => {
    store.dispatch(addTodo('kkk'));
  };
  const setVisibleAction = () => {
    store.dispatch(setVisibilityFilter('test'));
  };
  return (
    <div>
      <button onClick={todoaction}>addTodo</button>
      <br />
      <button onClick={toggleTodo}>toggleTodo</button>
      <br />
      <button onClick={setVisibleAction}>setVisibilityFilter</button>
      <p>{JSON.stringify(store.getState())}</p>
    </div>
  );
};
