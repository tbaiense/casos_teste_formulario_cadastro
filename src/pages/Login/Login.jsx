import React from "react";
import LinkButton from "../../components/LinkButton/LinkButton";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import style from "./style.module.css";
import checkEmail from "../../account/checkEmail";
import checkAccount from "../../account/checkAccount";
import imgLogin from "../Login/imageLogin.svg";
import imgLogo from "../../assets/Pronto 2.svg";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const pwd = formData.get("password");

    try {
      let errMsg;
      // Validação de email
      const regex = /^[\w.]+@\w+\.\w+(\.?\w+)*$/gi;

      if (!regex.test(email)) {
        document.getElementById("input-email").focus();
        errMsg = "formato de email inválido!";
      } else if (!(email && pwd)) {
        errMsg = "Email ou senha não pode ser vazio";
      } else if (!checkEmail(email)) {
        errMsg = "Usuário não encontrado";
      } else if (!checkAccount(email, pwd)) {
        errMsg = "Senha incorreta";
      }

      if (errMsg) {
        throw new Error(errMsg);
      }

      navigate("/home");
    } catch (err) {
      window.alert(err.message);
      return;
    }
  }
  return (
    <>
      <div>
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
        <main className={style.grid}>
          <div className={style.imagemLogin}>
            <img src={imgLogin} alt="imagemLogin" className={style.imagem} />
          </div>
          <div className={style.login}>
            <div>
              <img src={imgLogo} alt="" className={style.loginComponent} />
            </div>
            <section id="login-component" className={style.loginComponent}>
              <form onSubmit={handleSubmit} method="post">
                <label htmlFor="input-email">
                  <div className={style.inputcontainer}>
                    <FaEnvelope className={style.icon} />
                    <input
                      type="email"
                      id="input-email"
                      name="email"
                      placeholder="Email"
                      required
                      autoComplete="email"
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
                      autoComplete="current-password"
                      placeholder="Senha"
                    />
                  </div>
                </label>
                <button type="submit" id="btn-submit">
                  Entrar
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
