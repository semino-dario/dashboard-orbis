import styles from '../page.module.scss'
import mainImage from '../assets/images/foto_la_libre.jpg'
import logoImage from '../assets/images/title-cercle.png'
import {dataTalleres, dataActividades, dataArticles, dataEditorial} from '../data/data'
import FlyerSection from './FlyerSection'
import unerline1 from '../assets/decos/Underline_05.svg'
import unerline2 from '../assets/decos/Underline_03.svg'
import ArticlesSection from './ArticlesSection'
import DividerWithButton from './DividerWithButton'
import TiendaOnlineSection from './TiendaOnlineSection'
import UsadosSection from './UsadosSection'
import EditorialSection from './EditorialSection'
import DistribuidoraSection from './DistribuidoraSection'
import HistoriaSection from './HistoriaSection'
import Footer from './Footer'

const Home = () => {

    return(
    <div className={styles.homeContainer}>
        <div className={styles.mainImageContainer}>
            <img className={styles.mainImage} src={mainImage.src} alt="Imagen de la librería" />
            <img className={styles.logoImage} src={logoImage.src} alt="Logo de La Libre" />
            <div className={styles.mainSign}>
                <p>Cooperativa de libros y cultura</p>
                <p>Chacabuco 917, San Telmo, CABA.<br /> Abrimos todos los días!</p>
            </div>
        </div>
        <FlyerSection
        title='talleres'
        underline={unerline1}
        text='Virtuales, presenciales y club de lectura'
        flyers={dataTalleres}
        />
        <FlyerSection
        title='actividades'
        underline={unerline2}
        text='Presentaciones, lecturas y charlas. Eventos libres y gratuitos'
        flyers={dataActividades}/>
        <ArticlesSection
        articles={dataArticles}
        />
       <DividerWithButton/>
       <TiendaOnlineSection/>
       <UsadosSection/>
       <EditorialSection
       books={dataEditorial}/>
       <DistribuidoraSection/>
       <HistoriaSection />
       <Footer/>
    </div>
    )
}

export default Home;