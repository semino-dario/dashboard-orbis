import Link from 'next/link'
import styles from '../../page.module.scss'

interface CardSimpleProps{
    title: string
    text:string
    buttonText:string
    buttonRef: string
}

const CardSimple:React.FC<CardSimpleProps> = ({title, text, buttonText, buttonRef} ) => {
    return(
        <div className={styles.cardSimple}>
            <h3 className={styles.articleTitle}>{title}</h3>
            <p className={styles.articleText}>{text}</p>
            <Link className={styles.cardButton} href={buttonRef}>{buttonText}</Link>
        </div>

    )
}

export default CardSimple