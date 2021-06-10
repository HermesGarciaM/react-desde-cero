import React from "react";

const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends React.Component {

        render() {
            return this.props[propValue].length === 0
                ? <h1>Cargando...</h1>
                : <WrappedComponent {...this.props} />
        }

    }
}

export default withLoader