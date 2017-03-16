import React, { Component } from 'react';


// COMPONENTS
import LanguageList from '../containers/language-list'
import ActiveLanguage from '../containers/active-language'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="page-header text-center">My Programming Languages</h3>
        <div className="row">
          <LanguageList />
          <ActiveLanguage />
        </div>
      </div>
    );
  }
}
