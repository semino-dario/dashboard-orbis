import styles from '../page.module.scss'
import tienda from '../assets/images/e-commerce.png'
import star from '../assets/decos/star.svg'
import PrimaryButton from './buttons/PrimaryButton'
import Link from 'next/link'

export default function TiendaOnlineSection () {
    return(
        <section id="tienda" className={styles.tiendaMainContainer}>
        <div className={styles.tiendaContainer}>
            <div className={styles.tiendaTitle}>
              <img className={styles.star}src={star.src} alt="imagen decorativa" />
              <h2 className={styles.title}>VISITÁ NUESTRA TIENDA ONLINE</h2>
            </div>
            <p className={`${styles.text} ${styles.tiendaText}`}>Encontrá todo nuestro catálogo de libros nuevos. Hacemos envíos a toda CABA, el país y el mundo.</p>
            <img className={styles.tiendaImage} src={tienda.src} alt="imagen de la sección distribuidora" />
            <Link className={styles.tiendaLink} href={""}>
             <PrimaryButton
              primary={false}
              text="visitar tienda"/>
             </Link>
        </div>
        
        </section>
    )
}