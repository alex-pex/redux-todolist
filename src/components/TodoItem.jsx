import React from 'react';
import classNames from 'classnames';
import TextInput from './TextInput';

export default function (props) {
  var itemClass = classNames({
    'todo': true,
    'completed': props.isCompleted,
    'editing': props.isEditing
  });

  return (
    <li className={itemClass}>
      <div className="view">
        <input type="checkbox" className="toggle" defaultChecked={props.isCompleted} />
        <label htmlFor="todo">
          {props.text}
        </label>
        <button className="destroy" onClick={() => props.deleteItem(props.id)}></button>
      </div>
      <TextInput />
    </li>
  )
};