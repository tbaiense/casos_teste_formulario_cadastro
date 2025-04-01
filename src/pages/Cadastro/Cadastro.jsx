import React from "react";
import LinkButton from "../../components/LinkButton/LinkButton";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import style from "./style.module.css";
import { useState } from "react";
import ModalMensagem from "../../components/ModalMensagem/ModalMensagem";
import { accounts, appendAccount } from "../../account/accounts";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";


const Cadastro = () => {
  const navigate = useNavigate();

  const [errorState, setErrorState] = useState({
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
    });

    try {
      let errMsg;
      // Verifica campos vazios
      if (!(name && email && pwd && pwdAgain)) {
        errMsg = "Nenhum campo pode estar vazio!";
      } else if (name.length < 3) {
        errMsg = "nome deve conter 3 ou mais caracteres";
      } else if (pwd.length < 8 || pwd.length > 32) {
        errMsg = "senhas possuem tamanho inválido (> 8 e < 32)!";
      } else if (pwd !== pwdAgain) {
        errMsg = "senhas não coincidem!";
      } else {
        // Validação de email
        const regex = /^[\w.]+@\w+\.\w+(\.?\w+)*$/gi;

        if (!regex.test(email)) {
          document.getElementById("input-email").focus();
          errMsg = "formato de email inválido!";
        }
      }

      if (errMsg) {
        throw new Error(errMsg);
      }

      appendAccount(email, pwd);
      navigate("/login");
    } catch (err) {
      setErrorState({
        state: true,
        message: err.message,
      });
      window.alert(err.message);
    }
  }

  return (
    <>
      <header className={style.cabecalho}>
        <div>
          <Link to="/">
            <img src={logoImg} alt="Logo" className={style.logo} />
          </Link>
        </div>
        <div id="user-buttons" className={style.botoes}>
          <LinkButton to="/login" text="Login" />
          <LinkButton to="/cadastro" text="Cadastro" />
        </div>
      </header>
      <div className={style.intro}>
        <h1>Crie sua conta</h1>
        <p>Preencha seus dados</p>
      </div>
      <div id="login-component" className={style.form}>
        {/* {errorState.state && <ModalMensagem message={errorState.message}/>} */}
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="input-name">
            <div className={style.inputcontainer}>
            <FaUser className={style.icon} />
              <input
                type="text"
                id="input-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Nome"
              />
            </div>
          </label>
          <label htmlFor="input-email">
            <div className={style.inputcontainer}>
              <FaEnvelope className={style.icon} />
              <input
                type="email"
                id="input-email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email"
              />
            </div>
          </label>
          <label htmlFor="input-password">
            <div className={style.inputcontainer}>
              <FaLock className={style.icon} />
              <input
                type="password"
                id="input-password"
                name="password"
                required
                autoComplete="new-password"
                placeholder="Senha"
              />
            </div>
          </label>
          <label htmlFor="input-password-again">
            <div className={style.inputcontainer}>
            <FaLock className={style.icon} />
              <input
                type="password"
                id="input-password-again"
                name="password-again"
                required
                autoComplete="new-password"
                placeholder="Repetir senha"
              />
            </div>
          </label>
          <button type="submit" id="btn-submit">
            Cadastrar
          </button>
        </form>
        <div>OU</div>
        <LinkButton to="/login" text="Login" />
      </div>
    </>
  );
};

export default Cadastro;
