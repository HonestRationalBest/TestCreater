import React from "react";

import NavBarAdmin from "../components/NavBarAdmin";
import TopNavBarAdmin from "../components/TopNavBarAdmin";
import TopicEdit from "../components/TopicEdit";

import style from "../static/style/Theory.module.sass"
import { JsxChild } from "typescript";
import ModesTheory from "../components/ModesTheory";

const TheoryWatch = () => {

    //TODO добавление файлов

    const arr:Array<any> = [1,2,3]

    const elemTopic = arr.map(()=>{
        return <TopicEdit />
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
                <button className={style.new_section} >
                    добавить
                </button>
                </div>
           
            </div>
        </div>
    );
}

export default TheoryWatch;