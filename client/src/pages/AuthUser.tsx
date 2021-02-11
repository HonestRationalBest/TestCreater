import React from "react";

import Header from "../components/Header";
import { Input } from '@material-ui/core';

import person from "../static/img/person.svg";

import style from '../static/style/Home_and_Auth.module.sass';


const AuthUser:React.FC = () => {

    

    return (
        <div className={style.wrapper}>
        <Header />
        <div className={style.container}>
            <div className={style.form}>
                <h1>Добро пожаловать!</h1>
                <label>
                    <div className={style.input_wrapper_student}>
                        <Input placeholder="введите логин" required autoFocus autoComplete="name" id="name" />
                        <img src={person} alt="person" className={style.icon} />
                    </div>
                    <div className={style.form_container}>
                        <button className={style.in} >войти</button>
                    </div>
                </label>
            </div>
        </div>
    </div>
    )
}

export default AuthUser;