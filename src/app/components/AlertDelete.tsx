import Link from 'next/link'
import styles from '../page.module.css'

interface AlertDeleteProps {
    alertCall: boolean
    onClick: ()=> void
    text: string
    action?: ()=> void
    articleTitle: string
    articleDescription: string
    articleImage : string
}

const AlertDelete:React.FC<AlertDeleteProps> = ({alertCall, onClick, text, action, articleTitle, articleDescription, articleImage}) => {    
    return(
        <div>
        {
            alertCall === true &&
            <div className={styles.alertBG}>
            <div className={`${styles.alert} ${styles.alertDeleteContainer}`}>
              <h1>{text}</h1>
              <div className={`${styles.articleData} ${styles.alertDeleteGrid}`}>
              <div className={`${styles.articleContent} ${styles.articleText}`}><h3>{articleTitle}</h3></div>
                <div className={styles.articleContent}><img src={articleImage} alt="" /></div>
                <div className={`${styles.articleContent} ${styles.articleText}`}>{articleDescription}</div>
                </div>
                <div className={styles.containerDeleteButtons}>
              <button onClick={action} className={styles.buttonArticle}>delete</button>
              <button onClick={onClick} className={styles.buttonArticle}>cancel</button>
              </div>
             </div>
          </div>
          
          
          }
    </div>)
}

export default AlertDelete