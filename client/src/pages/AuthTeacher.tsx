import React, {useState, useContext} from "react";

import Header from "../components/Header";
import { Input } from '@material-ui/core';
import { useHttp } from "../hooks/useHttp";
import { AuthContext } from "../context/AuthContext";

import person from "../static/img/person.svg";
import lock from '../static/img/lock.svg'

import style from '../static/style/Home_and_Auth.module.sass';


const AuthTeacher:React.FC = () => {


    const auth = useContext(AuthContext)

    const { request } = useHttp();

    const [form, setForm] = useState({
        name: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        emailErr: "",
        passwordErr: "",
    })

    const changeHandler:Function = (event:any) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async () => {
        request('api/auth/login_admin', 'POST', { ...form }).then((res)=>{
            auth.login(res.userId)
        })
    }

    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.container}>
                <div className={style.form}>
                    <h1>Добро пожаловать!</h1>
                    <label>
                        <div className={style.input_wrapper}>
                            <Input 
                            placeholder="введите логин"
                            required autoFocus  
                            id="name" 
                            name="name"
                            onChange={(e)=>changeHandler(e)}
                            />
                            <img src={person} alt="person" className={style.icon} />
                        </div>
                        <div className={style.input_wrapper}>
                            <Input 
                            placeholder="введите пароль" 
                            required 
                            name="password" 
                            type="password"
                            onChange={(e)=>changeHandler(e)}
                            />
                            <img src={lock} alt="person" className={style.icon} />
                        </div>
                        <div className={style.form_container}>
                            <button className={style.in} onClick={loginHandler}>войти</button>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AuthTeacher;