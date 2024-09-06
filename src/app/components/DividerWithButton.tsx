import Link from 'next/link'
import styles from '../page.module.scss'

export default function DividerWithButton () {

    return(
        <div className={styles.dividerContainer}>
            <Link className={styles.dividerButton} href={""}>
              <p>¡Subscribite a nuestro newsletter!</p>
            </Link>
            <div className={styles.line}></div>
        </div>
    )

}