"use client"
import styles from "../../page.module.css";
import AllArticles from "../../components/AllArticles";
import { useEffect, useState } from "react";

export const fetchCache = 'force-no-store';

export default function Articles (){

  const  [data, setData] = useState([])
  
  useEffect( () => { async function getData () {
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {cache: 'no-store'});
      const data =  await response.json()
      setData(data)
      return(data)
    }
     
      catch (error){
       console.log("Error IN Get all articles: ", error)
     }} getData()}, []
    )
     
    return (
      <main className={styles.main}>
          <div className="">
            { data.length > 0 &&
                 <AllArticles
                 data={data}
                 /> }
          </div>
   </main>
    );
  }
  

// export default  async function Articles (){

// let data

//   try{
//     const response = await GET();
//     data = await response.json()}
   
//     catch (error){
//      console.log("Error IN Get all articles: ", error)
//    }
   
   
//   return (
//     <main className={styles.main}>
//         <div className="">
//                <AllArticles
//                data={data}
//                /> 
//         </div>
//  </main>
//   );
// }


