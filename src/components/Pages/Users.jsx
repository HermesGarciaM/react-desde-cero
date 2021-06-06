import React from "react";
import axios from "axios";
import UsersGrid from "../Organisms/UsersGrid";

class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }

    render() {
        const {users} = this.state
        return <UsersGrid users={users} />
    }
}

export default Users