import React from "react";

const withLogin = (WrappedComponent) => {
    return class WithLogin extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                logged: false
            }

            this.verifyUserLogin = this.verifyUserLogin.bind(this)
        }

        verifyUserLogin() {
            setTimeout(() => {
                const logged = Math.round(Math.random())
                this.setState({logged: logged === 1})
            })
        }

        componentDidMount() {
            this.verifyUserLogin()
        }

        render() {
            return (
                <WrappedComponent {...this.props} logged={this.state.logged}/>
            )
        }
    }
}

export default withLogin;