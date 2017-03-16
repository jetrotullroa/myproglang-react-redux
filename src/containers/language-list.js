import React from 'react'
import { connect } from 'react-redux'

class LanguageList extends React.Component {

  renderList() {
    return this.props.myproglangs.map((myproglang) => {
      return (
        <li className="list-group-item">
          {myproglang.name}
        </li>
      )
    })
  }

  render() {
    return (
      <div className="col-md-4">
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myproglangs: state.myproglangs
  }
}


export default connect(mapStateToProps)(LanguageList)
