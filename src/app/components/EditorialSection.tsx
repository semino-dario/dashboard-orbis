import styles from '../page.module.scss'
import editorialImage from '../assets/images/editorial.png'
import asterix from '../assets/decos/asterix.svg' 
import PrimaryButton from './buttons/PrimaryButton'
import Link from 'next/link'
import BookCovers from './BookConvers'

interface EditorialSectionProps{
    books: any[]
}

const EditorialSection:React.FC<EditorialSectionProps> = ({books}) => {
    return(
        <div id="editorial" className={styles.marginBottomSection}>
        <section  className={styles.editorialContainer}>
            <div className={styles.editorialContent}>
              <div>
                <img className={styles.asterixEditorial} src={asterix.src} alt="imagen decorativa" />
                <h2 className={styles.title}>La libre editora</h2>
                <p className={styles.text}>El proyecto editorial de La Libre nació de los vínculos, las lecturas, escrituras e intercambios que surgieron en la librería ubicada en San Telmo. <br /> <br />
                 Si deseas adquirir alguno podes contactarte con nuestra distribuidora o de manera presencial en nuestra casa ubicada en Chacabuco 917, CABA</p>
              </div>
            <img className={styles.editorialImage} src={editorialImage.src} alt="image de la editorial" />
            </div>
             <div className={styles.editorialButtonsContainer}>
                <Link href={""} >
                  <PrimaryButton
                   text="link a nuestro catálogo"
                   primary={false}
                />
                </Link>
                <Link href={""} >
                  <PrimaryButton
                   text="Si sos librería, escribinos!"
                   primary={false}
                />
                </Link>
            </div> 
           
        </section>
       <BookCovers
       images={books}
       />
        </div>
    )
}


export default EditorialSection