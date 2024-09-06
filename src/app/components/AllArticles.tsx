import styles from '../page.module.scss'
import nena from '../assets/images/nena.jpeg'
import ArticleCard from './ArtilcleCard'
import Footer from './Footer'

interface AllArticlesProps {
    articles : any[]
}

const AllArticles:React.FC<AllArticlesProps> = ({articles}) => {

    return(
        <section className={styles.allArticlesMainContainer}>
            <header className={styles.allArticlesHeader}>
              <img className={styles.allArticlesImage} src={nena.src} alt="imagen de niña leyendo" />
              <div className={styles.allArticlesHeaderContent}>
                <h1>
                    todos nuestros artículos
                </h1>
                <p>Entrevistas, reseñas, recomendaciones, artículos y mucho más...</p>
              </div>
            </header>
            <main>
              { articles && 
              articles.map( (art, index) =>
              <div key={index}>
                <ArticleCard
                title={art.title}
                author={art.author}
                image={art.image}
                href={"http://localhost:3000/articulo/1/titulo"}
                /></div>)}
            </main>
            <div className={styles.footerAllArticles}>
              <Footer/>
            </div>
        </section>
    )

}

export default AllArticles;