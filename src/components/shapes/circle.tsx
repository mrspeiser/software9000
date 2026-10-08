import type { CSSProperties } from "react";

function Circle(){
    const circleStyles: CSSProperties = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        borderRadius: '50%',
    };
    return (
        <div style={circleStyles}></div>
    )
}

export default Circle;