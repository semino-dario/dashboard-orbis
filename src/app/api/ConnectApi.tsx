const API_URL = process.env.API_URL

export async function postApi (data:any[]) {

    try{

        const resp = await fetch(`http://localhost:3000/api/`,
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
        // const id = idArticle.replace(/^"|"$/g, '')
        const resp = await fetch(`http://localhost:3000/api/article/${idArticle}`,
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
        const resp = await fetch('http://localhost:3000/api/',
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

    export const getImages = async () => {

        try{
    
            const resp = await fetch(`https://658b02c3ba789a9622384d5a.mockapi.io/images`, {
                method: "GET",
                cache: "no-store"
            })
            const data = resp.json()

            return data
        }
    
        catch (error)
        {
            console.log(`Error GET IMAGES: ${error}` )
        }
    }

export const postImage = async (data:any) => {

    try{

        const resp = await fetch(`https://658b02c3ba789a9622384d5a.mockapi.io/images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const imageLoaded = await resp.json()
        if (imageLoaded)
        return {success:true, message: "Image loaded correctly"}
    }

    catch (error) {
        console.log( `ERROR IMAGE POST: ${error}` )
        return {success: false, message: "Error! Image not loaded. try again"}
    }


}


export const FetchArticleByID = async (idBd:string) => {
    try {
      const resp = fetch(`http://localhost:3000/api/article/${idBd}`, {
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
    const data = await getImages()
    if (data)
        data.forEach((image:any)=> images.push(image.imageURL) )
    return images
}