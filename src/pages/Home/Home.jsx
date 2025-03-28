import React from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <LinkButton to="/login" text="Sair"/>
        </>
    );
};

export default Home;