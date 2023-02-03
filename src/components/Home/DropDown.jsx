//Ecommerce reviewed 2023-02-01
import React, { useState } from 'react';

import '../../css/filters.css'

const DropDown = ({ header, children }) => {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className={`filter-drop-down ${isOpen ? '' : 'closed'}`}>
            <div className="header" onClick={() => setIsOpen(!isOpen)}>
                <span>
                    {header}
                </span>
                <i className='bx bxs-chevron-down-circle'></i>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default DropDown;