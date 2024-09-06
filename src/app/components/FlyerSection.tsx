"use client"

import styles from '../page.module.scss'
import PrimaryButton from './buttons/PrimaryButton'
import { useState } from 'react'
import { StaticImageData } from 'next/image'
import AlertImage from './AlertImage'

interface FlyerSectionProps{
    flyers: string[]
    title?: string
    text?: string
    underline?: StaticImageData
}

const FlyerSection:React.FC<FlyerSectionProps> = ({flyers, title, text, underline}) => {

const [showContent, setShowContent] = useState(false)
const [alert, setAlert] = useState(false)
const [imageUrl, setImageUrl] = useState("")

const openImage= (image:string) => {
    setAlert(true)
    setImageUrl(image)
}

    return(

        <section className={`${styles.mainContainer} ${styles.marginBottomSection}`}>
            <h2 className={styles.title}>{title}</h2>
            {underline &&
            <img src={underline.src} alt="línea de decoración" />}
            <p className={styles.flyerText}>{text}</p>
            <div className={styles.flyerContainer}>
            {
                flyers &&
                flyers.map( (flyer:string, index:number) =>
                    index > flyers.length - 4 &&
                    <img  onClick={()=> openImage(flyer)} key={index} className={styles.flyer} src={flyer} alt="flyer del taller" />             
            )            
            } </div>
            {  !showContent ?
                <div></div>
                :
                <div className={styles.flyerContainer}>
                    { flyers &&
                        flyers.map( (flyer:string, index:number) =>
                            index < flyers.length - 3 &&
                            <img  onClick={()=> openImage(flyer)} key={index} className={styles.flyer} src={flyer} alt="flyer del taller" /> )            
                    }
                </div>
            }
            { flyers.length > 3 &&
            <PrimaryButton 
            onClick={()=>setShowContent(!showContent)}
            text={!showContent ? "ver más" : "ver menos"}
            primary={true}
            />} 
        { !alert ?
        <></>
        :
        <AlertImage
        image={imageUrl}
        onClick={()=> setAlert(false)}
        />}
        </section>

    )
}

export default FlyerSection;