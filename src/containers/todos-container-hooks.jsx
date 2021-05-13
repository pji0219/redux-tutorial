import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
  // todos reducer에서 관리 하고 있는 state를 useSelector로 조회
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
