import { connect } from "react-redux";
import { fetchUsers, resetUser, addUser } from "../Users/redux";
import React, { Component } from 'react'


class Home extends Component {
    fetchData = () => {
        this.props.fetchUsers();
    };

    resetUsers = () => {
        this.props.resetUser();
    }
    addNewUser = () => {
        this.props.addUser();
    }
    render() {
        return (
            <div>
            <h2>Home</h2>
            <button onClick={this.fetchData}>Reload</button>
            <button onClick={this.resetUsers}>Reset</button>
            <button onClick={this.addNewUser}>Add</button>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    resetUser: () => dispatch(resetUser()),
    addUser: () => dispatch(addUser())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Home);