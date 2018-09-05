import React from "react";
import { connect } from "react-redux";
import { searchRequest, searchCancel } from "../actions/searchAction";

class Search extends React.Component {
    onSearch = event => {
        event.preventDefault();
        this.props.onSearchRequest(this.refs.search.value);
    };
    render() {
        const { search } = this.props;
        return (
            <form onSubmit={this.onSearch}>
                <input type="text" placeholder="Search ..." ref="search" />
                <button>Search</button>
                <br />
                <h4>{search.keyword}</h4>
            </form>
        );
    }
}

let mapStateToProps = state => {
    return {
        search: state.search
    };
};

let mapDispatchToProps = dispatch => {
    return {
        onSearchRequest: keyword => dispatch(searchRequest(keyword)),
        onSearchCancel: () => dispatch(searchCancel())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
