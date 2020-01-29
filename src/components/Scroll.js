import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'auto', border: '5px solid black', height: '760px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;