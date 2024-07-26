"use client"

import Link from 'next/link'
import styles from '../../page.module.css'
import { deleteApi } from '@/app/lib/ConnectApi'
import { useState } from 'react'
import AlertDelete from '../AlertDelete'

interface ButtonsReadEditDeleteProps {
    id: number
    title: string
    idDb: string
    articleDescription: string
    articleImage : string
}

const ButtonsReadEditDelete:React.FC<ButtonsReadEditDeleteProps> = ({id, title, idDb, articleImage, articleDescription}) => {
     
    const [alert, setAlert] = useState(false)
   
     const deleteArticle = async () => {
       const response = await deleteApi(idDb); 
       
       if (response) {
        window.location.reload()
       }
    }

    const cleanedIdDb = idDb.replace(/^"|"$/g, '') 
    const cleanedTitle = title.replace(/^"|"$/g, '') 

    console.log(cleanedIdDb, typeof(cleanedIdDb))

    
    return (
        <div className={`${styles.articleContent} ${styles.containerButtonsContent}`}>
            <Link href={`/dashboard/article/${cleanedIdDb}/${cleanedTitle}`} >
            <button className={styles.buttonContent}>read</button>
            </Link>
            <Link href={`/dashboard/edit-article/${id}/${cleanedIdDb}`}>
            <button className={styles.buttonContent}>edit</button>
            </Link>
            <button className={styles.buttonContent} onClick={()=>setAlert(true)} >delete</button>
            <AlertDelete
                alertCall={alert}
                onClick={()=>setAlert(false)}
                text='Are you sure you want to eliminate this article?'
                action={()=> deleteArticle()}
                articleTitle={title}
                articleImage={articleImage}
                articleDescription={articleDescription}
/>
            </div>
    )
}


export default ButtonsReadEditDelete