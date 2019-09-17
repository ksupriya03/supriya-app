import React from 'react';
import './languages array';

export const TodoItem = ({ languages }) => {
  return (
    <ul>
      {languages.map(language => (
        <Item key={language} language={language} />
      ))}
    </ul>
  );
};

const Item = ({ language }) => {
  return <li>{language}</li>;
};
