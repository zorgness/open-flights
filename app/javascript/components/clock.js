import React from "react";
import ReactDom from "react-dom";
import htm from "htm";

const h = htm.bind(React.createElement);

ReactDom.render(
    h`
        <div>lol</div>
    `,
    document.getElementById("root")
)