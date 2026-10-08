import type { CSSProperties } from "react";

function NavMenu() {
    const navStyles: CSSProperties = {
        width: '100%',
    };
    const navListStyles: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        listStyle: 'none',
    };
    return (
    <nav id="nav" style={navStyles}>
        <ul style={navListStyles}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>)
}

export default NavMenu;
