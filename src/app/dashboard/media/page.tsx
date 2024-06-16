import ImageLoader from "../../components/ImageLoader"
import styles from "../../page.module.css"

export default async function Media () {

return(
        <main className={styles.main}>
            <h1>MEDIA LIBRARY</h1>
            <ImageLoader
            />
        </main>
)
}