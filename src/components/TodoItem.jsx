import React from 'react';
import TextInput from './TextInput';

export default function (props) {
  return (
    <li className="todo">
      <div className="view">
        <input type="checkbox" className="toggle" />
        <label htmlFor="todo">
          {props.text}
        </label>
        <button className="destroy"></button>
      </div>
      <TextInput /> // We add the TextInput component
    </li>
  )
};