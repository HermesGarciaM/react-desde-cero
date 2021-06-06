import React from "react";
import withLogin from "../HOC/withLogin";

const Private = (props) => (
    <div>
        <h1>
            {props.logged ? 'Página privada' : 'No hay login'}
        </h1>
    </div>
)

export default withLogin(Private)