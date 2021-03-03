import React from "react";
import Book from "./Book";

import add_button from '../static/img/add_button.svg'
import close_button from '../static/img/close_button.svg'


import style from "../static/style/Topic.module.css"

const TopicEdit = () => {


    return (
        <div className={style.topic_wrapper}>
            <div className={style.flex_wrapper}>
                <h2>Lol</h2>
                <img src={close_button} className={style.close_button} />
            </div>  
            <div className={style.book_wrapper}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <img src={add_button} alt="add_button" className={style.add_button}/>
            </div>

        </div>
    );
}

export default TopicEdit;