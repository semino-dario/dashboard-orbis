import Link from 'next/link'
import styles from '../page.module.scss'

export default function NavItems () {


    return(
       <div className={styles.navItemsContainer} >
            <ul className={styles.navList}>
                <Link href={""}><li>Talleres</li></Link>
                <Link href={""}> <li>Actividades</li></Link>
                <Link href={""}><li>Leenos</li></Link>
                <Link href={""}><li>Tienda Online</li></Link>
                <Link href={""}><li>Libros Usados</li></Link>
                <Link href={""}><li>La Libre Editora</li></Link>
                <Link href={""}><li>Distribuidora</li></Link>
                <Link href={""}>  <li>Nuestra Historia</li></Link>
                <Link href={""}><li>Contacto</li></Link>
            </ul>
       </div>
    )
}