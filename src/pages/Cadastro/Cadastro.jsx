import React from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import ModalMensagem from '../../components/ModalMensagem/ModalMensagem';
import { accounts, appendAccount } from '../../account/accounts'
const Cadastro = () => {
    const navigate = useNavigate();
    
    const [ errorState, setErrorState ] = useState({
        state: false,
        message: undefined,
    });


    function handleSubmit(e) {
        e.preventDefault(); // SubmitEvent.preventDefault()
        const form = e.target;

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const pwd = formData.get("password");
        const pwdAgain = formData.get("password-again");

        setErrorState({
            state: false,
            message: undefined,
        })
        

        try {
            let errMsg;
            // Verifica campos vazios
            if (!(name && email && pwd && pwdAgain)) {
                errMsg = 'Nenhum campo pode estar vazio!';
            } else if (name.length < 3) {
                errMsg = 'nome deve conter 3 ou mais caracteres';
            } else if (pwd.length < 8 || pwd.length > 32) {
                errMsg = 'senhas possuem tamanho inválido (> 8 e < 32)!';
            } else if (pwd !== pwdAgain) {
                errMsg = 'senhas não coincidem!';
            } else {
                // Validação de email
                const regex = /^[\w.]+@\w+\.\w+(\.?\w+)*$/gi;
        
                if (!regex.test(email)) {
                    document.getElementById('input-email').focus();
                    errMsg = 'formato de email inválido!';
                }
            }

            if (errMsg) {
                throw new Error(errMsg);
            }

            appendAccount(email, pwd);
            navigate('/login');
        } catch (err) {
            setErrorState({
                state: true,
                message: err.message,
            });
            window.alert(err.message);
        }
    }

    return (
        <section id="login-component" className="cabecalho">
            {/* {errorState.state && <ModalMensagem message={errorState.message}/>} */}
            <h1>Cadastro</h1>
            <form method="post" onSubmit={handleSubmit}>
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
            <LinkButton to="/login" text="Login"/>
        </section>
    );
};

export default Cadastro;