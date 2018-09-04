import React from "react";
import { connect } from "react-redux";
import {
    counterIncrease,
    counterDecrease,
    stopCounter
} from "../actions/couterAction";

class Couter extends React.Component {
    onIncrease = () => {
        this.props.onIncrease();
    };
    onDecrease = () => {
        this.props.onDecrease();
    };
    onStop = () => {
        this.props.onStop();
    };
    render() {
        const { couter } = this.props;
        return (
            <div>
                <h1>{couter}</h1>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>
                <button onClick={this.onStop}>Stop</button>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        couter: state.couter
    };
};

let mapDispatchToProps = dispatch => {
    return {
        onIncrease: () => dispatch(counterIncrease()),
        onDecrease: () => dispatch(counterDecrease()),
        onStop: () => dispatch(stopCounter())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Couter);
