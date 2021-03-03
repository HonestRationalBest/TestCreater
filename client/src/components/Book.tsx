import React from "react";

import close_book from '../static/img/close_book.svg'


import style from "../static/style/Cards.module.sass"

const Book = () => {


    return (
        <div className={style.book_wrapper}>
            <img src={close_book} alt="close_book"/>
            <p>Name</p>
        </div>
    );
}

export default Book;