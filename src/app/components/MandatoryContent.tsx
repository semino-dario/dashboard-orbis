"use client"

import styles from "../page.module.scss"
import Description from "./article-elements/Description"
import Title from "./article-elements/Title"
import ImageLoader from "./ImageLoader"

interface MandatoryContentProps{
    mainTitleContent?: string
    setMainTitleContent: React.Dispatch<React.SetStateAction<string>>
    mainImageContent: string
    setMainImageContent: React.Dispatch<React.SetStateAction<string>>
    descriptionContent: string
    setDescriptionContent: React.Dispatch<React.SetStateAction<string>>
  }


const MandatoryContent:React.FC<MandatoryContentProps> = ({mainTitleContent="", mainImageContent, setMainImageContent, setMainTitleContent, descriptionContent, setDescriptionContent}) => {
  

  return (
        <div className={styles.containerMandatoryContent}>
        <div>
          <h3>Main Title</h3>
      <Title
            subTitle={false}
             titleContent={mainTitleContent}
             onChange={(value) => {setMainTitleContent(value)}}
             maxCharacters={70}
             />
             </div>
      <div>
      <h3>Main image</h3>
      <ImageLoader
      imageContent={mainImageContent}
      onChange={(value:string ) => {setMainImageContent(value)}}
            />
      </div>
      <div>
        <h3>Description</h3>
        <Description
        textContent={descriptionContent}
        onChange={(value)=> setDescriptionContent(value)}
        />      
      </div>
      </div>

    )
}

export default MandatoryContent