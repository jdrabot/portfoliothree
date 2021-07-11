import React from "react";

function Wrapper(props) {
    return (
        <div className="wrapper"
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "600px" }}>
            {props.children}
        </div>
    )
}

export default Wrapper;