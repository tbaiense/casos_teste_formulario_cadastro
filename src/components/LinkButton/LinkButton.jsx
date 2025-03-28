import React from 'react';

import './style.css';
import { Link } from 'react-router-dom';

const LinkButton = ( {filled, color, to, text} ) => {
    return (
        <Link to={to} className="link-button" style={{
            backgroundColor: filled ? color : 'none',
            borderWidth: '2',
            borderColor: !filled ? color : 'none',
        }}>{text}</Link>
    );
};

export default LinkButton;