"use client"
import styles from "../../page.module.scss";
import AllArticles from "../components/AllArticles";
import { useEffect, useState } from "react";
import useAuth from "@/app/lib/hooks";
import AlertAuth from "@/app/dashboard/components/AlertAuth";

export const fetchCache = 'force-no-store';

export default function Articles (){

  const  [data, setData] = useState([])
  const {user, loading} = useAuth()

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

if (loading) {
  return  <AlertAuth
  text="Loading..."
  /> 
}   
    return (
      <main className={styles.main}>
        {user ? 
             <div>
             { data.length > 0 &&
                 <AllArticles
                 data={data}/>
                } 
                </div>        
                 :
                 <AlertAuth
                 text="Non authorized"
                 /> 
                 }
   </main>
    );
  }