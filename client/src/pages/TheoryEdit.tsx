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

const TheoryEdit = () => {

    //TODO отображение удалённого файла


    const sections:any= useSelector<any>(state => state.theory.section)
    const dispatch = useDispatch()
    const id:string | null = localStorage.getItem('userId')

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
                <TopPanel modes={"theory"}/>
                <div className={style.materials_wrapper}>
                {sections.map((el:any)=>{
                    return <TopicEdit sectionId={el._id} key={el._id} sectionName={el.name}/>
                })}
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