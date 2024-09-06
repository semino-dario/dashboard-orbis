import styles from '../page.module.scss'
import PrimaryButton from './buttons/PrimaryButton'

interface AlertImageProps{
image:string
onClick: () => void
}

const AlertImage:React.FC<AlertImageProps> = ({image, onClick}) => {
    return(
            <div className={styles.alertImageContainer}>
                <img src={image} alt="imagen de la actividad" />
                  <PrimaryButton
                primary={true}
                text='cerrar'
                onClick={onClick}
                />  
            </div>
    )
}

export default AlertImage