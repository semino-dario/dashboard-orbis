import styles from '../../page.module.scss'
import ButtonsReadEditDelete from './buttons/ButtonsReadEditDelete'

interface AllArticlesProps {
    data: any[]
}

const AllArticles:React.FC<AllArticlesProps> = ({data}) => {
    return(
        <div className={styles.allArticlesContainer}>
            <div className={styles.articleData}>
                <div className={styles.titlesBar}>Title</div>
                <div className={styles.titlesBar}>Image</div>
                <div className={styles.titlesBar}>Description</div>
                <div className={styles.titlesBar}>Actions</div>
                </div>
            { data ? 
            data.map( (articleData:any, index:number) => (
            <div className={styles.articleData} key={index}>
                <div className={`${styles.articleContent} ${styles.articleText}`}><h3>{articleData.article[0].mainTitle}</h3></div>
                <div className={styles.articleContent}><img src={articleData.article[1].mainImage} alt="" /></div>
                <div className={`${styles.articleContent} ${styles.articleText}`}>{articleData.article[2].description}</div>
                <ButtonsReadEditDelete
                id={index}
                title={articleData.article[0].mainTitle}
                idDb={articleData._id}
                articleImage={articleData.article[1].mainImage}
                articleDescription={articleData.article[2].description}
                />
                </div>))
            :
            <div>
                <h1>loading...</h1>
            </div>
            }
        </div>
    )
}

export default AllArticles