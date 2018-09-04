import React from "react";
import { connect } from "react-redux";
import { ping } from "../actions/pingPongAction";

class PingPong extends React.Component {
    onPing = () => {
        this.props.onPing();
    };
    render() {
        const { pingpong } = this.props;
        return (
            <div>
                <h1>is pinging: {pingpong.isPinging.toString()}</h1>
                <button onClick={this.onPing}>Start PING</button>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        pingpong: state.pingpong
    };
};

let mapDispatchToProps = dispatch => {
    return {
        onPing: () => dispatch(ping())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PingPong);
