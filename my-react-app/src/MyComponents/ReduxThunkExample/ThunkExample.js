import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./actions";
import logo from "./logo.gif";

class ThunkExample extends Component {
    render() {
        return (
            <div>
                <p>Count: {this.props.count1}</p>
                <button onClick={() => this.props.onAdd()}>Add</button> 
                <button onClick={() => this.props.onSubtract()}>Subtract</button>
                {this.props.loading && <img src={logo} className="App-logo"/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count1: state.reduxThunk.count1,
        loading: state.reduxThunk.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdd: () => dispatch(actionCreator.add(1)),
        onSubtract: ()=> dispatch(actionCreator.sub(1))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThunkExample);