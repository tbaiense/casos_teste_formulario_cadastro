import React from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';
import { Link, useNavigate } from 'react-router-dom';

import checkEmail from '../../account/checkEmail';
import checkAccount from '../../account/checkAccount';

const Login = () => {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const pwd = formData.get('password');

        try {
            let errMsg;
            // Validação de email
            const regex = /^[\w.]+@\w+\.\w+(\.?\w+)*$/gi;

            if (!regex.test(email)) {
                document.getElementById('input-email').focus();
                errMsg = 'formato de email inválido!';
            } else if (!(email && pwd)) {
                errMsg = 'Email ou senha não pode ser vazio';
            } else if (!checkEmail(email)) {
                errMsg = 'Usuário não encontrado';
            } else if (!checkAccount(email, pwd)) {
                errMsg = 'Senha incorreta';
            }

            if (errMsg) {
                throw new Error(errMsg);
            }
            
            navigate('/home');
        } catch (err) {
            window.alert(err.message);
            return;
        }
    }
    return (
        <section id="login-component">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="input-email">
                    Email
                    <input type="email" id="input-email" name="email" placeholder="seuemail@provedor.com" required autoComplete='email'/>
                </label>

                <label htmlFor="input-password">
                    Senha
                    <input type="password" id="input-password" name="password" required autoComplete='current-password'/>
                </label>
                <button type="submit" id="btn-submit" >Entrar</button>
            </form> 
            <div>ou</div>
            <LinkButton to="/cadastro" text="Cadastro"/>
        </section>
    );
}

export default Login;