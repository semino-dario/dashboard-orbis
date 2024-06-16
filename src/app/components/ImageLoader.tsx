"use client"
import {  useEffect, useState } from "react";
import Image from "./article-elements/Image"
import { postImage } from "../api/ConnectApi";
import { FetchImages } from "../api/ConnectApi";
import styles from '../page.module.css'
import defaultImage from '../images/your-image.jpg'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';


interface ImageLoaderProps{
     images1?: any[]
}

const ImageLoader:React.FC<ImageLoaderProps> = ({images1}) => {
    const [imageURL, setImageURL] = useState("")
    const [message, setMessage] = useState("")
    const [showGallery, setShowGallery] = useState(false)

    const [images, setImages] = useState<any>([])
    
    const postImageURL = async () => {
        if(imageURL !== ""){
            const image = {imageURL: imageURL }
            const result = await postImage(image)
            if (result)
            setMessage(result.message)
        }
        
        else{
            alert("image url is empty")
        }
    }

      

        useEffect( ()=> {
            const getData = async () => {
                const data = await FetchImages()
                if (data)
                    setImages(data)
            }
            getData()
        }, [])
    
        const handleUploadSuccess = (result:any) => {
            console.log('Imagen cargada:', result);
            const newImage = result.info.secure_url
            setImageURL(newImage)
        };

        
        const getPublicID = (id:any) => {
                setImageURL(id)
        }
     
        

    return(
        <div>
        <div className={styles.containerImage}>
     <button className={styles.changeImageButton} onClick={(e)=> {e.preventDefault(), setImageURL("")}}>Change Image</button> 
    {/* <img src={imageURL ? imageURL : defaultImage.src} alt="" className={styles.loadedImage} /> */}
    <CldImage
  width="960"
  height="500"
  crop="fill"
  src={imageURL ? imageURL : defaultImage.src}
  sizes="100vw"
  alt="Description of my image"
/>
    </div><div>
        <CldUploadButton 
        uploadPreset="hom8bohk"
        onSuccess={handleUploadSuccess}
        />
        </div> 
     
        <div onClick={(e)=>{e.preventDefault(), setShowGallery(!showGallery)}} className={`${styles.inputImage} ${styles.imageButton}`}>{!showGallery ? "Search image in Media Library" : "Close Gallery"}</div>
       <h3>{message}</h3>
       {
        showGallery ?
        <div>
        <div className={styles.gridMedia} >
                { images &&
                    images.map( (img:string, index:number) => (   
                            <img onClick={()=> {setImageURL(img)}} key={index}  className={styles.imageGrid}  src={img} />
                    )
                    )
                }
            </div>
        </div>
        :
        <></>
       }
        </div>
    )
}


export default ImageLoader
