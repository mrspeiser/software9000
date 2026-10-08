import type { CSSProperties } from "react";

function Triangle(){
    const triangleStyles: CSSProperties = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    };
    return (
        <div style={triangleStyles}></div>
    )
}

export default Triangle;