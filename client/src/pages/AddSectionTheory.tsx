import React from 'react'
import TheoryEdit from './TheoryEdit'

import cross from "../static/img/cross.svg";
import add_button from "../static/img/add_button.svg";


import style from "../static/style/Theory.module.sass"

const AddSectionTheory = () =>{
    //TODO вёрстка 

    return(
        <>
            <TheoryEdit/>
            <div className={style.background}></div>
            <div className={style.window}>
                <img src={cross} alt="cross"/>
                <div className={`${style.field_wrapper} ${style.first_field}`}>
                    <h3>Выберете файл</h3>
                    <input placeholder="Выберете файл"/>
                    <img src={add_button}/>
                </div>
                <div className={style.field_wrapper}>
                    <h3></h3>
                    <input/>
                </div>
            </div>
        </>
    );
}

export default AddSectionTheory;