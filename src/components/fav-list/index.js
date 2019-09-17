import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";

class FavList extends Component {
  render() {
    return (
      <div>
        <p>Favorite List</p>
        <p>{this.props.age}</p>
        <button type="button" onClick={this.props.INCREMENT}>
          INCREMENT
        </button>
        <button type="button" onClick={this.props.DECREMENT}>
          DECREMENT
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    INCREMENT: () => dispatch({ type: "INCREMENT" }),
    DECREMENT: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavList);
