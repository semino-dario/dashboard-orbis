"use client"
import Divider from "./article-elements/Divider"
import React, { useEffect, useState } from 'react';
import styles from '../page.module.css'

interface ArticleProps{
  data: any
}
  
const Article: React.FC<ArticleProps>  = ({data}) =>  {

 useEffect( () => {
  const getData = async () => {
   const newData = await data 
   console.log("SAFE DATA: ", newData)}
   getData() 
  }, [])

        return(
                <div className={styles.article}>         
                    <div>
                          <div>
                            <h1 >{data.mainTitle}</h1>
                            <img src={data.mainImage} alt="" />
                          <div dangerouslySetInnerHTML={{__html: data.description}} />
                          {
                            data.dynamicContent.map( (element:any, index:number) => (
                            <div key={index}>
                              <div dangerouslySetInnerHTML={{ __html: element.textContent}}/> 
                                <h2>{element.titleContent}</h2>
                                <img src={element.imageContent} alt="" /> 
                                {element.divider === true ?
                                  <Divider />
                                  :
                                  <></>}  
                              </div>
                          )
                            )
                              }
                          </div>
                    </div>    
                </div>
  )
}
    export default Article;

