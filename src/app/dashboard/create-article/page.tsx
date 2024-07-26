"use client"

import styles from "../../page.module.css";
import dynamic from "next/dynamic"

const CreateArticle = dynamic(() => import("../../components/CreateArticle"), {ssr: false}
)

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
