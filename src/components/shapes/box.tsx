import type { CSSProperties } from "react";

function Box({index, removeShape}: {index: number, removeShape: (index: number) => void}){
    const boxStyles: CSSProperties = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
    };
    return (
        <div 
            style={boxStyles}
            onClick={() => removeShape(index)}>
                {index}
        </div>
    )
}

export default Box;
