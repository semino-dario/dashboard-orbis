import { FetchAllArticles } from "../api/FetchData";
import AllArticles from "../components/AllArticles";

export default async function DashboardHome (){

   const data = await FetchAllArticles();
         
  return (
    <div>
      <AllArticles 
      data={data}
      /> 
 </div>
  );
}

