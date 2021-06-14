import React, { Component } from 'react'
import { connect } from "react-redux";

import UserList from "../components/UserList";
import { fetchUsers } from "../redux";



class Users extends Component {
    fetchData = () => {
        this.props.fetchUsers();
    };
    componentDidMount() {
        if(this.props.users.length < 1){
            this.fetchData()
        }
    };
    render() {
        const { users, isLoading } = this.props;
        return (
            <div>
                <h2>Users</h2>
                {isLoading && <p>Loading...</p>}
                <UserList users={users} />
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
    fetchUsers: () => dispatch(fetchUsers())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Users);