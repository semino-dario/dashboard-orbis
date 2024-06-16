import styles from "../../page.module.css";
import AllArticles from "../../components/AllArticles";
import { GET } from "@/app/api/route";

export default  async function Articles (){

let data

  try{
    const response = await GET();
    data = await response.json()}
   
    catch (error){
     console.log("Error IN Get all articles: ", error)
   }
   
   
  return (
    <main className={styles.main}>
        <div className="">
               <AllArticles
               data={data}
               /> 
               
        </div>
 </main>
  );
}


