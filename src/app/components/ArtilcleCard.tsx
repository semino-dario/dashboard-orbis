import Link from 'next/link'
import styles from '../page.module.scss'

interface ArticleCardProps{
    title: any
    author:string
    image:string
    href:string
}

const ArticleCard:React.FC<ArticleCardProps> = ({title, author, image, href}) => {
    return (
        <Link href={href}>
        <div className={styles.articleCard}>
                <div>
                <img src={image} alt="" />
                  <p className={styles.articleTitle}>{title}</p>
                  <p className={styles.articleText}>{author}</p> 
                </div> 
            </div>
         </Link>
            )
}

export default ArticleCard