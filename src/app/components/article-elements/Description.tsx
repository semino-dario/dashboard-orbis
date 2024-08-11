"use client"
import styles from '../../page.module.scss'
import React from 'react';


interface DescriptionProps {
    textContent: string;
    onChange: ((value: string) => void);
    onDelete?: () => void;
  }
  const Description: React.FC<DescriptionProps> = ({ textContent, onChange, onDelete }) => {
  
   let maxLength = false

      if(textContent.length > 200){
        textContent = textContent.substring(0, 200)
        maxLength = true
      }

    return(
      <div className="">    
      <textarea  
      rows={1}
     className={`${styles.textarea} ${styles.description}`} placeholder={ "Max 200 characters"} name="titleContent" value={textContent}
      onChange={(e) => onChange(e.target.value) } 
      /> 
      {maxLength ?
        <h4 style={{color:'red'}}>Max 200 characters!!!</h4>
        :
        <></>
      }
       </div>
    )
}

export default Description;