import React, { useState } from 'react'
import TheoryEdit from './TheoryEdit'
import { NavLink , useHistory} from 'react-router-dom';
import axios from 'axios';

import cross from "../static/img/cross.svg";
import add_button from "../static/img/add_button.svg";


import style from "../static/style/Theory.module.sass"




const AddSectionTheory = () =>{
    //TODO вёрстка 
    const [name, setName] = useState('')
    const id:string | null = localStorage.getItem('userId')
    const history = useHistory()

    const handleSubmit = async() =>{
        await axios.post(`api/theory/add_section/${id}`, {name}, 
        {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=>{
            if(res.status === 200){
                history.push("/theoryedit")
            }
        })
    }

    return(
        <>
            <TheoryEdit/>
            <div className={style.background}></div>
            <div className={style.window}>
                <NavLink to="/theoryedit"><img src={cross} alt="cross"/></NavLink>
                <div className={style.field_wrapper}>
                    <h3>Введите название</h3>
                    <input  placeholder="введите название которое будет у файла" onChange={(e:any)=>setName(e.target.value)}/>
                </div>
                <div className={style.add_section_wrapper}>
                <button className={style.new_section} onClick={handleSubmit}>
                    добавить
                </button>
                </div>
            </div>
        </>
    );
}

export default AddSectionTheory;