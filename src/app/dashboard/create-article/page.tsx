"use client"

import useAuth from "@/app/lib/hooks";
import styles from "../../page.module.css";
import dynamic from "next/dynamic"
import AlertAuth from "@/app/components/AlertAuth";

const CreateArticle = dynamic(() => import("../../components/CreateArticle"), {ssr: false}
)

export default function NewArticle() {

  const {user, loading} = useAuth()

  if (loading) {
    return  <AlertAuth
    text="Loading..."
    /> 
  }   

  return (
    <main className={styles.variables}>
      {
        user ?
                <CreateArticle
                mainTitle=""
                mainImage=""
                description=""
                idDb=""
                dynamicContent={[]}
                />
                :
                <AlertAuth
                text="Non authorized"
                /> 
}
 </main>
  );
}
