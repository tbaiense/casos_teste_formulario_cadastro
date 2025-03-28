import React from 'react';

import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section id="login-component">
            <h1>Login</h1>
            <form action="/login" method="get">
                <label htmlFor="input-email">
                    Email
                    <input type="email" id="input-email" name="email" placeholder="seuemail@provedor.com" required autoComplete='email'/>
                </label>

                <label htmlFor="input-password">
                    Senha
                    <input type="password" id="input-password" name="password" required autoComplete='current-password'/>
                </label>
                <button type="submit" id="btn-submit">Entrar</button>
            </form> 
            <div>ou</div>
            <Link to="/cadastro">Cadastro</Link>
        </section>
    );
}

export default Login;