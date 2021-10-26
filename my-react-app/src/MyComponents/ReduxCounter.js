import React, { Component } from 'react';
import {connect} from 'react-redux';

class ReduxCounter extends Component {
    add = () => {
        this.props.dispatch({type: "ADD"});
    };
    subtract = () => {
        this.props.dispatch({type: "SUB"});
    };

    render() {
        return (
            <div>
                <p>Count: {this.props.count}</p>
                <button onClick={() => this.add()}>Add</button> 
                <button onClick={() => this.subtract()}>Subtract</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.simpleRedux.count
});

export default connect(mapStateToProps)(ReduxCounter)