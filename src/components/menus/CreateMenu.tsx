import type { CSSProperties } from 'react'

function CreateMenu({addShape}: {addShape: (shape: string) => void}) {
    const menuStyles: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
    };

    const wrapperStyles: CSSProperties = {
        position: 'fixed' as const,
        bottom: 10,
        left: 0,
        width: '100%',
        zIndex: 1000
    };

    return (
        <section style={wrapperStyles} 
            id="create-menu-wrapper" className="center">
            <div id="create-menu" style={menuStyles}>
                <div className="button-wrapper">
                    <button className="button" onClick={() => addShape('box')}>
                        <span className="">Add Box</span>
                    </button>
                </div>
                <div className="button-wrapper">
                    <button className="button" onClick={() => addShape('circle')}>
                        <span className="">Add Circle</span>
                    </button>
                </div>
                <div className="button-wrapper">
                    <button className="button" onClick={() => addShape('triangle')}>
                        <span className="">Add Triangle</span>
                    </button>
                </div>
                <div className="button-wrapper">
                    <button className="button" onClick={() => addShape('line')}>
                        <span className="">Add Line</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CreateMenu;