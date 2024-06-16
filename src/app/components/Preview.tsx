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

    return (
    <div>{oneArticle ?
      <Article
      data={oneArticle}
      />
          :
        <h1>algo salió mal</h1>
        }
   
       </div>
    )
}

export default Preview