import type { CSSProperties } from "react";

function Circle({index, removeShape}: {index: number, removeShape: (index: number) => void}){
    const circleStyles: CSSProperties = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        borderRadius: '50%',
    };
    return (
        <div style={circleStyles} onClick={() => removeShape(index)}>{index}</div>
    )
}

export default Circle;
