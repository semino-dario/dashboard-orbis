import styles from '../page.module.scss'
import Link from 'next/link'
import linkedin from '../assets/icons/linkedin.jpg'
import facebook from '../assets/icons/facebook.jpg'
import whatsapp from '../assets/icons/whatsapp.jpg'
import exTwitter from '../assets/icons/ex-twitter.jpeg'

const ShareIcons = () => {
return(
    <div className={styles.shareIconsContainer}> 
                       <Link href={""}> <img src={whatsapp.src} alt="logo de Whatsapp" /> </Link>
                       <Link href={""}> <img src={facebook.src} alt="logo de Facebook" />  </Link>
                       <Link href={""}> <img src={linkedin.src} alt="logo de Linkedin" /> </Link>
                       <Link href={""}> <img src={exTwitter.src} alt="logo de X" /> </Link>
                    </div>
)
}

export default ShareIcons