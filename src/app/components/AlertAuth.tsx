import styles from '../page.module.scss'

interface AlertAuthProps{
text:string
}

const AlertAuth:React.FC<AlertAuthProps> = ({text}) => {

    return(
        <div className={styles.alertBG}style={{backgroundColor: "rgb(17 24 39)" }}>
        <div className={styles.alert} > <h1>{text}</h1></div>
      </div>
    )
}

export default AlertAuth