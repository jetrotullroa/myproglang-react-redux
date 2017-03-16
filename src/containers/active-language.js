import React from 'react'
import { connect } from 'react-redux'

class ActiveLanguage extends React.Component {
  initRender() {
    return (
      <div>
        <h4>{this.props.myproglangs[0].name}</h4>
        <p><strong>Description :</strong> {this.props.myproglangs[0].description}</p>
        <p><strong>Proficiency :</strong> {this.props.myproglangs[0].proficiency} / 10</p>
      </div>
    )
  }

  selectRender() {
    return (
      <div>
        <h4>{this.props.myproglang.name}</h4>
        <p><strong>Description :</strong> {this.props.myproglang.description}</p>
        <p><strong>Proficiency :</strong> {this.props.myproglang.proficiency} / 10</p>
      </div>
    )
  }

  render() {
    const renderOption = !this.props.myproglang ? this.initRender() : this.selectRender()
    return (
      <div className="col-md-8 text-center">
        {renderOption}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myproglangs: state.myproglangs,
    myproglang: state.activeProglang
  }
}

export default connect(mapStateToProps)(ActiveLanguage)
