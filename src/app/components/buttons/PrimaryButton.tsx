import styles from '../../page.module.scss'

interface PrimaryButtonProps {
    text: string
    primary: boolean
    onClick?: () => void
}

const PrimaryButton:React.FC<PrimaryButtonProps> = ({text, primary, onClick}) => {

    return (

        <div onClick={onClick} className={ primary ? styles.primaryButton : styles.secondaryButton}>
            <p>{text}</p>
        </div>

    )
}

export default PrimaryButton