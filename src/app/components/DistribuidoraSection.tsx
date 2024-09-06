import Link from 'next/link';
import styles from '../page.module.scss';
import PrimaryButton from './buttons/PrimaryButton';
import underline from '../assets/decos/Underline-White.svg'
import carretilla from '../assets/images/distribuidora.png'
import bgShape from '../assets/decos/bg-shape-yellow.svg'

export default function DistribuidoraSection() {
    return(
    <div >
        <section id="distribuidora" className={styles.distribuidoraContainer}>
            <div className={styles.distribuidoraHeader}>
              <h2 className={styles.title}>Distribuidora</h2>
              <img className={styles.underlineDistribuidora} src={underline.  src} alt="imagen decorativa" />
            </div>
            <p className={styles.distribuidoraText1}>Somos editorial, librería y distribuidora. Apostamos a la autogestión y el trabajo colectivo en todo lo que hacemos.</p>
            <img className={styles.distribuidoraImage} src={carretilla.src} alt="imagen de una carretilla" />
            <p className={styles.distribuidoraText2}>En este momento nuestro catálogo de distribución y venta mayorista 
                incluye libros de las siguientes editoriales:</p>
            <div className={styles.list}>
                <ul className={styles.text}>
                    <li>La Libre</li>
                    <li>Segunda en Papel</li>
                    <li>Ginecosofía</li>
                    <li>Yo no fui</li>
                    <li>Pez en el hielo</li>
                </ul>
                <ul className={styles.text}>
                    <li>Indómita Luz</li>
                    <li>Esa luna tiene agua</li>
                    <li>Ideas paliativas</li>
                    <li>Detodoslosmares</li>
                </ul>
            </div>
            <Link className={styles.distribuidoraButton} href=""> 
                <PrimaryButton
                primary={false}
                text='lalibredistribuidora@gmail.com'/>
                </Link>
        </section>
          <img src={bgShape.src} alt="image de fondo decorativa" />
        </div>
    )
}