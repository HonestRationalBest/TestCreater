import React, {useState} from "react";
import * as yup from 'yup';

import Header from "../components/Header";
import { makeStyles, TextField } from '@material-ui/core';

import Lock from "../static/img/Lock.svg";
import Message from "../static/img/Message.svg";
import Profile from "../static/img/Profile.svg";

import style from '../static/style/Home_and_Auth.module.sass';
import { useHistory } from "react-router";
import axios from "axios";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
    formErrors:{
        "& .MuiFormHelperText-root" :{
            color: "red"
        }
    }
  }));

interface MyFormValues {

    name: string;
    email: string;
    password: string;
 
}

interface formErrors{
    name: string;
    email: string;
    password: string;
}

const validationSchema = yup.object({
    name : yup.string().required().max(10) ,
    email : yup.string().email(),
    password : yup.string().min(6)
}) 

const Register:React.FC = () => {

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const classes = useStyles();


    const history = useHistory()

    const registerHandler = () =>{

    
        
    }
    const initialValues: MyFormValues = { name: '', email: '', password: '' };

    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.container}>
                <div className={style.form}>
                <h1>Добро пожаловать!</h1>
                <label>
                    <Formik 
                       initialValues={initialValues}

                       onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true)
                        axios.post('/api/auth/register', 
                        {history: history.location.pathname, 
                            login, email, password},
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then((res)=>{
                            setSubmitting(false)
                            console.log(res)
                        })
                       }}
                       validationSchema={validationSchema}
                    >{
                        ({values,isSubmitting, handleChange,errors, handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                    <div className={style.input_wrapper_student}>
                        <TextField placeholder="Bведите логин" 
                        required  type="text" name="name"
                        value={values.name} onChange={handleChange} helperText={errors.name} 
                        className={errors.name ? classes.formErrors: ""}/>
                        <img src={Profile} alt="person" className={style.icon} />
                    </div>
                    <div className={style.input_wrapper_student}>
                        <TextField placeholder="Введите e-mail"  
                        required  type="email" name="email"
                        value={values.email} onChange={handleChange} helperText={errors.email}
                        className={errors.email ? classes.formErrors: ""}/>
                        <img src={Message} alt="person" className={style.icon} />
                    </div>
                    <div className={style.input_wrapper_student}>
                        <TextField placeholder="Введите пароль" 
                        required type="password" name="password"
                        value={values.password} onChange={handleChange} helperText={errors.password}
                        className={errors.password ? classes.formErrors: ""}/>
                        <img src={Lock} alt="person" className={style.icon} />
                    </div>
                    <div className={style.form_container}>
                        <button className={style.in} type="submit" disabled={isSubmitting}>Зарегестрироваться</button>
                    </div>
                    </form>
                        )
                    }
                    </Formik>
                </label>
                </div>
            </div>
        </div>
    )
}

export default Register;