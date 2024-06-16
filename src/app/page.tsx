import Link from "next/link";
import styles from "./page.module.css";
import { FetchAllArticles } from "./api/FetchData";
import { GET } from "./api/article/[id]/route";


export default async function Home (){

              
  return (
    <div className={styles.main}>
      <Link rel="stylesheet" href="/dashboard" > <h1>Go to my dashboard</h1> </Link>
     
 </div>
  );
}


