"use client"

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import ButtonsCreateArticle from "./buttons/ButtonsDynamicContent";
import MandatoryContent from "./MandatoryContent";
import DynamicContent from "./DynamicContent";
import ButtonsPublishPreview from "./buttons/ButtonsPublishPreview";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { writeImageUrl } from "../store/slice";

interface CreateArticleProps{
  mainTitle: string
  mainImage: string
  description: string
  idDb: string
  dynamicContent: any[]
  images?: any[]
}



const CreateArticle:React.FC<CreateArticleProps> = ({mainTitle, mainImage, description, dynamicContent, idDb, images})=> {
const [blockStates, setBlockStates] = useState<any[]>(dynamicContent);
const [mainTitleContent, setMainTitleContent] = useState(mainTitle)
const image = useSelector((state:RootState)=> state.data.imageUrl )
const [mainImageContent, setMainImageContent] = useState(image)
const [descriptionContent, setDescriptionContent] = useState(description)
const article = {} 
const articlePreview = {}
const dispatch = useDispatch()

console.log(image)


  return(
    <div className={styles.containerCreateArticle}>     
      <form className={styles.containerContent}>
        <h2>Mandatory content</h2>
        <hr />
        <MandatoryContent 
          mainTitleContent={mainTitleContent}
          setMainTitleContent={setMainTitleContent}
          mainImageContent={mainImageContent}
          setMainImageContent={setMainImageContent}
          descriptionContent={descriptionContent}
          setDescriptionContent={setDescriptionContent}
        />
        {/* <input type="text" value={image} onChange={(e)=> {dispatch(writeImageUrl(e.target.value)), console.log(image)} } /> */}
       <br /> 
       <h2>Dynamic Content</h2>
       <hr /> <br />
       <DynamicContent
          blockStates={blockStates}
          setBlockStates={setBlockStates}
        />
</form>

<div className={styles.containerButtons}>
          <ButtonsPublishPreview
            blockStates={blockStates}
            mainTitleContent={mainTitleContent}
             mainImageContent={image}
            descriptionContent={descriptionContent}
            article={article}
            articlePreview={articlePreview}
            idDb={idDb}
          />
          <div>
          <h3>Add Content:</h3>
        <ButtonsCreateArticle 
          blockStates={blockStates}
          setBlockStates={setBlockStates} />
       </div>
      </div>
   </div>
  )
}

export default CreateArticle

