"use client"
import { useEffect, useState } from 'react';
import styles from '../../page.module.css'
import { animateScroll } from "react-scroll";

interface ButtonsDynamicContentProps {
blockStates: any[]
setBlockStates: React.Dispatch<React.SetStateAction<any[]>>
}
const ButtonsDynamicContent:React.FC<ButtonsDynamicContentProps> = ({blockStates, setBlockStates}) => {


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
      setIsClient(true);
  }, []);

  const scrollToBottom = () => {
      if (isClient) {
          animateScroll.scrollToBottom();
      }
  };

    // const scrollToBottom = () => {
    //     animateScroll.scrollToBottom();
    //   };

      const addElement = ( e:React.FormEvent, elementContent:string) =>{
        e.preventDefault()
        const newElement = {[elementContent]: "" }
        setBlockStates([...blockStates, newElement])
        scrollToBottom()
      }

      const addDivider = (e:React.FormEvent) => {
        e.preventDefault()
        const divider = {divider: true}
        setBlockStates([...blockStates, divider ])
        scrollToBottom()
      
      }

    return(
        <div className={styles.containerButtonsArticle}>
        <button className={styles.buttonArticle} onClick={ (e) => addElement(e, 'titleContent')}>Subtitle</button>
        <button className={styles.buttonArticle} onClick={ (e) => addElement( e, 'textContent')}>Text</button>
        <button className={styles.buttonArticle} onClick={(e) => addDivider(e)}>Divider</button> 
        <button className={styles.buttonArticle} onClick={(e) => addElement(e,'imageContent')}>Image</button> 
        </div>
    )
}

export default ButtonsDynamicContent