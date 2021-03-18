import React, {useState, useContext} from "react";

import Header from "../components/Header";
import { Input } from '@material-ui/core';
import { useHttp } from "../hooks/useHttp";
import { AuthContext } from "../context/AuthContext";

import Lock from "../static/img/Lock.svg";
import Message from "../static/img/Message.svg";
import Profile from "../static/img/Profile.svg";

import style from '../static/style/Home_and_Auth.module.sass';


const Register:React.FC = () => {

    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.container}>
                <div className={style.form}>
                <h1>Добро пожаловать!</h1>
                <label>
                    <div className={style.input_wrapper_student}>
                        <Input placeholder="Bведите логин" required autoFocus autoComplete="name" id="name" />
                        <img src={Profile} alt="person" className={style.icon} />
                    </div>
                    <div className={style.input_wrapper_student}>
                        <Input placeholder="Введите e-mail" required autoFocus autoComplete="name" id="name" />
                        <img src={Message} alt="person" className={style.icon} />
                    </div>
                    <div className={style.input_wrapper_student}>
                        <Input placeholder="Введите пароль" required autoFocus autoComplete="name" id="name" />
                        <img src={Lock} alt="person" className={style.icon} />
                    </div>
                    <div className={style.form_container}>
                        <button className={style.in} >Зарегестрироваться</button>
                    </div>
                </label>
                </div>
            </div>
        </div>
    )
}

export default Register;