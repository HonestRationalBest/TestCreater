import React, {useState, useContext} from "react";

import Header from "../components/Header";
import { Input } from '@material-ui/core';
import { useHttp } from "../hooks/useHttp";
import { AuthContext } from "../context/AuthContext";

import Lock from "../static/img/Lock.svg";
import Message from "../static/img/Message.svg";
import Profile from "../static/img/Profile.svg";

import style from '../static/style/Home_and_Auth.module.sass';
import { useHistory } from "react-router";
import axios from "axios";


const Register:React.FC = () => {

    const [login, setLogin] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    console.log(history.location.pathname)

    const registerHandler = () =>{
        
        axios.post("/api/auth/register", {history, login, name, password},
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res)
        })
    }


    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.container}>
                <div className={style.form}>
                <h1>Добро пожаловать!</h1>
                <label>
                    <div className={style.input_wrapper_student}>
                        <Input placeholder="Bведите логин" 
                        required autoFocus autoComplete="name" id="name" 
                        value={login} onChange={(e)=>setLogin(e.target.value)}/>
                        <img src={Profile} alt="person" className={style.icon} />
                    </div>
                    <div className={style.input_wrapper_student}>
                        <Input placeholder="Введите e-mail" 
                        required autoFocus autoComplete="name" id="name" 
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                        <img src={Message} alt="person" className={style.icon} />
                    </div>
                    <div className={style.input_wrapper_student}>
                        <Input placeholder="Введите пароль" 
                        required autoFocus autoComplete="name" id="name"
                        value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <img src={Lock} alt="person" className={style.icon} />
                    </div>
                    <div className={style.form_container}>
                        <button className={style.in} onClick={()=>registerHandler()}>Зарегестрироваться</button>
                    </div>
                </label>
                </div>
            </div>
        </div>
    )
}

export default Register;