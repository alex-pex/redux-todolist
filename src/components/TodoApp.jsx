import React from 'react';
import TodoList from './TodoList'

export default function (props) {
  return (
    <div>
      <section className="todoapp">
        <TodoList todos={props.todos} filter={props.filter} />
      </section>
    </div>
  );
};