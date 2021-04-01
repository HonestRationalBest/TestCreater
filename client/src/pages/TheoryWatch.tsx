import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import NavBarAdmin from "../components/NavBarAdmin";
import TopicEdit from "../components/TopicEdit";
import ModesTheory from "../components/ModesTheory";

import style from "../static/style/Theory.module.sass"
import axios from "axios";
import { setSection } from "../redux/actions/SET_SECTION";
import TopPanel from "../components/TopPanel";


const TheoryWatch = () => {

    //TODO добавление файлов

    const sections:any= useSelector<any>(state => state.theory.section)
    const dispatch = useDispatch()
    const id:string | null = localStorage.getItem('userId')

    const arr= [1,2]
    useEffect(() => {
        axios.get(`/api/theory/get_sections/${id}`).then((res)=>{
            dispatch(setSection(res.data))
        })
    }, [])

    console.log(sections)

    return (
        <div className={style.wrapper}>
            <NavBarAdmin />
            <div className={style.content_wrapper}>
                <TopPanel modes={"theory"} />
                <div className={style.materials_wrapper}>
                {typeof (sections === Array) ? 
                sections.map((el:any)=>{
                    return <TopicEdit sectionId={el._id} key={el._id} sectionName={el.name}/>
                })
                :
                <div></div>
                }
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