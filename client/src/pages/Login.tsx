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


const Login:React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const auth = useContext(AuthContext)

    const loginHandler = () =>{

        axios.post('/api/auth/login', 
        {history: history.location.pathname, 
            email, password},
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            console.log(res)
            auth.login(res.data.token, res.data.userId)
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
                        <Input placeholder="Введите e-mail" required value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                        <img src={Message} alt="person" className={style.icon} />
                    </div>
                    <div className={style.input_wrapper_student}>
                        <Input placeholder="Введите пароль" required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                        <img src={Lock} alt="person" className={style.icon}  />
                    </div>
                    <div className={style.form_container}>
                        <button className={style.in} onClick={()=>loginHandler()}>Войти</button>
                    </div>
                </label>
                </div>
            </div>
        </div>
    )
}

export default Login;