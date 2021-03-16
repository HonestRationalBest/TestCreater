import React, { useEffect, useState } from "react";
import Book from "./Book";
import { useHttp } from "../hooks/useHttp";
import { setSection } from "../redux/actions/SET_SECTION";
import { useSelector, useDispatch } from "react-redux";

import add_button from '../static/img/add_button.svg'
import close_button from '../static/img/close_button.svg'


import style from "../static/style/Topic.module.css"
import axios from "axios";

const TopicEdit:React.FC<{sectionId: string, sectionName: string}> = ({sectionId, sectionName}) => {

  //TODO баг с добавлением элемента в клаудинари

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [reload, setReload] = useState(false)
    const id:string | null = localStorage.getItem('userId')

    useEffect(() => {
      
    }, [reload])

    const setFileHandler:Function = async (e:any) =>{

      setFile(e.target.files[0])

      await uploadFile()
    }

   const uploadFile = async () =>{

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', "dev_setups");

    axios.post("https://api.cloudinary.com/v1_1/ds8hydjea/image/upload", formData).then((res)=>{
      console.log(res)
      setFileUrl(res.data.url)
      setFileName(res.data.original_filename)
      formData.delete('upload_preset')
    })

    try{
      const res = await axios.post(`api/theory/add_book/${id}`, {fileName, fileUrl}, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      console.log(res)
    }catch(e){
      console.log(e)
    }

   }

   const handleDelete = async () =>{

    axios.delete(`/api/theory/delete_section/${sectionId}`,).then((res)=>{
      console.log(res)
      setReload(!reload)
    })
    
   }

    return (
        <div className={style.topic_wrapper}>
            <div className={style.flex_wrapper}>
                <h2>{sectionName}</h2>
                <img src={close_button} className={style.close_button} onClick={handleDelete}/>
            </div>  
            <div className={style.book_wrapper}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <input type="file" id="add" className={style.add_input} onChange={(e)=>setFileHandler(e)}/>
            <label htmlFor="add"><img src={add_button} alt="add_button" className={style.add_button}/></label>
            
            </div>

        </div>
    );
}

export default TopicEdit;