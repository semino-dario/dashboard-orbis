import { GET } from "../api/article/[id]/route"
import { NextRequest, NextResponse } from 'next/server';


const setArticleContent = async (oneArticle:any) => {
    const dynamicContent:any[] = []
    for (let i = 3; i<oneArticle.article.length; i++){
     
      dynamicContent.push(oneArticle.article[i])
    }

    const  article = { mainTitle: oneArticle.article[0].mainTitle, mainImage: oneArticle.article[1].mainImage, description: oneArticle.article[2].description, dynamicContent: dynamicContent }

    return article
  } 

export const FetchOneArticle = async (idBd:string) => {

  const cleanedIdBd = idBd.replace(/^"|"$/g, '');
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}article/${cleanedIdBd}`); 
  const request = new NextRequest(url);

    try{
        const response:any = await GET(request) 
        const oneArticle:any = await response.json()
        const article = setArticleContent(oneArticle)
    
        return article
    }

    catch (error) {
        console.log("ERROR IN FETCH ONE ARTICLE: ", error)
    }
}

