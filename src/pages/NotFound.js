import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h3>404 Not Found</h3>
            <p><Link to="/">Go To Home</Link></p>
        </div>
     );
}
 
export default NotFound;