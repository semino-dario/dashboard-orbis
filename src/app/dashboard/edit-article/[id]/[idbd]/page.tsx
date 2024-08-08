import styles from "../../../../page.module.css";
import CreateArticle from "../../../../components/CreateArticle";
import { FetchOneArticle } from "@/app/lib/datafetch";

export default async function EditArticle({params}: {params: {id: number, idbd:string}}) {
  
  const idBd = JSON.stringify(params.idbd)

  const article = await FetchOneArticle(idBd)
    

  return (
    <main className={styles.main}>
        <div className="">
          { article &&
        <div>
          <h1>Edit Article</h1>
            <CreateArticle
              mainTitle={article.mainTitle}
              mainImage={article.mainImage}
              description={article.description}
              idDb={idBd}
              dynamicContent={article.dynamicContent}
              />
         </div>
          }
        </div>
 </main>
  );
}