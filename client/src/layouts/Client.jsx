import React from 'react';
import '../bootstrap.min.css';

const Client = ({children}) => {
    return (
        <>

            <div className="main">
                {children}
            </div>
        </>
    );
};

export default Client;