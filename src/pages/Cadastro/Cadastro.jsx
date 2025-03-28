import React from 'react';

import { Link } from 'react-router-dom';

const Cadastro = () => {
    return (
        <section id="login-component">
            <h1>Cadastro</h1>
            <form action="/cadastro" method="get">
                <label htmlFor="input-name">
                    Nome
                    <input type="text" id="input-name" name="name" required autoComplete='name'/>
                </label>
                <label htmlFor="input-email">
                    Email
                    <input type="email" id="input-email" name="email" required autoComplete='email'/>
                </label>
                <label htmlFor="input-password">
                    Senha
                    <input type="password" id="input-password" name="password" required autoComplete='new-password'/>
                </label>
                <label htmlFor="input-password-again">
                    Repita a senha
                    <input type="password" id="input-password-again" name="password-again" required autoComplete='new-password'/>
                </label>
                <button type="submit" id="btn-submit">Cadastrar</button>
            </form>

            <div>ou</div>
            <Link to="/login">Login</Link>
        </section>
    );
};

export default Cadastro;