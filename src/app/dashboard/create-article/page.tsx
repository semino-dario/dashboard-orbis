"use client"

import styles from "../../page.module.css";
import CreateArticle from "../../components/CreateArticle";

export default function NewArticle() {

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
