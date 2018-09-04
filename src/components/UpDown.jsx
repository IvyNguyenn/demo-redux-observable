import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../actions/updownAction";

class UpDown extends React.Component {
    onIncrease = () => {
        this.props.onIncrease();
    };
    onDecrease = () => {
        this.props.onDecrease();
    };
    render() {
        const { updown } = this.props;
        return (
            <div>
                <h1>{updown}</h1>
                <button onClick={this.onIncrease}>UP</button>
                <button onClick={this.onDecrease}>DOWN</button>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        updown: state.updown
    };
};

let mapDispatchToProps = dispatch => {
    return {
        onIncrease: () => dispatch(increase()),
        onDecrease: () => dispatch(decrease())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpDown);
