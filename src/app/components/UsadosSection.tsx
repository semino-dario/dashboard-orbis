import styles from '../page.module.scss';
import underline from '../assets/decos/Underline_03.svg'
import bgShape from '../assets/decos/bg-shape-red.svg'
import CardSimple from './cards/CardSimpe';

export default function UsadosSection () {
    return(
        <div>
        <section id="usados" className={styles.usadosContainer}>
            <h2 className={styles.title}>Libros usados</h2>
            <img className={styles.underlineUsados} src={underline.src} alt="imagen decorativa" />
            <div className={styles.usadosCardsContainer}>
            <CardSimple
            title="Entrevista a Liliana Heker"
            text="Sus vínculos con los libros usados, con las bibliotecas y los libros que atesora."
            buttonRef=''
            buttonText='ver'
            />
            <CardSimple
            title='Cómo saber qué libros tenemos'
            text='Te recomendamos seguirnos en instagram y estar atent@ a nuestras stories. O recordá que  podés consultarnos por mail o whp.'
            buttonText='ir a instagram'
            buttonRef=''
            />
            </div>
        </section>
        <img className={styles.bgShape} src={bgShape.src} alt="imagen de decorativa de fondo" />
        </div>
    )
}