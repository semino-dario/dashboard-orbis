import Navbar from '@/app/components/Navbar'
import styles from '../../../page.module.scss'
import Footer from '@/app/components/Footer'
import PrimaryButton from '@/app/components/buttons/PrimaryButton'
import Link from 'next/link'
import ShareIcons from '@/app/components/ShareIcons'
import ArticleCard from '@/app/components/ArtilcleCard'
import ArticlesSection from '@/app/components/ArticlesSection'



const Articulo = () => {
    
    return(
        <div>
          <Navbar/>
            <section className={styles.mainContainer}>
            <img className={styles.oneArticleMainImage} src={"https://res.cloudinary.com/dsw6fpqoz/image/upload/v1724860768/typeo_oetlee.png"} alt="" />
                <header className={styles.oneArticleHeader}>
                    <h1 className={styles.oneArticleTitle}>Entrevista a TYPEO</h1>
                    <p className={styles.oneArticleAuthor}>La Libre </p>
                    <p className={styles.articleText}>02/05/2024</p>
                    <ShareIcons/>
                </header>
                <main className={styles.oneArticleContent}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laboriosam in asperiores, cupiditate dolor obcaecati tempora esse dolorem animi vel ducimus quae modi beatae similique ipsum a enim dolores. Nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam aspernatur autem provident obcaecati labore eaque sapiente, consequuntur voluptatem excepturi perspiciatis repellendus earum? Similique numquam porro debitis. Consectetur, consequatur odit!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum nam eveniet facilis ut, quaerat dolorum. Inventore amet, error voluptatem doloribus distinctio iusto optio ipsam explicabo id necessitatibus consequatur sequi.</p>
                    <h2>Subtítulo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, optio vitae! Officia veritatis, dolorem porro modi suscipit ut sit, alias maiores amet voluptatibus asperiores odio. Iste debitis at labore mollitia.</p>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sed praesentium quia, cumque corporis impedit ab. Ab placeat eveniet, nisi, deleniti perspiciatis accusamus cumque eligendi fuga, reprehenderit consequatur hic quas!</p>
                    <img src={'https://res.cloudinary.com/dsw6fpqoz/image/upload/v1724858854/Image2_txm016.jpg'} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ad, eligendi labore rem facere magni harum iste debitis qui iure ab nemo. Nisi, dicta eveniet amet qui assumenda quaerat? Distinctio.</p>
                </main>
                <div className={styles.readMore}>
                <h3 className={styles.title}>Seguir Leyendo:</h3>
                <ArticleCard
                title={"Recomendación: La hija del Delta"}
                author=''
                image='https://res.cloudinary.com/dsw6fpqoz/image/upload/v1724860334/Blank_pioiyv.jpg'
                href=''
                />
                 </div>

                <Link className={styles.oneArticleButton} href={"/articulos"}>
                <PrimaryButton 
                text='volver a todos los artículos'
                primary={false}
                />
                </Link>
                <div className={styles.footerAllArticles}>
              <Footer/>
            </div>
            </section>

        </div>
    )
}

export default Articulo