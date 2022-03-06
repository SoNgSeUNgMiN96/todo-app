import React from 'react';
import { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57} //항목 높이
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }} //List에  기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
