import type { CSSProperties } from "react";

function Triangle({index, removeShape}: {index: number, removeShape: (index: number) => void}){
    const triangleStyles: CSSProperties = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    };
    return (
        <div style={triangleStyles} onClick={() => removeShape(index)}>{index}</div>
    )
}

export default Triangle;
