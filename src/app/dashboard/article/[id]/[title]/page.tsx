import React from 'react';
import Article from "../../../components/Article";
import { FetchOneArticle } from '@/app/lib/datafetch';

export default async function SingleArticle  ({params}: {params: {id: string} })  {

  const idBd = JSON.stringify(params.id)

  const article = await FetchOneArticle(idBd)

        return(
          <div>
            { article  ?
       <Article 
       data={article}
       /> :
       <h1>loading...</h1>
      }
       </div>
  )
}


