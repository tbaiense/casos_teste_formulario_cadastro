import React from 'react';

import logoImg from '../../assets/logo.svg';
import sideImg from '../../assets/side.png';
import { Link } from 'react-router-dom';
import LinkButton from '../../components/LinkButton/LinkButton';

const LandingPage = () => {
    return (
        <>
            <header>
                <div>
                    <img src={logoImg} alt="Logo" id="logo"/>
                </div>
                <div id="user-buttons">
                    <LinkButton to="/login" filled={true} text="Login"/>
                    <LinkButton to="/cadastro" filled={true} text="Cadastro"/>
                </div>
            </header>
            <main>
                <section>
                    <h1>Seus dados, nossa prioridade</h1>
                    <p>Na TechSecure, sua privacidade é nossa prioridade. Com tecnologia avançada, protegemos seus dados contra ameaças. Confie em quem garante sua segurança.</p>
                </section>
                <div>
                    <img src={sideImg} alt="Imagem de um segurança ao lado de um computador" />
                </div>
                <LinkButton to="/cadastro" text="Cadastro" filled={false} color="blue"/>
            </main>
        </>
    );
};

export default LandingPage;