import React from 'react';

import './style.css';
import { Link } from 'react-router-dom';

const LinkButton = ( {to, text} ) => {
    return (
        <Link to={to} className="link-button">{text}</Link>
    );
};

export default LinkButton;