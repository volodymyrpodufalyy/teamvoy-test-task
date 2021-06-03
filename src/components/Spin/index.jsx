import React from 'react';
import "./Spin.scss";

const Spin = () => {
    return (
       <div className="spinner">
            <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
       </div>
    )
}

export default Spin
