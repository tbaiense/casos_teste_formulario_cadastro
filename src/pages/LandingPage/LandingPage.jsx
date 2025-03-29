import React from 'react';
import logoImg from '../../assets/logo.svg';
import sideImg from '../../assets/side.png';
import { Link } from 'react-router-dom';
import LinkButton from '../../components/LinkButton/LinkButton';
import style from './style.module.css';

const LandingPage = () => {
    return (
        <div>
            <header className={style.cabecalho}>
                <div>
                    <img src={logoImg} alt="Logo" className={style.logo}/>
                </div>
                <div id="user-buttons" className={style.botoes}>
                    <LinkButton to="/login" text="Login"/>
                    <LinkButton to="/cadastro" text="Cadastro"/>
                </div>
            </header>
            <main className={style.conteudo}>
                <section className={style.introducao}>
                    <h1>Seus dados, nossa prioridade</h1>
                    <p>Na TechSecure, sua privacidade é nossa prioridade. Com tecnologia avançada, protegemos seus dados contra ameaças. Confie em quem garante sua segurança.</p>
                    <LinkButton to="/cadastro" text="Cadastro"/>
                </section>
                <div>
                    <img src={sideImg} alt="Imagem de um segurança ao lado de um computador" className={style.imagem}/>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;