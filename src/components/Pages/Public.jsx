import React from "react";
import withLogin from "../HOC/withLogin";
import SquareFiles from "../Atoms/SquareFiles";
import CircleFiles from "../Atoms/CircleFiles";

const Public = (props) => (
    <div className="ed-grid">
        <h1>Página pública</h1>
        <SquareFiles />
        <CircleFiles />
    </div>
)

export default withLogin(Public)