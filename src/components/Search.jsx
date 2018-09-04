import React from "react";
import { connect } from "react-redux";
import { ping } from "../actions/pingPongAction";

class Search extends React.Component {
    onSearch = event => {
        event.preventDefault();
        var { dispatch } = this.props;
        dispatch({ type: "FETCH_USER", payload: this.refs.txt.value });
    };
    render() {
        const {} = this.props;
        return (
            <form onSubmit={this.onSearch}>
                <input type="text" placeholder="Add note" ref="txt" />
                <br />
                <button>Search</button>
            </form>
        );
    }
}

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
