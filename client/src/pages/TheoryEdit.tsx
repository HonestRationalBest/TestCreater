import React from "react";
import { NavLink } from "react-router-dom";

import NavBarAdmin from "../components/NavBarAdmin";
import TopicEdit from "../components/TopicEdit";
import ModesTheory from "../components/ModesTheory";

import style from "../static/style/Theory.module.sass"

const TheoryEdit = () => {

    //TODO добавление файлов

    const arr:Array<any> = [1,2,3]

    const elemTopic = arr.map((el)=>{
        return <TopicEdit key={el}/>
    })

    return (
        <div className={style.wrapper}>
            <NavBarAdmin />
            <div className={style.content_wrapper}>
                <ModesTheory />
                <div className={style.materials_wrapper}>
                {elemTopic}
                </div>
                <div className={style.new_section_wrapper}>
                <NavLink to="/add_section_theory"><button className={style.new_section} >
                    добавить
                </button>
                </NavLink>
                </div>
           
            </div>
         
        </div>
    );
}

export default TheoryEdit;