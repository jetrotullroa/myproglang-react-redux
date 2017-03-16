import React, { Component } from 'react';


// COMPONENTS
import LanguageList from './language_list'
import ActiveLanguage from './active_language'

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
