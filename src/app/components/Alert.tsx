import styles from '../page.module.css'

interface AlertProps {
    alertCall: boolean
    onClick: ()=> void
    text: string
}

const Alert:React.FC<AlertProps> = ({alertCall, onClick, text}) => {    
    return(
        <div>
        {
            alertCall === true &&
            <div className={styles.alertBG}>
            <div className={styles.alert}>
              <div>
            <h3>{text}</h3>
            <button onClick={onClick} className={styles.buttonArticle}>close</button>
             </div>
          </div>
          </div>
          
          
          }
    </div>)
}

export default Alert