import styles from '../../../page.module.scss'

interface TitleProps {
    titleContent: string;
    onChange: ((value:any) => void);
    subTitle: boolean
    onDelete?: (e:any) => void;
    maxCharacters: number
  }

const Title: React.FC<TitleProps>  =  ( {titleContent="", onChange, subTitle, onDelete, maxCharacters}) => {

 let maxLength = false

  if (titleContent.length > maxCharacters){
    titleContent = titleContent.substring(0, maxCharacters)
    maxLength = true
  }

    return(
        <div className={`${subTitle === true && styles.marginArticleElements }`} >
        <input className={`${styles.textarea} ${styles.mainTitle}`} placeholder={subTitle ? `Enter subtitle here. Max ${maxCharacters} characters` : `Max ${maxCharacters} characters`} value={titleContent} onChange={(e)=>onChange(e.target.value)}/>
        {maxLength ?
        <h4 style={{color:'red'}}>Max {maxCharacters} characters!!!</h4>
        :
        <></>
      } 
      </div>
     
    )
}

export default Title