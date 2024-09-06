"use client"
import styles from '../page.module.scss'
import menu from '../assets/icons/menu.svg'
import libro from '../assets/icons/libro-la-libre.svg'
import fb from '../assets/icons/facebook.jpg'
import insta from '../assets/icons/instagram.jpg'
import mail from '../assets/icons/mail.jpg'
import equis from '../assets/icons/equis.jpg'
import { useState } from 'react'
import Link from 'next/link'
import nena from '../assets/images/navImage.jpg'


export default function Navbar () {
  const [ closeNavBar, setCloseNavBar ] = useState(true)


    return (
        <div className={styles.mainBar}>
          <nav className={styles.nav}>
          <img className={styles.navIcon} onClick={()=> setCloseNavBar(!closeNavBar)} src={closeNavBar ? menu.src : equis.src } alt="" />
          <p className={styles.name}>La libre</p>
          <Link href="/">  <img src={libro.src} alt="Logo de La Libre" /></Link>
          </nav>
          <div className={styles.iconsContainer}>
            <Link href={"https://www.facebook.com/lalibrelibreria/"} target='_blank'> <img className={styles.navIcon} src={fb.src} alt="ícono de Facebook" /> </Link>
            <Link href={"https://www.instagram.com/lalibrearteylibros/"} target='_blank'> <img className={styles.navIcon} src={insta.src} alt="Ícono de instagram" /> </Link>
            <Link href={""} target='_blank'> <img className={styles.navIcon} src={mail.src} alt="Ícono de correo electrónico" /> </Link>
          </div> 
          <div className={`${styles.movePanel} ${closeNavBar && styles.closed}`}>
          <div className={styles.navItemsContainer} >
            <ul className={styles.navList}>
                <Link onClick={()=>setCloseNavBar(true)} href={"#talleres"}><li>Talleres</li></Link>
                <Link onClick={()=>setCloseNavBar(true)} href={"#actividades"}> <li>Actividades</li></Link>
                <Link onClick={()=>setCloseNavBar(true)} href={"#leenos"}><li>Leenos</li></Link>
                <Link onClick={()=>setCloseNavBar(true)} href={"#tienda"}><li>Tienda Online</li></Link>
                <Link onClick={()=>setCloseNavBar(true)} href={"#usados"}><li>Libros Usados</li></Link>
                <Link onClick={()=>setCloseNavBar(true)} href={"#editorial"}><li>La Libre Editora</li></Link>
                <Link onClick={()=>setCloseNavBar(true)} href={"#distribuidora"}><li>Distribuidora</li></Link>
                <Link onClick={()=>setCloseNavBar(true)} href={"#historia"}><li>Nuestra Historia</li></Link>
                <Link onClick={()=>setCloseNavBar(true)} href={"#contacto"}><li>Contacto</li></Link>
            </ul>
            <img className={styles.navbarImage} src={nena.src} alt="Imagen de niña leyendo" />
       </div>
          </div>
        </div>
    )
}