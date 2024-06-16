
import styles from "../../page.module.css";
import CreateArticle from "../../components/CreateArticle";


export default async function NewArticle() {

  return (
    <main className={styles.variables}>
                <CreateArticle
                mainTitle=""
                mainImage=""
                description=""
                idDb=""
                dynamicContent={[]}
                />
 </main>
  );
}
