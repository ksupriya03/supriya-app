import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import languages from './languages array';

const Language = ({ language }) => <li>{language}</li>;
//const lang1 = languages;
//console.log(lang1.length);
const LanguageList = (/* { languages } */) => {
  return (
    <ul>
      {languages.map(lang => (
        <Language key={lang} language={lang} />
      ))}
    </ul>
  );
};

Language.propTypes = {
  language: PropTypes.string.isRequired,
};

/* LanguageList.propTypes = {
  lang1: PropTypes.array.isRequired,
}; */

export default LanguageList;
