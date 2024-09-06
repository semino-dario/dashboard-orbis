import styles from '../page.module.scss'
import historiaImage from '../assets/images/historia.png'
import asterix from '../assets/decos/asterix.svg'

export default function HistoriaSection () {

    return(
        <section id="historia" className={styles.historiaContainer}>
            <div className={styles.historiaContent}>
                <img src={asterix.src} alt="imagen decorativa" />
                <h2 className={styles.title}>Nuestra historia</h2>
                <p className={styles.text}>La Libre es una cooperativa de libros y cultura, vinculada con el mundo de la edición independiente y alternativa. <br /> <br />
                Contamos con un amplio espacio que aloja la librería y las diversas actividades culturales que proponemos, teniendo como eje el ámbito de los libros, aunque no de manera excluyente. <br /> <br />
                Nuestras actividades van desde presentaciones de libros, a muestras de arte, fotografía y grabado, se realizan obras de teatro no convencionales, se dan talleres cortos, clubes de lectura y charlas de diversas temáticas. Además, organizamos ferias de libros usados, al igual que ciclos de poesía y música, encuentros de lectura e intercambios con proyectos editoriales de otros países de América Latina.</p>
            </div>
            <img className={styles.historiaImage} src={historiaImage.src} alt="imagen de la sección" />
        </section>
    )
}