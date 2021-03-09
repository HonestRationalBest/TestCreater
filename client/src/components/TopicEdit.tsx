import React, { createRef, useState } from "react";
import Book from "./Book";
import { useHttp } from "../hooks/useHttp";

import add_button from '../static/img/add_button.svg'
import close_button from '../static/img/close_button.svg'


import style from "../static/style/Topic.module.css"
import axios from "axios";

const TopicEdit = () => {

    const [file, setFile] = useState('');

    const fileRef:any = createRef()
  
    const id:string | null = localStorage.getItem('userId')

    const setFileHandler:Function = async (e:any) =>{

      setFile(e.target.files[0])
      
      const formData = new FormData();
      formData.append('file', file);
  
      const res = await axios.post(`api/theory/add_book/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res)
            // axios.post(`api/theory/add_book/${id}`,
            // {
            // }
            //   ).then( (response) => {
            //     console.log(response);
            //   })
            //   .catch( (error) =>{
            //     console.log(error);
            //  });
   }

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
            <input type="file" id="add" className={style.add_input} ref={fileRef} onChange={(e)=>setFileHandler(e)}/>
            <label htmlFor="add"><img src={add_button} alt="add_button" className={style.add_button}/></label>
            
            </div>

        </div>
    );
}

export default TopicEdit;