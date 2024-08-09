"use client"

import Article from "../components/Article"

interface PreviewProps {
    data?: any 
    oneArticle?: any
}

const Preview:React.FC<PreviewProps> = ({data, oneArticle}) => {

const dataString = localStorage.getItem('article')

  if (dataString) {
    data = JSON.parse(dataString)

    if (data){
    oneArticle = Object.values(data.article)}}


    
    const dynamicContent:any[] = []
    
    for (let i = 3; i<oneArticle.length; i++){
      dynamicContent.push(oneArticle[i])
    }

    const  article = { mainTitle: oneArticle[0].mainTitle, mainImage: oneArticle[1].mainImage, description: oneArticle[2].description, dynamicContent: dynamicContent }


    return (
    <div>{oneArticle ?
      <Article
      data={article}
      />
          :
        <h1>algo salió mal</h1>
        }
   
       </div>
    )
}

export default Preview