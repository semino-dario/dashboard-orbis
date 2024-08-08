
const api = process.env.NEXT_PUBLIC_API_URL || ""

export async function postApi (data:any[]) {

    try{

        const resp = await fetch(api,
            {method: 'POST',
            headers: {
                "Content-Type": "application/json", 
              },
            body: JSON.stringify(data)
            }
        )

        const responseData = await resp.json()
        console.log(responseData)
    }

    catch (err) {
        console.log(`Error en POST ${err}`)
    }
}


export async function putApi (idArticle:string, data:any) {

    try{
        const resp = await fetch(`${api}article/${idArticle}`,
        {method: 'PUT',
        cache: 'no-store', 
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data
          ),        }
        )

        const responseData = await resp.json()
        console.log(responseData)
        
    
    }

    catch (error) {
        console.log("Put Error" + error)
    }

}

export async function deleteApi (id:string) {

    try {
        const resp = await fetch(api,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })

        const response = await resp.json()
        console.log("DELETE RESPONSE " + JSON.stringify(response))
        return response
    
    }

        catch (error) {
            console.log("DELETE error :" + error)
        }

    }

    export const getArticles = async () => {

        try{
   
            const resp = await fetch( api, {
                method: "GET",
                cache: "no-store"
            })
            const data = await resp.json()
        
            return data

        }
    
        catch (error)
        {
            console.log(`Error GET ARTICLES: ${error}` )
        }
    }

export const FetchArticleByID = async (idBd:string) => {
    try {
      const resp = fetch(`${api}article/${idBd}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
      }
      })
  
      if (!resp) {
        throw new Error('Failed to fetch article');
    }
    const article = (await resp).json()
    return article
    }
  
    catch (error) {
      console.log("ERROR IN GET ONE ARTICLE: ", error)
    }
  }


  export const FetchImages = async () => {
    const images:any[] = []
    const data = await getArticles()
    
    if (data)
        data.forEach((article:any)=> 
            article.article.map((item:any ) => 
            {if( item.mainImage) images.push(item.mainImage)
            if (item.imageContent) images.push(item.imageContent)    
            }))
            
            return images
}