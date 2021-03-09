import React from 'react'
import TheoryEdit from './TheoryEdit'

import cross from "../static/img/cross.svg";
import add_button from "../static/img/add_button.svg";


import style from "../static/style/Theory.module.sass"
import { NavLink } from 'react-router-dom';

const AddSectionTheory = () =>{
    //TODO вёрстка 

    return(
        <>
            <TheoryEdit/>
            <div className={style.background}></div>
            <div className={style.window}>
                <NavLink to="/theoryedit"><img src={cross} alt="cross"/></NavLink>
                <div className={`${style.field_wrapper} ${style.first_field}`}>
                    <h3>Выберете файл</h3>
                    <input placeholder="выберете файл"/>
                    <img src={add_button}/>
                </div>
                <div className={style.field_wrapper}>
                    <h3>Введите название</h3>
                    <input  placeholder="введите название которое будет у файла"/>
                </div>
                <div className={style.add_section_wrapper}>
                <NavLink to="/theoryedit"><button className={style.new_section} >
                    добавить
                </button>
                </NavLink>
                </div>
            </div>
        </>
    );
}

export default AddSectionTheory;