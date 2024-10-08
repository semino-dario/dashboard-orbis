"use client"

import useAuth from "@/app/lib/hooks";
import styles from "../../page.module.scss";
import dynamic from "next/dynamic"
import AlertAuth from "@/app/dashboard/components/AlertAuth";

const CreateArticle = dynamic(() => import("../components/CreateArticle"), {ssr: false}
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
