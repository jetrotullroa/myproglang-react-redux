import React from 'react'
import { connect } from 'react-redux'
import { selectLang } from '../actions/index'
import { bindActionCreators} from 'redux'


class LanguageList extends React.Component {

  renderList() {
    return this.props.myproglangs.map((myproglang) => {
      return (
        <li
          onClick={() => this.props.selectLang(myproglang)}
          key={myproglang.name}
          className="list-group-item">
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectLang: selectLang }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LanguageList)
