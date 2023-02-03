import React from 'react';
import '../css/loading-screen.css';

const LoadingScreen = () => {
    return (
        <div className='loading-screen'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingScreen;