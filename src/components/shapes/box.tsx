import type { CSSProperties } from "react";

function Box(){
    const boxStyles: CSSProperties = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
    };
    return (
        <div style={boxStyles}></div>
    )
}

export default Box;