import React from "react";
import { connect } from "react-redux";
import { fetchUser, cancelRequest } from "../actions/userAction";

class User extends React.Component {
    onFetchUser = () => {
        this.props.onFetchUser(this.refs.txt.value);
    };
    onCancelReques = () => {
        this.props.onCancelReques();
    };
    render() {
        const { users } = this.props;
        return (
            <div>
                <input type="text" placeholder="" ref="txt" />
                <button onClick={this.onFetchUser}>Fetch users</button>
                <button onClick={this.onCancelReques}>Cancel</button>
                <p>{users.userId}</p>
                <p>{users.name}</p>
                <p>{users.email}</p>
                <p>{users.payload}</p>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        users: state.users
    };
};

let mapDispatchToProps = dispatch => {
    return {
        onFetchUser: name => dispatch(fetchUser(name)),
        onCancelReques: () => dispatch(cancelRequest())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
