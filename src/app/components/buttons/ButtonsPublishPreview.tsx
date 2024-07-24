"use client"
import Link from "next/link"
import styles from "../../page.module.css"
import {  postApi, putApi } from "../../api/ConnectApi"
import { useEffect, useState } from "react"
import Alert from "../Alert"


interface ButtonsPublishPreviewProps {
    blockStates: any[]
    article: any
    mainTitleContent: string
    mainImageContent: string
    descriptionContent: string
    articlePreview: any
    idDb:string
}

const ButtonsPublishPreview:React.FC<ButtonsPublishPreviewProps> = ({blockStates, article, mainTitleContent, mainImageContent, descriptionContent, articlePreview, idDb}) => {
  const [alert, setAlert] = useState(false)
  const [target, setTarget] = useState("")
  const [hrefPreview, setHrefPreview ] = useState("")
  const [hrefArticle, setHrefArticle ] = useState("")

  const createArticle =  () => {
    const mainTitle = {mainTitle: mainTitleContent}
    const mainImage = {mainImage: mainImageContent}
    const description = {description: descriptionContent}
    
    blockStates.unshift(mainTitle, mainImage, description )
     article.article = blockStates
    
    return article}
    
   const publishArticle = () => {
      if (hrefArticle === '')
        { setAlert(true) }
      else {
        createArticle()
        postApi(article)
      }
        }
 
        
      const editArticle = () => {
        if (hrefArticle === ''){
          setAlert(true)
       }
         else {
           createArticle()
            putApi( idDb, article)
        }
      }

      const preview = () => {
        const mainTitle = {mainTitle: mainTitleContent}
        const mainImage = {mainImage: mainImageContent}
        const description = {description: descriptionContent}
       if (hrefPreview === ''){
        setAlert(true)
       }
       else{

        let blockStatesPreview = [...blockStates]
        blockStatesPreview.unshift(mainTitle, mainImage, description )
        articlePreview.article =  blockStatesPreview
        localStorage.clear()
        localStorage.setItem("article", JSON.stringify(articlePreview))}
      }
      useEffect(() => {
        if (mainTitleContent && mainImageContent && descriptionContent) {
           setHrefPreview('/dashboard/preview')
           setTarget('_blank')
           setHrefArticle('/dashboard/response')
        } else {
          setHrefPreview('')
          setTarget('')
          setHrefArticle('')
        }
    }, [mainTitleContent, mainImageContent, descriptionContent]);

      return(
    <div className={styles.buttonsPublishPreview}>
         <Link  href={hrefPreview}   target={target} > 
          <button className={`${styles.buttonArticle} ${styles.publish}`} onClick={()=>preview()}>Preview</button>
         </Link>   
        <Link href={hrefArticle}> {idDb === "" ?
            <button className={`${styles.buttonArticle} ${styles.publish}`} onClick={publishArticle}>Publish</button>
            :
            <button className={`${styles.buttonArticle} ${styles.publish}`} onClick={editArticle}>Edit</button>
          }</Link>

          <Alert
            alertCall={alert}
            onClick={() => setAlert(false)}
            text="You must fill MANDATORY CONTENT for publish or preview."
          />
    </div>
      )
}

export default ButtonsPublishPreview