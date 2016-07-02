import React from 'react';
import TodoItem from './TodoItem';

export default function (props) {
  var getItems = function () {
    if (props.todos) {
      return props.todos.filter(
        (item) => props.filter === 'all' || item.get('status') === props.filter
      );
    }
    return [];
  };

  var deleteItem = function(id) {
    console.log('delete '+id);
  };

  return (
    <section className="main">
      <ul className="todo-list">
        {getItems().map(item =>
          <TodoItem key={item.get('id')}
          id={item.get('id')}
          text={item.get('text')}
          isCompleted={item.get('status') == 'completed'}
          isEditing={item.get('status') == 'editing'}
          deleteItem={deleteItem}
          />
        )}
      </ul>
    </section>
  );
};