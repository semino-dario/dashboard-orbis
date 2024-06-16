import Link from "next/link";
import styles from '../page.module.css'
import { connectApi } from "../api/ConnectApi";
import { FetchLastArticle } from "../api/FetchData";

interface ResponseProps{
  id?: string;
  title?:string
}

const Response:React.FC<ResponseProps> = async ({id, title})=> {

    const data:any = await FetchLastArticle()
    if (data) {
      id = data.id
      title = data.article.article[0].mainTitle
    }

    return(
      <main className={styles.main}>
        <div className={styles.homeLinkContainer}>

        <h1>Your article was created!</h1>
      <Link href={`article/${id}/${title}`} className={styles.homeLink}>  <h3>Read article</h3> </Link>
      <Link href="/all-articles" className={styles.homeLink}>  <h3>See all articles</h3></Link>
        </div>

        </main>
    )
}

export default Response