import styles from '../page.module.scss'
import bgShapeFooter from '../assets/decos/bg-shape-green.svg'
import Link from 'next/link'
import instagramGreen from '../assets/icons/instagram-green.jpg'
import facebookGreen from '../assets/icons/facebook-green.jpg'
import mailGreen from '../assets/icons/mail-green.jpg'


export default function Footer () {

    return(
        <footer id="contacto" className={styles.containerFooter}>
            <img src={bgShapeFooter.src} alt="imagen decorativa de fondo" />
            <section className={styles.containerFooterContent}>
                <div className={styles.footerText1}>
                    <p >La Libre - Chacabuco 917 <br /> Ciudad de Buenos Aires</p>
                    <Link className={styles.textLink} href={"/"}>Ir a inicio</Link>
                </div>
                <div className={styles.footerText2}>
                    <p>Horarios de atención: lunes a viernes 12 a 19 hs. </p><p> fines de semana y feriados 14 a 20 hs.</p>
                    <p> Tel.: +54 9 11 6064 6581</p>
                    <Link href={""}>lalibrearteylibros@gmail.com </Link>
                </div>  
                <div className={styles.footerIconsContainer}>
                  <Link href="https://www.facebook.com/lalibrelibreria" target='_blank'>  <img src={facebookGreen.src} alt="Logo de Facebook" /> </Link>
                   <Link href={"https://www.instagram.com/lalibrearteylibros/"} target='_blank'> <img src={instagramGreen.src} alt="Logo de Instagram" /> </Link>
                    <Link href=""><img src={mailGreen.src} alt="Logo de E-mail" /> </Link>
                </div>  
            </section>
            
        </footer>
        
    )

}